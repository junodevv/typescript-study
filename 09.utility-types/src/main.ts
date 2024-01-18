/////////* 유틸리티 타입 정리 *//////////

/* Partial */

interface Address{
    email: string;
    address: string;
}
const me:Partial<Address>= {};
// const you: Address = {email: 'juno@abc.com'}; // address 속성이 없어서 에러
const you: Partial<Address> = {email: 'juno@abc.com'}; // partial을 통해 에러 해결
const all: Address = {email: 'juno@abc.com', address: 'juno'};

/* Pick */
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Pick, 특정 타입에서 몇개의 속성을 골라서 타입을 새롭게 정의 해줄 수 있다.
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean Room",
    completed: false
}

/* Omit */
interface TodoOmit {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoOmitPreview = Omit<TodoOmit, "description">

const todoOmit: TodoOmitPreview = {
    title: "Clean Room",
    completed: false,
    createdAt:12341234     
}

/* Required */

type User ={
    firstName: string,
    lastName?: string // 선택가능한 속성
}

let firstUser:User = {
    firstName: "juno"
}// 에러X

/* 
let secondUser:<Required>User={
    firstName: "juno"
}// 에러O
*/

/* Record <Keys, Type> */

interface CatInfo{
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: {age: 10, breed: 'persian'},
    boris: {age: 5, breed: 'maine coon'},
    mordred: {age: 16, breed: 'british shorthair'}
}

/* Return Type <T> */

type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => void>

function fn(str: string){
    return str;
}

// fn함수가 반환 하는 타입==string 이기때문에 a의 type은 string
const a: ReturnType<typeof fn> = 'Hello';
// const b: ReturnType<typeof fn> = true; // 에러