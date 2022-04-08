namespace UnPacked {
    type T0 = Unpacked<string>; // string
    type T1 = Unpacked<string[]>; // string
    type T2 = Unpacked<() => string>; // string
    type T3 = Unpacked<Promise<string>>; // string
    type T4 = Unpacked<Promise<string>[]>; // Promise<string>
    type T5 = Unpacked<Unpacked<Promise<string>[]>>; // string

    type Unpacked<T> = T extends (...args: any) => infer U ?
        U : T extends [infer U] ?
        U : T extends Promise<infer U> ?
        U : T

    type T10 = Foo<{ a: string; b: string }>; // string
    type T11 = Foo<{ a: string; b: number }>; // string | number

    type Foo<T> = T extends { [key: string]: infer U } ? U : T

    type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
    type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }>; // string & number

    // type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never;

    // type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
    //     ? U
    //     : never;
    // todo 未得到预期结果
    // 结果不对？？？？？？
    type Bar<T> = T extends { [key: string]: (args: infer U) => void } ? U : T
}