// コンパイラは Conditional Types (T extends U ? X : Y) のうち T が型パラメータ単体だった場合は必ず遅延評価する

type IsEqual<T, U> =
  (<Dummy>() => Dummy extends { t: T, u: U } ? true : false) extends
  (<Dummy>() => Dummy extends { t: U, u: T } ? true : false)
    ? true
    : false

type Includes<T extends readonly unknown[], U> =
  T extends [infer Head, ...infer Tail]
    ? IsEqual<Head, U> extends true
      ? true
      : Includes<Tail, U>
    : false
