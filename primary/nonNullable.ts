// 去除联合类型 中的 null 和 undefined
// namespace NonNullable {
//     type a = number | null;
//     type b = number | null | undefined;
//     type c = string | undefined;
//     type NonNullable<T> = T extends null | undefined ? never : T;

//     type a1 = NonNullable<a>;
//     type b1 = NonNullable<b>;
//     type c1 = NonNullable<c>;
// }

namespace NonNullable {
    type a = number | null;
    type b = number | null | undefined;
    type c = string | undefined;

    type NonNullable<T> = T extends null | undefined ? never : T;
}