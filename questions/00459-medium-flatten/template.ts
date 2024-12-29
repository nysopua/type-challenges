// Flatten<[X, ...Y], K> ：
// 1. X が配列なら、その要素を先頭に並べて (展開して) ...Y と合わせる
// 2. X が配列でないなら、K に X をプッシュする
// 3. 残りの要素で再帰
// S が空になったら K を返す
type Flatten<T extends any[], K extends any[] = []> = T extends [infer X, ...infer Y] ? (X extends any[] ? Flatten<[...X, ...Y], K> : Flatten<[...Y], [...K, X]>) : K
