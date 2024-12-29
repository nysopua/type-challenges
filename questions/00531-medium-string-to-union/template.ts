type StringToUnion<T extends string, U extends string = never> = T extends `${infer A}${infer B}` ? A | StringToUnion<B, U> : U
