export const noop = () => { };

// 管道函数，函数从左到右调用
export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
