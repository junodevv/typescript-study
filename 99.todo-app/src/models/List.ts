import ListItem, { IListItem } from "./ListItem";


interface IList{
    list: IListItem[];
    load(): void;
    save(): void;
    clearList(): void;
    addItem(itemObj: IListItem): void;
    removeItem(id: string): void;
}

export default class List implements IList{
    
    static instance: List = new List();

    private constructor(
        private _list: ListItem[] = []
    ){}

    get list() : ListItem[]{
        return this._list;
    }

    load(): void{
        const storedList: string | null = localStorage.getItem('myList');

        if(typeof storedList !== 'string') return;

        const parsedList:{
            _id: string,
            _item: string,
            _checked: boolean
        }[] = JSON.parse(storedList);

        // ListItem 인스턴스 객체 생성 => List 인스턴스 객체에 넣어주기
        parsedList.forEach(itemObj =>{
            const newListItem = new ListItem(
                itemObj._id,
                itemObj._item,
                itemObj._checked
            )
            List.instance.addItem(newListItem);
        })


    }
    // localstorage에 저장해주는 메소드
    save():void{
        localStorage.setItem('myList', JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    addItem(itemObj: ListItem): void{
        this._list.push(itemObj);
        this.save();
    }

    removeItem(id: string): void{
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }
}