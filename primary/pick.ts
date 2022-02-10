// pick

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
// extends 类型约束
// P extends keyof T  p 必须来自 keyof T 返回的联合类型中

// keyof 返回修饰对象类型key组成的联合类型

// in 关键字
// 循环 联合类型 枚举类型
// 属于某个基础类型

type Todo1 = {
    [key in string]: any
}
type MyPick<T, P extends keyof T> = { [K in P]: T[K] };
