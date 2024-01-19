interface Person{
    name: string;
    age: number;
    address: string;
}

const person ={
    name: 'juno',
    age: 25,
    address: 'Seoul'
}

const age = getProperty(person, 'age'); // 26

// const name = getProperty(person, 'name'); // juno
// const invalid = getProperty(person, 'invalid'); // Error

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}