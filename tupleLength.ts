type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5

type Length<T extends readonly any[]> = T extends { length: infer U } ? U : never

// infer 推断类型

type MyReturnType<T> = T extends (...args: any[]) => infer U ? U : never

type func = () => number;
type variable = () => string;
type funcReturnType = MyReturnType<func>; // funcReturnType 类型为 number
type varReturnType = ReturnType<variable>; // varReturnType 类型为 string


type T11 = F<{ a: string; b: number }>
type T12 = F<{ a: string; b: string }>

type F<T> = T extends { [key: string]: infer U } ? U : never
type ElementOf<T> = T extends (infer R)[] ? R : never;