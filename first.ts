type arr1 = ['a', 'b', 'c']
type arr2 = []

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

// T extends [] ? never : T[0] 这里的判断如果 T 是空数组 则为true
type First<T extends any[]> = T extends [] ? never : T[0]

// never 永远不存在值的类型 never 只能赋值给never
// void 没有任何类型
type A = void;

let a: A = null;

interface Foo {
    type: 'foo'
}

interface Bar {
    type: 'bar'
}

interface Baz {
    type: 'baz'
}

type All = Foo | Bar

function handleValue(val: All) {
    switch (val.type) {
        case 'foo':
            // 这里 val 被收窄为 Foo
            break
        case 'bar':
            // val 在这里是 Bar
            break
        default:
            // val 在这里是 never
            const exhaustiveCheck: never = val
            break
    }
}