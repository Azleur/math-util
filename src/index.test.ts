import { clamp, interpolate, safeInterpolate, smooth, smoother } from './index';

test("clamp(x, a, b) clamps x in the range [a, b]", () => {
    expect(clamp(1, 2, 4)).toBe(2);
    expect(clamp(2, 2, 4)).toBe(2);
    expect(clamp(3, 2, 4)).toBe(3);
    expect(clamp(3.5, 2, 4)).toBe(3.5);
    expect(clamp(4, 2, 4)).toBe(4);
    expect(clamp(5, 2, 4)).toBe(4);
});

test("interpolate(a, b, t) does unbounded linear interpolation between a and b", () => {
    expect(interpolate(1, 3, 0)).toBe(1);
    expect(interpolate(1, 3, 0.5)).toBe(2);
    expect(interpolate(1, 3, 1)).toBe(3);
    expect(interpolate(1, 3, -1)).toBe(-1);
    expect(interpolate(1, 3, 1.5)).toBe(4);
});

test("safeInterpolate(a, b, t) does clamped linear interpolation between a and b", () => {
    expect(safeInterpolate(1, 3, 0)).toBe(1);
    expect(safeInterpolate(1, 3, 0.5)).toBe(2);
    expect(safeInterpolate(1, 3, 1)).toBe(3);
    expect(safeInterpolate(1, 3, -1)).toBe(1);
    expect(safeInterpolate(1, 3, 1.5)).toBe(3);
});

test("smooth(x) smoothly transitions from 0 for x < 0 to 1 for x > 1", () => {
    expect(smooth(-1)).toBe(0);
    expect(smooth(0)).toBe(0);
    expect(smooth(0.5)).toBe(0.5);
    expect(smooth(1)).toBe(1);
    expect(smooth(2)).toBe(1);
});

test("smoother(x) smoothly transitions from 0 for x < 0 to 1 for x > 1", () => {
    expect(smoother(-1)).toBe(0);
    expect(smoother(0)).toBe(0);
    expect(smoother(0.5)).toBe(0.5);
    expect(smoother(1)).toBe(1);
    expect(smoother(2)).toBe(1);
});
