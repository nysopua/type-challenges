type MyCapitalize<S extends string> = S extends `${infer T}${infer U}` ? `${Uppercase<T>}${U}` : ''

type J = MyCapitalize<'foobar'>
