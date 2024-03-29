namespace PromiseAll {
    // 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise < T >，
    // 其中T是解析的结果数组。

    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise<string>((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    });

    // expected to be `Promise<[number, number, string]>`
    const p = Promise.all([promise1, promise2, promise3] as const)

    let a = { a: 12, b: '2' }
    type b = typeof a;
}