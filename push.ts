namespace push {
    type Result = Push<[1, 2], '3'> // [1, 2, '3']

    type Push<T extends any[], U> = [...T, U]

    type ShiftResult = Unshift<[1, 2], 0> // [0, 1, 2,]

    type Unshift<T extends any[], U> = [U, ...T]
}