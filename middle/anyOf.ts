namespace anyof {

    type a = Record<PropertyKey, never>

    type unio = true | true | false | true

    const a1: unio = true

    type a2 = ['', 1, false, [], {}]

    type test<T extends any[]> = T[number]

    type a3 = test<a2>

    type Falsy = 0 | false | '' | undefined | null | [] | Record<PropertyKey, never>
    // ???????????????
    type AnyOf<T extends any[]> = T[number] extends Falsy ? false : true

    // '' extends falsy ？false: true |
    // 1 extends falsy ? false: true |
    // ...


    type Sample1 = AnyOf<['', 1, false, [], {}]> // expected to be true.
    type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.

    const c: Sample1 = true
}