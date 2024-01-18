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