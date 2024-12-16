type TupleToUnion<T> = T extends (infer S)[] ? S : never

// type TupleToUnion<T extends any[]> = T[number]でも良い
