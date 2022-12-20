namespace kebabCase {

    type C<T extends string> = T extends `${infer F}${infer R}` ? `${F}${C<R>}` : T

    type a = C<'hello'>

    type KebabCase<S extends string> =
        S extends `${infer First}${infer Rest}` ?
        Rest extends Uncapitalize<Rest> ?
        `${Uncapitalize<First>}${KebabCase<Rest>}` :
        `${Uncapitalize<First>}-${KebabCase<Rest>}` :
        S;


    type FooBarBaz = KebabCase<"FooBarBaz">;
    const foobarbaz: FooBarBaz = "foo-bar-baz";

    type DoNothing = KebabCase<"do-nothing">;
    const doNothing: DoNothing = "do-nothing";
}