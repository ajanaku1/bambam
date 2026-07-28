import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";

const sourceRoot = new URL("../src/", import.meta.url);

function collectSourceFiles(directoryUrl) {
  return readdirSync(directoryUrl, { withFileTypes: true }).flatMap((entry) => {
    const entryUrl = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directoryUrl);
    if (entry.isDirectory()) {
      return collectSourceFiles(entryUrl);
    }
    return entry.name.endsWith(".tsx") || entry.name.endsWith(".css")
      ? [entryUrl]
      : [];
  });
}

function readSource() {
  return collectSourceFiles(sourceRoot)
    .map((fileUrl) => readFileSync(fileUrl, "utf8"))
    .join("\n");
}

function expectText(source, text) {
  assert.ok(source.includes(text), `Expected source to include: ${text}`);
}

const source = readSource();

[
  "Zalary",
  "ShadowLend",
  "Punt",
  "Hanami",
  "InferMart",
  "Headhunter",
  "Top 4 finalist",
  "Tether Developers Cup",
  "Round of 32",
  "0G Zero Cup",
  "Top 100",
  "QVAC Hackathon",
  "Hackathon winner",
  "https://github.com/ajanaku1/Zalary",
  "https://zalary.vercel.app",
  "https://ajanaku1.github.io/bambam",
  "Product engineer",
  "Applied AI",
  "Onchain systems",
  "Privacy and payments",
  "Consumer products",
  "data-section-link",
].forEach((text) => expectText(source, text));

assert.ok(!source.includes("WellEarned"), "WellEarned must be replaced by Zalary");
assert.ok(
  !source.includes("AI & Crypto Product Engineer"),
  "The portfolio must not use the narrow AI/crypto title",
);

[
  /transition-all/,
  /transition:\s*all/,
  /animation:[^;]*\blinear\b/,
  /scale\(0\)/,
  /\bany\b/,
].forEach((pattern) => {
  assert.ok(!pattern.test(source), `Forbidden pattern found: ${pattern}`);
});

console.log("Portfolio contract passed.");
