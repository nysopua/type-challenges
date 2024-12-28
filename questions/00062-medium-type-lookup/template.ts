type LookUp<U extends { readonly type: string }, T extends string> = U extends { type: T } ? U : never
