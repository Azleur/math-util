# Mathematics utilities

Number manipulation utility library written in TypeScript.

## Clamp

Clamp `x` in the range `[min, max]`.
```typescript
Clamp(x: number, min: number, max: number): number

const y01 = Clamp(-1, 2, 5); // -1 too small, gets clamped: y01 = 2.
const y02 = Clamp(3, 2, 5); // 3 inside interval [2, 5], is preserved: y02 = 3.
const y03 = Clamp(6, 2, 5); // 6 too big, gets clamped: y03 = 5.
```

## Interpolate

Linearly interpolate between `a` at `t=0` and `b` at `t=1` (`t` is **NOT** clamped).
```typescript
Interpolate(a: number, b: number, t: number): number

const y04 = Interpolate(1, 3, 0); // t=0 => a: y04 = 1.
const y05 = Interpolate(1, 3, 1); // t=1 => b: y05 = 3.
const y06 = Interpolate(1, 3, 0.5); // t=0.5 => midpoint: y06 = 2.
const y07 = Interpolate(1, 3, 2); // t=2 => overshoot: y07 = 4.
```

## Map

Rescale point `x` from the interval `[aIn, bIn]` to the interval `[aOut, bOut]`.
```typescript
Map(x: number, aIn: number, bIn: number, aOut: number, bOut: number): number

const y08 = Map(1, 1, 3, 2, 5); // 1 at beginning of [1,3] => maps to beginning of [2,5]: y08 = 2.
const y09 = Map(2, 1, 3, 2, 5); // 2 at middle of [1,3] => maps to middle of [2,5]: y09 = 3.5.
const y10 = Map(3, 1, 3, 2, 5); // 3 at end of [1,3] => maps to end of [2,5]: y10 = 5.
```

## SafeInterpolate

Linearly interpolate between `a` at `t=0` and `b` at `t=1` (`t` **IS** clamped to `[0, 1]`).
```typescript
SafeInterpolate(a: number, b: number, t: number): number

const y11 = SafeInterpolate(1, 3, 0); // t=0 => a: y11 = 1.
const y12 = SafeInterpolate(1, 3, 1); // t=1 => b: y12 = 3.
const y13 = SafeInterpolate(1, 3, 0.5); // t=0.5 => midpoint: y13 = 2.
const y14 = SafeInterpolate(1, 3, 2); // t=2 => clamped: y14 = 3.
```

## Smooth

[Smooth step](https://en.wikipedia.org/wiki/Smoothstep): smooth interpolation from 0 to 1 with vanishing first derivative. Equiv. to `3x² - 2x³` with `x` clamped to `[0,1]`.
```typescript
Smooth(x: number): number

const y15 = Smooth(0.00); // y15 = 0.
const y16 = Smooth(0.25); // y16 = 0.156.
const y17 = Smooth(0.50); // y17 = 0.5.
const y18 = Smooth(0.75); // y18 = 0.844.
const y19 = Smooth(1.00); // y19 = 1.
```

## Smoother

[Smoother step](https://en.wikipedia.org/wiki/Smoothstep): smooth interpolation from 0 to 1 with vanishing first and second derivatives. Equiv. to `6x⁵ - 15x⁴ + 10x³` with `x` clamped to `[0,1]`.
```typescript
Smoother(x: number): number

const y20 = Smoother(0.00); // y20 = 0.
const y21 = Smoother(0.25); // y21 = 0.104.
const y22 = Smoother(0.50); // y22 = 0.5.
const y23 = Smoother(0.75); // y23 = 0.896.
const y24 = Smoother(1.00); // y24 = 1.
```
