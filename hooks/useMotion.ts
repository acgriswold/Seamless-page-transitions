export function useTransition() {
  const duration = 0.8;
  const snappy = { duration, ease: [0.6, 0.01, -0.05, 0.9] };
  const smooth = { duration, ease: [0.4, 0.13, 0.44, 0.97] };
  const smoothLegacy = { duration, ease: [0.43, 0.13, 0.23, 0.96] };

  return { smooth, snappy };
}
