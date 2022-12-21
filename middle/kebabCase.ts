namespace kebabCase {

    type C<T extends string> = T extends `${infer F}${infer R}` ? `${F}${C<R>}` : T

    type a = C<'hello'>

    type KebabCase<T extends string> =
        T extends `${infer F}${infer R}` ?
        R extends Uncapitalize<R> ? `${Uncapitalize<F>}${KebabCase<R>}` :
        `${Uncapitalize<F>}-${KebabCase<R>}` :
        T

    type FooBarBaz = KebabCase<"FooBarBaz">;
    const foobarbaz: FooBarBaz = "foo-bar-baz";

    type DoNothing = KebabCase<"do-nothing">;
    const doNothing: DoNothing = "do-nothing";
}