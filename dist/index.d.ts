/** Clamp x in the range [min, max]. */
export declare function clamp(x: number, min: number, max: number): number;
/** Linearly interpolate between a at t=0 and b at t=1 (t is NOT clamped). */
export declare function interpolate(a: number, b: number, t: number): number;
/** Linearly interpolate between a at t=0 and b at t=1 (t IS clamped to [0, 1]). */
export declare function safeInterpolate(a: number, b: number, t: number): number;
/** Smooth step (order 3 sigmoid). */
export declare function smooth(x: number): number;
/** Smoother step (order 5 sigmoid). */
export declare function smoother(x: number): number;
