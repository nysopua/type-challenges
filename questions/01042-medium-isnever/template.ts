type IsNever<T> = [T] extends [never] ? true : false

// never型は空のunion型であり、空のunion型をdistributive conditional typeに渡しても適用されずneverになる
// また、distributiveの性質をdisableすれば期待通りの挙動になる。
