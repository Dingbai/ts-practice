namespace appendArguments {
    type Fn = (a: number, b: string) => number

    type AppendArgument<Fn extends (...args: any[]) => any, A> =
        Fn extends (...args: infer Args) => infer R ? (x: A, ...args: Args) => R : never;

    type APPENDARG2 = (...arg: [a: 1, b: 2, c: 3]) => number

    type Params<T> = T extends (...args: infer R) => any ? R : never

    type a = Params<Fn>

    type Result = AppendArgument<Fn, boolean>
    // 期望是 (a: number, b: string, x: boolean) => number

}