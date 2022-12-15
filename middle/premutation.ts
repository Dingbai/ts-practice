namespace premutation {
    type distribute<T> = T extends infer U ? U : never
    // 类型变量不能直接 extends never 这样会返回 never
    type test<T> = T extends never ? true : never
    type t = test<'1'>

    type test1<T> = [T] extends [never] ? true : false
    type t1 = test1<never>
    // 判断类型是否是 never
    type IsNeverType<T> = T extends never ? true : never;
    type is = IsNeverType<never>

    type a = distribute<'1' | '2'>

    type b = Exclude<'1' | '3' | '2', '2'>

    // 循环 C extends C
    // 1 2 3
    // 12 3
    // 21 3
    // 1 32
    // 1 23

    // ????
    type unionType<T> = T extends T ? T : never
    type u = unionType<1 | 2 | 3 | 4>

    type Permutation<T, C = T> = [T] extends [never]
        ? []
        : C extends C
        ? // another way is 'K extends K', also check https://github.com/type-challenges/type-challenges/issues/614#issue-779242337
        [C, ...Permutation<Exclude<T, C>>]
        : []
    // 1 [2,3]
    // 2 [3,1]
    // 3

    type c = Permutation<1 | 2 | 3>
}