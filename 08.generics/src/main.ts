/* 제네릭 사용하지 않을때 */
function getArrayLength(arr: number[] | string[] | boolean[]):number{
    return arr.length;
}

const array1 = [1,2,3];
const array2 = ['a','b','c'];
const array3 = [true, false, true];

getArrayLength(array1);
getArrayLength(array2);
getArrayLength(array3);

/* 제네릭 사용할 때 */
// "T" 는 관습
function getArrayLengthGeneric<T>(arr:T[]):number{
    return arr.length;
}

getArrayLengthGeneric<number>(array1);
getArrayLengthGeneric<string>(array2);
getArrayLengthGeneric<boolean>(array3);

interface Vehicle<T>{
    name: string,
    color:string,
    option: T
}

const car:Vehicle<{price: number}> = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
}

const bike:Vehicle<boolean> = {
    name: 'Bike',
    color: 'green',
    option: true
}

//////////* Generics 2, 매개변수가 2개인 경우 */////////

/* 기존방식, 매개변수의 타입이 1개로 지정, 혹은 any 사용 */
const makeArr = (x:number,y:number) =>{
    return [x,y];
}

const array = makeArr(4,5);
//const array = makeArr('a','b');

/* Generic 활용 */
const makeArrGeneric = <X,Y>(x:X,y:Y):[X,Y] => {
    return [x,y];
}

const arrayGeneric = makeArrGeneric<number, number>(4,5);
const arrayGeneric2 = makeArrGeneric<string, string>('4','5');

/* generic 활용, 기본타입 지정해주기 */

const makeArrGeneric2 = <X,Y = string>(x:X,y:Y):[X,Y] => {
    return [x,y];
}

const arrayGeneric3 = makeArrGeneric2<number, number>(4,5);
const arrayGeneric4 = makeArrGeneric2<string>('4','5'); // 이렇게 앞에꺼만 지정해줘도 Y는 기본값인 string으로 들어감

/* Extends */

const makeFullName = (obj:{firstName:string, lastName:string})=>{
    return{
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

// makeFullName({firstName: "Lee", lastName: "juno", location: "Seoul"}) // 에러

// extends로 항상 받고 싶은 값을 지정하고, 부가적인 내용은 T로 받음, extends 의 내용은 필수
const makeFullNameGeneric = <T extends {firstName:string, lastName:string}>(obj:T)=>{
    return{
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

makeFullNameGeneric({firstName: "Lee", lastName: "juno", location: "Seoul"})
makeFullNameGeneric({firstName: "Lee", lastName: "juno", hello: "greeting"}) 
// makeFullNameGeneric({lastName: "juno", location: "Seoul"}) // =에러, extends 의 내용은 필수