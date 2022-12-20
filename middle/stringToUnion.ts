namespace stringToUnion {
    type Test = '123';

    // 这里为什么用never 而不是用 T
    // 1 2
    // 3 ''
    type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never

    type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
}