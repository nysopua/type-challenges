type MyParameters<T extends (...args: any[]) => unknown> = T extends (...any: infer S) => unknown ? S : never
