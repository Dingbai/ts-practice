namespace absolute {
    type Test = -100;

    type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? `${R}` : `${T}`

    type Result = Absolute<Test>; // expected to be "100"
}