namespace Override {
    type a = { name: string, age: number };

    type Override<T, P> = Omit<T, keyof P> & P;
    const b1: Override<a, { age?: number }> = { name: '1' };

    type c = { a: string, b: number };

    type d = Omit<c, 'b'>;
}