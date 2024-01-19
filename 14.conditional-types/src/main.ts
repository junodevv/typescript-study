// type SomeTeyp = T extends U ? X : Y;
type SomeType = number;
type ConditionalType = SomeType extends string ? string : null;

function fn1<T>(value: T){
    const fn2 = (
        arg: T extends boolean ? 'A' : 'B'
    ) => {};
    return fn2;
}

const resultA = fn1(''); // 여기서 arg = 'B'
const resultB = fn1(true); // 여기서 arg = 'A'

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;
// 호버 해보면 never 타입은 자동으로 제거 된것을 확인 할 수 있다.

const A: StringOrNot<string> = 'string'; // 타입: string
// const B: StringOrNot<number> = 1; // 타입: never

// Exclude 의 정의
// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<'a'|'b'|'c', 'a'|'b'>; // 'c'

/**
 * 'a' extends 'a' | 'b' ? never : T('a') ==> never
 * 'b' extends 'a' | 'b' ? never : T('b') ==> never
 * 'c' extends 'a' | 'b' ? never : T('c') ==> T('c')
 */

/* 하나씩 각각 디스트리뷰티블리 하게 비교하기 */
type AType<T> = T extends string | number ? T : never;

type MyResult = AType<string | number | boolean>; // string | number

/* 함수로 통으로 비교하기 */
type ATypeF<T> = (()=>T) extends ()=> string | number ? T : never;

type MyResultF = ATypeF<string | number | boolean>; // never

/* 튜플로 통으로 비교하기 */
type ATypeTuple<T> = [T] extends [string | number] ? T : never;

type MyResultTuple = ATypeTuple<string | number | boolean>; // never