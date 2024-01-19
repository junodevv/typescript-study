"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = 'Doe';
// Array
// 한가지 타입만 가지는 배열
let names1 = ['john', 'kim'];
let names2 = ['john', 'kim']; // 인터페이스를 사용해주는 방법, 결과는 같다.
// 여러가지 타입을 가지는 배열(유니온 타입 사용)
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2];
// 여러타입을 단언 할 수 없다면 == any
let someArray = ['John', 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// stringArray.push('C'); // 에러
// Tuple
let tuple1;
tuple1 = ['a', 1];
let users;
users = [[1, 'juno'], [2, 'lee']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// any
let any = 'abc';
any = 1;
any = [];
// unknown, 어떤 타입이든 할당할 순 있지만 이 변수가 다른 변수의 값으로 들어갈 순 없음
let unknown = false;
// let boolean1: boolean = unknown; // 에러
let boolean1 = unknown; // 타입단언(을 하면 가능)
// Object
let obj = {};
let arr = [];
// let null: object = null; // 에러
// tsconfig에서 `"strict": true,` 설정을 해줬기 때문에 null을 할당할 수 없음
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title1'
};
// Union
let union;
union = 'hi';
union = 123;
// union= []; // 에러
// Function
//let func1; // 이렇게만쓰면 밑에서 에러남
// 함수명: (매개변수1:type, 매개변수2:type ) => return Type
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
// Null, Undefined, // "strictNullChecks": false 일때 에러안남 true일땐 에러 남
/*
let number1: number = undefined;
let string9: string = null;
let object: {a: 10, b: false} = undefined;
let array: any[] = null;
let undefined1: undefined =null;
let null1: null = undefined;
let void1: void = null;
*/
// void 는 "strictNullChecks": true 여도 undefined 넣어도 에러 안남
let void2 = undefined;
// void
function greeting() {
    console.log('hi');
}
const hi = greeting();
console.log(hi); // undefined
// never, 항상 오류를 출력하거나 리턴값을 절대 내보내지 않음을 확신할때 사용
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = []; // 이렇게 배열 타입이 비어있으면 never타입이 된다.
// never.push(1); // never 타입이라서 push 하지 못하게됨
