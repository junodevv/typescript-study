document.addEventListener('click',(event) => {

});

document.addEventListener('keypress',(event) => {

});

document.addEventListener('submit',(event) => {

});

/* addEventListener를 위한 type 생성 */

interface MyMouseEvent{
    x: number;
    y: number;
}

interface MyKeyBoardEvent{
    key: string;
}

interface MyEventObjects{
    click: MyMouseEvent;
    keypress: MyKeyBoardEvent;
}

function handleEvent<K extends keyof MyEventObjects>(
    eventName:K, 
    callBack: (e: MyEventObjects[keyof MyEventObjects]) => void
    ){
        if(eventName === 'click'){
            callBack({x:0, y:0});
        }else if(eventName === 'keypress'){
            callBack({key: 'Enter'});
        }
}

handleEvent('click', () => {});
handleEvent('keypress', () => {});