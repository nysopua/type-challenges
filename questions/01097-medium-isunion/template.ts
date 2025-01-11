type IsUnion<T, U = T> = [T] extends never[]
  ? false
  : T extends T
    ? [U] extends [T]
        ? false
        : true
    : never
