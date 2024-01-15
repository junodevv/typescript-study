// Boolean
let boolean: boolean
let falseBoolean: boolean = false;

// Number
let number: number
let integer: number = 6;
let float: number = 1.2345

// String
let string: string
let firstName: string = 'Doe';

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['john', 'kim'];
let names2: Array<String> = ['john', 'kim']; // 인터페이스를 사용해주는 방법, 결과는 같다.

// 여러가지 타입을 가지는 배열(유니온 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

// 여러타입을 단언 할 수 없다면 == any
let someArray: any[] = ['John', 1, [], {}, false];

// Interface, Type

// 읽기 전용 배열 생성(readonly, ReadonlyArray
let stringArray: readonly string[]= ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

// stringArray.push('C'); // 에러

// Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];

let users: [number,string][];
users = [[1,'juno'], [2,'lee']];

let tuple2: [string, number];
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);

// any
let any: any = 'abc';
any = 1;
any = [];

// unknown, 어떤 타입이든 할당할 순 있지만 이 변수가 다른 변수의 값으로 들어갈 순 없음
let unknown: unknown = false;
// let boolean1: boolean = unknown; // 에러
let boolean1: boolean = unknown as boolean; // 타입단언(을 하면 가능)

// Object
let obj: object = {};
let arr: object = [];
// let null: object = null; // 에러
                            // tsconfig에서 `"strict": true,` 설정을 해줬기 때문에 null을 할당할 수 없음
let date: object = new Date();

const obj1: {id: number, title: string}={
    id: 1,
    title: 'title1'
}

// Union
let union: (string|number);
union = 'hi';
union = 123;
// union= []; // 에러

// Function
//let func1; // 이렇게만쓰면 밑에서 에러남
// 함수명: (매개변수1:type, 매개변수2:type ) => return Type
let func1: (arg1: number, arg2: number) => number;
func1 = function(x,y){
    return x*y;
}

let func2: () => void;
func2 = function(){
    console.log('hi');
}

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
let void2: void = undefined;

// void
function greeting(): void{
    console.log('hi');
}

const hi: void = greeting();
console.log(hi); // undefined

// never, 항상 오류를 출력하거나 리턴값을 절대 내보내지 않음을 확신할때 사용
function throwError(): never{
    throw new Error('error');
}

function keepProcessing(): never{
    while(true){
        console.log('hi');
    }
}

const never: [] = []; // 이렇게 배열 타입이 비어있으면 never타입이 된다.
// never.push(1); // never 타입이라서 push 하지 못하게됨

