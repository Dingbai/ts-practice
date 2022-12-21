namespace diff {
    // Get an Object that is the difference between O & O1

    type Foo = {
        a: string;
        b: number;
    }
    type Bar = {
        a: string;
        c: boolean
    }

    type t<T, U> = keyof T | keyof U
    type t1 = t<Foo, Bar>
    type t2 = Exclude<keyof Foo, keyof Bar & keyof Foo>

    // 交叉类型 取声明的所有类型，如果 有同名不同类型的 则返回never
    type t3 = (Foo & Bar)
    // 联合类型 赋值的时候可以满足a也可以满足b不过a和b公共的地方一定要满足 
    // 取值的时候取公共值
    type t4 = (Foo | Bar)

    const t: t3 = {
        a: '1',
        b: 1,
        c: true
    }

    const t1: t4 = {
        a: '1',
        c: true,
        b: 1,
    }

    type Inclued<T, U> = T extends U ? T : never

    type Diff<T, U> = Omit<T & U, keyof (T | U)>

    type Result1 = Diff<Foo, Bar> // { b: number, c: boolean }
    type Result2 = Diff<Bar, Foo> // { b: number, c: boolean }

}