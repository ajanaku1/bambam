/**
 * GitHub Pages serves the site from /bambam. next/link and the metadata
 * helpers do not cover raw asset paths, so anything referenced directly —
 * icons, next/image with unoptimized loading — has to prefix this itself.
 */
export const basePath = process.env.GITHUB_PAGES === "true" ? "/bambam" : "";
