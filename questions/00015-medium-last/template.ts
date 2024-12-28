type Last<T extends any[]> = T extends [...any, infer S] ? S : never
