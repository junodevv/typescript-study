/* Mapped Type 을 이용한 Utillity type*/ 
type Properties = 'PropA' | 'PropB';

type MyNewType = MyMappedType<{a:'a', b: 'b'}>

type MyMappedType<T> = {
    [P in keyof T] : T[P];
}

/* Pick, Record Utilities */

/* Pick */
// 정의
/*
// T의 type을 Union으로 만든 애들 중, K의 type이 포함되어있어야 Pick 한다.
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
*/
type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P]
}

type MyNewType2 = Pick1<{a: 'a', b: 'b', c: 'c'}, 'a'>

/* Record */
// 정의
/*
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
*/
type Record1<K extends keyof any, T> = {
    [P in K]: T;
}

const myNewRecord: Record1<string, number> = {};
myNewRecord.a = 10;
myNewRecord.b = 10;