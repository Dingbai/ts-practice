namespace lengthOfString {
    type strToArr<T extends string> = T extends `${infer F}${infer R}` ? [F, ...strToArr<R>] : []

    type str = strToArr<'hello'>

    type LengthOfString<T extends string> = strToArr<T>['length']

    type str1 = LengthOfString<'hello'>
}