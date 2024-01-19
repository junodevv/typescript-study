// 속성에 오타가 있다면 에러로 처리하고 싶다면
type Colors = 'red' | 'green' | 'blue';
type RGB = [red:number, green:number, blue:number];
/*
//satisfies 쓰기 전 코드 
const palette : Record<Colors, string|RGB> = {
    red: [255, 0, 0],
    green: "#00ff00",
    // bluee:[0,0,255]이렇게 쓰면 오타라서 에러가남
    blue:[0,0,255] // 이건 정상
}
*/

/* satisfies 사용한 코드 */
const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    // bluee:[0,0,255]이렇게 쓰면 오타라서 에러가남
    blue:[0,0,255], // 이건 정상
    // platypus: false // platypus는 키 type인 Color에 없는 값이라서 에러
}satisfies Record<Colors, string|RGB>;

const redComponent = palette.red.at(0); // 255

const greenNormalized = palette.green.toUpperCase(); 
// 이걸 그냥 쓰면 RGB인경우엔 toUpperCase()를 사용할 수 없어서 아예 사용이 불가
// 이때 stisfies 를 사용하면 된다.

/* Key 말고 value에 대한 오류만 검출하고 싶을때 */
const palette2 = {
    red: [255, 0, 0],
    green: "#00ff00",
    // bluee:[0,0,255]이렇게 쓰면 오타라서 에러가남
    blue:[0,0,255], // 이건 정상
    platypus: "haha"
}satisfies Record<string, string|RGB>;
