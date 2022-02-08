// 从联合类型T中排除U的类型成员，来构造一个新的类型。
// namespace nxclude {
// }
type a2 = {
    a: string,
    b: string
}
type a1 = {
    a: string
}

// type arr = Exclude(keyof a2, 'a')