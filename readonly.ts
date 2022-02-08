// readonly
interface Test {
    title: string
    description: string
}

const test: Readonly<Test> = {
    title: "Hey",
    description: "foobar",
}

// test.title = "Hello" // Error: cannot reassign a readonly property
// test.description = "barFoo" // Error: cannot reassign a readonly property

type MyReadOnly<T> = { readonly [K in keyof T]: T[K] }