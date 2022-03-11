namespace Replace {
    type a = Replace<'o', 'b', 'hello'>
    type Replace<S extends string, R extends string, T extends string> = T extends `${infer F}${S}${infer U}` ? `${F}${R}${U}` : T
}