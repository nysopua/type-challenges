type AppendToObject<T extends object, U extends string, V> = {
  [P in (keyof T) | U]: P extends keyof T ? T[P] : V
}

// type AppendToObject<T extends object, U extends string, V> = {
//   [P in keyof T]: T[P],
//   [P in U]: V
// }
// などとはできない。
