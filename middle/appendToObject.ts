namespace appendToObject {
    type Test = { id: '1' }

    type AppendToObject<T extends { [key in string]: any }, K extends string, V> = {
        [Key in keyof T | K]: Key extends K ? V : T[Key]
    }

    type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
}