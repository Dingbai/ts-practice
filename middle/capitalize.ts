namespace Capitalize {
    type a = Capitalize<'hello world'>

    type Capitalize<T extends string> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : T

    const characterMap = {
        'a': 'A',
        'b': 'B',
        'c': 'C',
        'd': 'D',
        'e': 'E',
        'f': 'F',
        'g': 'G',
        'h': 'H',
        'i': 'I',
        'j': 'J',
        'k': 'K',
        'l': 'L',
        'm': 'M',
        'n': 'N',
        'o': 'O',
        'p': 'P',
        'q': 'Q',
        'r': 'R',
        's': 'S',
        't': 'T',
        'u': 'U',
        'v': 'V',
        'w': 'W',
        'x': 'X',
        'y': 'Y',
        'z': 'Z'
    } as const;

    type CharacterMap = typeof characterMap;
    type ab = keyof CharacterMap;
    type transform<T extends string> = T extends keyof CharacterMap ? typeof characterMap[T] : T;
    //   type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${transform<F>}${R}`: S;

    type capitalized = Capitalize<'ellow orld'> // expected to be 'Hello world'
    // type Capitalize<T extends string> = T extends `${infer F}${infer K}${infer U}` ? `${Uppercase<F>}${Uppercase<K>}${U}` : never
    // // T => h | ellow world   

    // type a = ReplaceOnce<'i', 'helho world'>
    type ReplaceOnce<Replace extends string, Subject extends string> =
        Subject extends `${infer S}${infer R}` ? `${Replace}${R}` : never

    // type ReplaceAll<Search extends string, Replace extends string, Subject extends string> =
    //     Subject extends `${infer L}${Search}${infer R}` ? ReplaceAll<Search, Replace, `${L}${Replace}${R}`> : Subject
}