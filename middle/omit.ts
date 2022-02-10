// 不使用 Omit 实现 TypeScript 的 Omit<T, K> 范型。
// Omit 会创建一个省略 K 中字段的 T 对象。

namespace omit {
    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    type TodoPreview = Omit<Todo, 'description' | 'title'>
    type TodoPreview1 = myOmit<Todo, 'description' | 'title'>

    const todo: TodoPreview = {
        completed: false,
    }

    type myOmit<T, P extends keyof T> = { [K in Exclude<keyof T, P>]: T[K] }
}