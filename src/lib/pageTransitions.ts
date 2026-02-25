// Page transition animations for paged resume UI
export const ease = [0.22, 1, 0.36, 1] as const;

export const pageTransition = {
  initial: { opacity: 0, x: 100, scale: 0.98 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100, scale: 0.98 },
  transition: { duration: 0.5, ease },
};

export const pageTransitionUp = {
  initial: { opacity: 0, y: 60, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -60, scale: 0.98 },
  transition: { duration: 0.5, ease },
};

export const stagger = (index: number, base = 0.06) => ({
  duration: 0.4,
  delay: index * base,
  ease,
});

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease },
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease },
};

export function getPageLabel(index: number): string {
  const labels = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
  ];
  return labels[index] || `Page ${index + 1}`;
}
