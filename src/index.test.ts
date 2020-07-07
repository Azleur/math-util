import { Clamp, Interpolate, SafeInterpolate, Smooth, Smoother, Map, IsEpsilon } from './index';

test("Clamp(x, a, b) clamps x in the range [a, b]", () => {
    expect(Clamp(1, 2, 4)).toBe(2);
    expect(Clamp(2, 2, 4)).toBe(2);
    expect(Clamp(3, 2, 4)).toBe(3);
    expect(Clamp(3.5, 2, 4)).toBe(3.5);
    expect(Clamp(4, 2, 4)).toBe(4);
    expect(Clamp(5, 2, 4)).toBe(4);
});

test("Interpolate(a, b, t) does unbounded linear interpolation between a and b", () => {
    expect(Interpolate(1, 3, 0)).toBe(1);
    expect(Interpolate(1, 3, 0.5)).toBe(2);
    expect(Interpolate(1, 3, 1)).toBe(3);
    expect(Interpolate(1, 3, -1)).toBe(-1);
    expect(Interpolate(1, 3, 1.5)).toBe(4);
});

test("Map(x, a0, b0, a1, b1) remaps x from [a0,b0] to [a1, b1] and is NOT clamped", () => {
    expect(Map(1, 1, 3, 2, 5)).toBe(2); // Min to min.
    expect(Map(3, 1, 3, 2, 5)).toBe(5); // Max to max.
    expect(Map(2, 1, 3, 2, 5)).toBe(3.5); // Midpoint to midpoint.
    expect(Map(0, 1, 3, 2, 5)).toBe(0.5); // Not clamped (below).
    expect(Map(5, 1, 3, 2, 5)).toBe(8); // Not clamped (above).
});

test("SafeInterpolate(a, b, t) does clamped linear interpolation between a and b", () => {
    expect(SafeInterpolate(1, 3, 0)).toBe(1);
    expect(SafeInterpolate(1, 3, 0.5)).toBe(2);
    expect(SafeInterpolate(1, 3, 1)).toBe(3);
    expect(SafeInterpolate(1, 3, -1)).toBe(1);
    expect(SafeInterpolate(1, 3, 1.5)).toBe(3);
});

test("Smooth(x) Smoothly transitions from 0 for x < 0 to 1 for x > 1 (3d degree sigmoid)", () => {
    expect(Smooth(-1)).toBe(0);
    expect(Smooth(0)).toBe(0);
    expect(Smooth(0.5)).toBe(0.5);
    expect(Smooth(1)).toBe(1);
    expect(Smooth(2)).toBe(1);
});

test("Smoother(x) Smoothly transitions from 0 for x < 0 to 1 for x > 1 (5th degree sigmoid)", () => {
    expect(Smoother(-1)).toBe(0);
    expect(Smoother(0)).toBe(0);
    expect(Smoother(0.5)).toBe(0.5);
    expect(Smoother(1)).toBe(1);
    expect(Smoother(2)).toBe(1);
});

test("IsEpsilon(x) returns true for very small values of |x|, false otherwise", () => {
    expect(IsEpsilon(0)).toBe(true);
    expect(IsEpsilon(1)).toBe(false);
    expect(IsEpsilon(Number.EPSILON)).toBe(true);
    expect(IsEpsilon(0.0001)).toBe(false);
    expect(IsEpsilon(9999)).toBe(false);

    expect(IsEpsilon(-0)).toBe(true);
    expect(IsEpsilon(-1)).toBe(false);
    expect(IsEpsilon(-Number.EPSILON)).toBe(true);
    expect(IsEpsilon(-0.0001)).toBe(false);
    expect(IsEpsilon(-9999)).toBe(false);
});
