namespace merge {
    type foo = {
        name: string;
        age: string;
    }
    type coo = {
        age: number;
        sex: string
    }

    type Merge<T extends { [key in string]: any }, U extends { [key in string]: any }> = {
        [K in keyof T | keyof U]: K extends keyof T ? T[K] : K extends keyof U ? U[K] : never
    }

    type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
}