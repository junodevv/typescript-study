"use strict";
// type 단언 방법 1
// 단언해주지 않으면 ts가 bodyElement 값이 null일수도 있음을 의심한다.
const bodyElement = document.querySelector('body');
bodyElement.innerText = "Hello";
// "!" 사용하기, null 혹은 undefined 가 절대 아니다! 라고 말하는 것
const bodyElement2 = document.querySelector('body');
bodyElement2.innerText = "Hello";
// 타입 가드
const bodyElement3 = document.querySelector('body');
if (bodyElement3) {
    bodyElement3.innerText = "Hello";
}
/* 타입 단언 주의할 점 */
// 잘못 사용한 예
function func(arg) {
    return arg.toLowerCase();
}
// 올바른 예 -> 타입 가드사용
function func2(arg) {
    if (arg) {
        return arg.toLowerCase();
    }
}
func('hello');
func(null);
