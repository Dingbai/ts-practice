namespace absolute {
    type Test = -100;

    type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer P}` ? `${P}` : `${T}`

    type Result = Absolute<Test>; // expected to be "100"
}