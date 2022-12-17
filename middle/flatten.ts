namespace flatten {

    type Flatten<T extends any[]> = T extends [infer U, ...infer P] ?
        U extends any[] ? [...Flatten<U>, ...Flatten<P>] : [U, ...Flatten<P>] :
        T;


    type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

}