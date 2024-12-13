// ClassをReturnTypeでは受け付けたくないので、
// type MyReturnType<T extends Function> = T extends (...args: any[]) => infer S ? S : never
// とするのはNG

// Function を使用した場合:
// より緩い制約
// コンストラクタ関数などもOK
// 関数以外は受け付けない

// (...args: any[]) => unknown を使用した場合:
// より厳密な制約
// 呼び出し可能な関数のみを受け付ける
// コンストラクタ関数は受け付けない

type MyReturnType<T extends (...args: any[]) => unknown> = T extends (...args: any[]) => infer S ? S : never
