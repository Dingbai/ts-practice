namespace capitalize {
    type capitalized = Capitalize<'ellow orld'> // expected to be 'Hello world'
    type Capitalize<T extends string> = T extends `${infer F}${infer K}${infer U}` ? `${Uppercase<F>}${Uppercase<K>}${U}` : never
    // T => h | ellow world   

    type a = ReplaceOnce<'i', 'helho world'>
    type ReplaceOnce<Replace extends string, Subject extends string> =
        Subject extends `${infer S}${infer R}` ? `${Replace}${R}` : never

    type ReplaceAll<Search extends string, Replace extends string, Subject extends string> =
        Subject extends `${infer L}${Search}${infer R}` ? ReplaceAll<Search, Replace, `${L}${Replace}${R}`> : Subject
}