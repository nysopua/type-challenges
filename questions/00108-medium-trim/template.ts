type Trim<S extends string> = S extends `${Space}${infer T}` ? Trim<T> : (S extends `${infer U}${Space}` ? Trim<U> : S)
