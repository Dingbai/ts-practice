// 实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，
// 以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。

// namespace iif {
//     type A = IF<true, 'a', 'b'>  // expected to be 'a'
//     type B = IF<false, 'a', 'b'> // expected to be 'b'
//     type IF<C extends boolean, T, F> = C extends true ? T : F
// }

namespace If {
    type A = If<true, 'a', 'b'>  // expected to be 'a'
    type B = If<false, 'a', 'b'> // expected to be 'b'
    type If<C, T, F> = C extends true ? T : F
}