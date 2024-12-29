type StringToArray<S extends string> = S extends `${string}${infer Tail}` ? [1, ...StringToArray<Tail>] : []

type LengthOfString1<S extends string> = StringToArray<S>['length']
