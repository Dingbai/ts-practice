namespace Trim {
    type a = Trim<' hello '>
    type b = Trim<'hello '>
    type c = Trim<'h ello '>

    // 这里的 U 去的是 hello 整体
    type Trim<T> = T extends `${infer U} ` | ` ${infer U} ` | ` ${infer U}` ? Trim<U> : T;
}