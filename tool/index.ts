// 内置泛型实现
namespace tool {
    type Foo = Record<'a', string>
    type MyRecord<K extends string | number | symbol, V> = { [P in K]: V }
    type R = MyRecord<'a', string>

    type c = { a: number, b: string }
    type p = Partial<c>
    type MyPartial<T> = { [K in keyof T]?: T[K] | undefined }
    type p1 = MyPartial<c>

    type r = Required<p>
    type MyRequired<T> = { [K in keyof T]-?: T[K] }
    type r1 = MyRequired<p>

    type re = Readonly<c>
    type MyReadOnly<T> = { readonly [K in keyof T]: T[K] }
    type re1 = MyReadOnly<c>

    type Pi = Pick<c, 'a'>
    type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
    type pi1 = MyPick<c, 'a'>
}