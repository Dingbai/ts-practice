namespace flatten {

    type Flatten<T extends any[]> = T extends [infer F, ...infer R] ?
        F extends any[] ? [...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>] :
        T

    type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
}