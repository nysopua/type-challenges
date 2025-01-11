type ReplaceKeys<U extends object, T extends string | number | symbol, Y extends object> =
  {
    [P in keyof U]: P extends T
      ? P extends keyof Y
        ? Y[P]
        : never
      : U[P];
  }
