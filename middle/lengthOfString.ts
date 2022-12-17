namespace lengthOfString {
    type SplitStr<T extends string> = T extends `${infer F}${infer R}` ? [F, ...SplitStr<R>] : []
    type str = SplitStr<'hello'>

    type LengthOfString<T extends string> = SplitStr<T>['length']

    type str1 = LengthOfString<'hello'>
}