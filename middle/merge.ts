namespace merge {
    type foo = {
        name: string;
        age: string;
    }
    type coo = {
        age: number;
        sex: string
    }

    type Merge<T extends { [k in string]: any }, U extends { [k in string]: any }> = {
        [k in keyof T | keyof U]: k extends keyof U ? U[k] : k extends keyof T ? T[k] : never
    }

    type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
}