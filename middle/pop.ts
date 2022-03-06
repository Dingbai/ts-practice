namespace Pop {
    // 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。
    // 额外：同样，您也可以实现Shift，Push和Unshift吗？

    type arr1 = ['a', 'b', 'c', 'd']
    type arr2 = [3, 2, 1]

    type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
    type re2 = Pop<arr2> // expected to be [3, 2]
    type re3 = Shift<arr2> // expected to be [3, 2]
    // 删除第一个
    type Shift<T extends any[]> = T extends [infer U, ...infer P] ? P : never
    // 删除最后一个
    type Pop<T extends any[]> = T extends [...infer U, infer P] ? U : never
    // 从数组末尾添加
    type Push<T extends any[], V extends any> = [...T, V]
    // 从数组前面添加
    type Unshift<T extends any[], V extends any> = [V, ...T]
}