// https://juejin.cn/post/7005376185278414861#heading-5
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// const 断言 
// 如果修饰数组 -> 只读元组类型
// 修饰对象 添加 readonly关键字
// 修饰其他字面量 使字面量不能拓展

// typeof 
// 获取修饰内容的类型

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type tuple1 = typeof tuple;
type tuple2 = tuple1[number];

type TupleToObject<P extends readonly any[]> = { [K in P[number]]: K }