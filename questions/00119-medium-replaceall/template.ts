// type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer U}${From}${infer V}` ? ReplaceAll<`${U}${To}${V}`, From, To> : S

// type Hoge = ReplaceAll<'foobarfoobar', 'ob', 'b'>
// これだと、再帰的にobをbに変換するので、fbarfbarになってしまう。

type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer U}${From}${infer V}` ? `${U}${To}${ReplaceAll<`${V}`, From, To>}` : S
