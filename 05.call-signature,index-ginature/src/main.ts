/* 호출 시그니처 (call-signature) */
interface getLikeNumber{
    (like: number): number;
}

interface Post {
    id: number;
    title: string;
    getLikeNumber: getLikeNumber;
}

const post1: Post = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like: number){
        return like;
    }
}

post1.getLikeNumber(1);

/* 인덱스 시그니처(index signature) */
// 객체 인덱스 시그니처
// 객체에 더 많은 속성값을 넣어줄 건데 어떤 타입의 어떤 속성을 넣어줄지 모를 때 활용
interface Post2 {
    [key:string]: unknown; // 앞으로 어떤 속성을 넣을지 알수 없을때 사용한다. `key` 라는 이름은 바꿔도됨
    id:number;
    title:string;
}

const post2: Post2 = {
    id: 2,
    title: 'post 2'
}
post2['description'] = 'description 2';
post2['pages'] = 300;

// 배열 인덱스 시그니처
interface Names{
    // [배열:index]:값 | `item` 이라는 이름은 바꿔도됨(임의의 이름)
    [item: number]: string; 
    // userNames[0] ==='juno'; 
}
const userNames: Names = ['juno', 'lee', 'Joe'];
