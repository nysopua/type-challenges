type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer S) => infer T ? (...args: [...S, A]) => T : never

// (...args: S, x: A) => Tなどとはできない。先に配列の型を作ってから、argsとしてバラす。
