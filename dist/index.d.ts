/** Clamp x in the range [min, max]. */
export declare function Clamp(x: number, min: number, max: number): number;
/** Linearly interpolate between a at t=0 and b at t=1 (t is NOT clamped). */
export declare function Interpolate(a: number, b: number, t: number): number;
/** Linearly interpolate between a at t=0 and b at t=1 (t IS clamped to [0, 1]). */
export declare function SafeInterpolate(a: number, b: number, t: number): number;
/** Smooth step (order 3 sigmoid). */
export declare function Smooth(x: number): number;
/** Smoother step (order 5 sigmoid). */
export declare function Smoother(x: number): number;
