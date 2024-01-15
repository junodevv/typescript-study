/* interface, type alias 의 확장 */
// interface
interface Animal{
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear1: Bear = {
    name: 'honey bear',
    honey: true
}
// type alias
type Animal2 = {
    name: string;
}
type Bear2  = Animal2 & {
    honey: boolean;
}
const bear2: Bear2 = {
    name: 'honey bear',
    honey: true
}

/* 선언 병합 */
// 같은이름의 인터페이스로 다른 속성들을 주면 알아서 병합한다.
// Interface
interface Animal3{
    name:string;
}
interface Animal3{
    honey:boolean;
}
const bear3 = {
    name: 'honey bear',
    honey: true
}
// type alias => 선언 병합 불가능
