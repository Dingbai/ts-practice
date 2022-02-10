// 实现内置的 Parameters 类型

namespace parameter {
    declare function f1(arg: { a: number; b: string }): void;

    type T0 = MyParameters<() => string>;
    type T1 = MyParameters<(s: string) => void>
    type T3 = MyParameters<typeof f1>

    type T4 = Parameters<any>

    type MyParameters<T extends (...args: any) => any> = T extends (...args: infer U) => any ? U : never
}