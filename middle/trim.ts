namespace Trim {
    type a = Trim<' hello '>
    type b = Trim<'hello '>
    type c = Trim<'h ello '>

    type Trim<T extends string> = T extends ` ${infer U} ` | ` ${infer U}` | `${infer U} ` ? Trim<U> : T
}