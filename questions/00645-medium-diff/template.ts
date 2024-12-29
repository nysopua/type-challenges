// type Diff<O, O1> = {
//   [K in keyof (O & O1) as K extends keyof (O | O1) ? never : K]: (O & O1)[K];
// }

// type Diff<O, O1> = Omit<O & O1, keyof O & keyof O1>

type Recalc<T> = { [K in keyof T]: T[K] }
type Diff<O, O1> = Recalc<Omit<O, keyof O1> & Omit<O1, keyof O>>

// Recalc<T> はただ「プロパティを再度 [K in keyof T]: T[K] で定義し直す」だけなので、型の実体としては本質的に同じ
// しかし TS コンパイラ的には、& や | が入り混じった状態を整理して、新たな型を再構築しなおすきっかけになる。
