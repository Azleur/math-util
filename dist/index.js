/** Clamp x in the range [min, max]. */
export function clamp(x, min, max) {
    return Math.max(min, Math.min(x, max));
}
/** Linearly interpolate between a at t=0 and b at t=1 (t is NOT clamped). */
export function interpolate(a, b, t) {
    return a + (b - a) * t;
}
/** Linearly interpolate between a at t=0 and b at t=1 (t IS clamped to [0, 1]). */
export function safeInterpolate(a, b, t) {
    if (t <= 0)
        return a;
    if (t >= 1)
        return b;
    return a + (b - a) * t;
}
/** Smooth step (order 3 sigmoid). */
export function smooth(x) {
    if (x <= 0)
        return 0;
    if (x >= 1)
        return 1;
    return x * x * (3 - x * 2); // 3x^2 - 2x^3
}
/** Smoother step (order 5 sigmoid). */
export function smoother(x) {
    if (x <= 0)
        return 0;
    if (x >= 1)
        return 1;
    return x * x * x * (10 + x * (-15 + 6 * x)); // 6x^5 - 15x^4 + 10x^3
}
