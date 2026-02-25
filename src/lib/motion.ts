// Shared animation configuration — single source of truth
// Easing: custom ease-out curve (similar to cubic-bezier(0.25, 0.46, 0.45, 0.94))
export const ease = [0.22, 1, 0.36, 1] as const;

// Standard transition presets
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease },
};

// Stagger children by index
export function stagger(index: number, base = 0.08) {
  return { duration: 0.5, delay: index * base, ease };
}
