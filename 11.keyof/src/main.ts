interface IUser {
    name: string;
    age: number;
    address: string;
}

type UserKeys = keyof IUser // IUser의 속성들을 Union 타입으로 반환해준다.
// 'name' | 'age' | 'address'

const user = {
    name: "juno",
    age: 20,
    address: 'seoul'
}

type UserKeys2 = keyof typeof user
// 객체 user의 타입을 keyof로 바꾸면 Userkeys와 같은 결과가 나옴

/* Enum 도 가능 */
enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof UserRole