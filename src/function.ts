export type Fn = () => void

/**
 * Run the given fn
 */
export const run = (fn: Fn) => fn()

/**
  * Run all functions in array
  */
export const runAll = (fns: Fn[]) => fns.forEach(run)
