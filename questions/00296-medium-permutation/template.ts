type Permutation<T, K = T> = [K] extends [never] ? [] : K extends T ? [K, ...Permutation<Exclude<T, K>>] : never
