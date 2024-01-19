/* 예시1 */
type AType<T> = T extends infer R ? R : null;

const a: AType<number> = 1;

/* 예시2 */
type BType<T> = T extends {a: infer A; b:1} ? A : any;

type Inferred = BType<{a: 'hi'; b: 1}>;

/* 예시3 */
type CType<T> = T extends {a: infer A; b: infer B} ? A & B : any;

type Inferred2 = CType<{a: {someAProps: 1}; b: {someBProps: 2}}>

/* 예시4 */
// type MyReturnType = ReturnType // ==> 함수의 리턴타입을 타입으로 갖는 유틸리티타입
type T0 = ReturnType<()=>string> // type: string
type T1 = ReturnType<(s: string)=>void> // type: void

function fn (str:string){
    return str;
}

type T2 = ReturnType<typeof fn>; // type: string

// ReturnType의 정의 (official)
/* 
type ReturnType<T extends (...args: any) => any> 
= T extends (...args: any) => infer R ? R : any;
*/
// 보면 제약 조건(extends)이 함수형식임
// type MyReturnType = ReturnType<number> // 따라서 이건 에러
type MyReturnType = ReturnType<() => void> // 이렇게 함수를 매개변수로 넣어주면 에러나지 않음

/* ReturnType 커스텀 */
type ReturnType1<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyReturnType1 = ReturnType1<() => number> // type = number
type MyReturnType2 = ReturnType1<() => string> // type = string