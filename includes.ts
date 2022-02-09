// https://juejin.cn/post/7001857261756743694
// https://zhuanlan.zhihu.com/p/137745695
// https://github.com/type-challenges/type-challenges/issues/6261
// 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。

namespace includes {
    type a = ['Kars', 'Esidisi', 'Wamuu', 'Santana']
    type b = keyof a
    type isPillarMen = Includes<a, 'Santana'> // expected to be `false`

    // type Equal<T, P> = T extends P ? true : false

    type Equal<X, Y> =
        (<T>() => T extends X ? 1 : 2) extends
        (<T>() => T extends Y ? 1 : 2) ? true : false

    // type IsEqual<X, Y> = X extends Y ? Y extends X ? true : false : false
    type A1 = IsEqual<string, string> // true
    type A2 = IsEqual<string, number> // false
    type A3 = IsEqual<{ name: string }, { name: string }> // true
    type A4 = IsEqual<{ name: string }, { age: number }> // false
    type A5 = IsEqual<{ name: string }, { name?: string }> // false
    type A6 = IsEqual<true, boolean> // boolean
    type A7 = IsEqual<1 | 2, 1> // boolean

    type IsEqual<A, B> = [A, B] extends [B, A] ? true : false

    type Includes<T extends any[], P> = {} extends {
        [K in keyof T as Equal<T[K], P> extends true ? K : never]: T[K]
    } ? true : false
}