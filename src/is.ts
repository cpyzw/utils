const toString = (v: any) => Object.prototype.toString.call(v)

export const isBrowser = (): boolean => typeof window !== 'undefined'
export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isBoolean = (val?: any): val is boolean => typeof val === 'boolean'
export const isFunction = (val?: any): val is Function => typeof val === 'function'
export const isNumber = (val?: any): val is number => typeof val === 'number'
export const isString = (val?: unknown): val is string => typeof val === 'string'
export const isObject = (val?: any): val is object => toString(val) === '[object Object]'
export const isWindow = (val?: any): val is Window => toString(val) === '[object Window]' && typeof window !== 'undefined'
export const isError = (val?: any): val is Error => toString(val) === '[object Error]' && val instanceof Error
/**
 * @param val value to be judge
 * @returns whether value is undefined
 */
export const isUnDef = <T = unknown>(val?: T): val is T => {
  return !isDef(val)
}
/**
 * @param val value to be judge
 * @returns whether value is in `['', null, undefined]`
 */
export const isLooseFalsy = (val?: any): boolean => ['', null, undefined].includes(val)

/**
 * @param val value to be judge
 * @returns whether value is in `['', null, undefined, 0]`
 */
export const isStrictFalsy = (val?: any): boolean => ['', null, undefined, 0].includes(val)

/**
 * @param val value to be judge
 * @returns whether value is not in `['', null, undefined]`
 */
export const isLooseTruthy = (val?: any): boolean => !isLooseFalsy(val)

/**
 * @param val value to be judge
 * @returns whether value is not in `['', null, undefined, 0]`
 */
export const isStrictTruthy = (val?: any): boolean => !isStrictFalsy(val)

/**
 * Judge whether value is object and have no property
 * @param val value to be judge
 */
export const isEmptyObject = (val?: any): boolean => isObject(val) && Object.keys(val).length === 0

/**
 * Judge whether is in browser
 */
export const isClient = isBrowser()

/**
 * Judge whether object is promise
 * @param val value to be judge
 * @returns whether value is promise
 */
export const isPromise = <T>(val: any): val is Promise<T> => {
  return val
    && toString(val) === '[object Promise]'
    && isFunction(val.then)
    && isFunction(val.catch)
    && val instanceof Promise
}
