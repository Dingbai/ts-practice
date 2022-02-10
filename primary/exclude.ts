// https://juejin.cn/post/6998736350841143326#heading-7
// 从联合类型T中排除U的类型成员，来构造一个新的类型。
namespace nxclude {
    type a2 = {
        a: string,
        b: string
    }

    type c = MyExclude<keyof a2, 'b'>

    type MyExclude<T, U> = T extends U ? never : T
    // => 'a' extends 'b' ? never: 'a' | 'b' extends 'b' ? never: 'b'
    // => 'a' | never => 'a'
}