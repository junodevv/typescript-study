import List from "./models/List";
import ListItem from "./models/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = ():void => {
    console.log('init!');
    const listInstance = List.instance;
    const listTemplateInstance = ListTemplate.instance;

    const itemForm = document.getElementById('form') as HTMLFormElement;

    itemForm.addEventListener('submit', (event: SubmitEvent): void =>{
        event.preventDefault(); // 리프레시 되지 않게 만들기

        // 새 item Text
        const inputEl = document.getElementById('item-input') as HTMLInputElement;
        const newText = inputEl.value.trim();// 스페이스(공백) 제거
        if(!newText.length) return;
        inputEl.value = '';
        // 새 item ID
        let currentId: number = listInstance.list.length; 
        const itemId: number = currentId ? parseInt(listInstance.list[currentId-1].id)+1 : 1;
        
        // 새 Item생성하기
        const newItem = new ListItem(itemId.toString(), newText);

        // list에 new item 넣기
        listInstance.addItem(newItem);

        listTemplateInstance.render(listInstance);
    })

    const clearItemsEl = document.getElementById('clear-items-btn') as HTMLButtonElement;
    clearItemsEl.addEventListener('click', ()=> {
        listInstance.clearList();
        listTemplateInstance.clear();
    })



    // 초기 데이터 load 하기
    listInstance.load();
    // 생성된 데이터를 이용해서 화면에 보여주기
    listTemplateInstance.render(listInstance);

}

document.addEventListener("DOMContentLoaded", initApp);