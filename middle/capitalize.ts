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

}