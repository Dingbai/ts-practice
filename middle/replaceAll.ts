namespace replaceAll {
    // 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。
    // 例如

    type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'

    type ReplaceAll<T extends string, S extends string, Re extends string> = T extends `${infer L}${S}${infer R}` ? ReplaceAll<`${L}${Re}${R}`, S, Re> : T
    // tSy p e s -> ty p e s
    // tySp e s -> typ e s
}