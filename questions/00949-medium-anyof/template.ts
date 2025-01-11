type AnyOf<T extends any[]> = T[number] extends 0 | '' | undefined | null | false | [] | { [key: string | number | symbol]: never }
  ? false : true

// type t3 = { name: 'test' } extends {} ? true : false // true
// type t4 = { name: 'test' } extends {[key:string]:never} ? true : false // false
// type t5 = {} extends {[key:string]:never} ? true : false // true
