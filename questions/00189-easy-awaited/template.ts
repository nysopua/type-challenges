type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T extends {
  then: (onfulfilled: (arg: infer V) => any) => any
} ? V : T
