type Merge<F extends object, S extends object> = {
  [P in (keyof F) | (keyof S)]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never
}

// 実際に「[P in (keyof F) | (keyof S)] と書いているなら、P は F か S のいずれかの keyof に確実に入っているだろう」と人間目線では思いがちです。ところが TypeScript では、
// もし F または S が何らかのジェネリック型で、別の箇所で再マージされるなどのコンテキストがある場合
// あるいは keyof F と keyof S が交差している・いないといった状況が曖昧
// というような事情で 「P が実質的に存在しないパターン」を考慮しないといけない となるケースが生じることがあります。
// そうするとコンパイラ視点で
// 「P extends keyof S に当てはまらない場合は F[P] を返すんだね。でも、もし P が F のキーでもなかったら いったい何が返るの…？」
// という形で「型エラーを出す可能性」があり、この実装が「不完全だ」とみなされるパターンが発生しえます。
