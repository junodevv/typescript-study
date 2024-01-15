/* 메소드 오버로딩 */

// 예시 1
function add(a:string, b:string):string;
function add(a:number, b:number):number;
function add(a: any, b: any): any{
    return a + b;
}

add("Hello", "world");
add(1,2);

// 예시 2
/* Union type으로 두가지 매개변수 받기 */

function saySomethingUnion(word: string | string[]):string{
    if(typeof word === "string"){
        return word;    
    } else if(Array.isArray(word)){
        return word.join(" ");
    }
    throw new Error("unable to say something");
}


/* 오버로딩으로 두가지 매개변수 받기 */
function saySomething(word: string): string;
function saySomething(words: string[]): string;
function saySomething(word: any): any{
    if(typeof word === "string"){
        return word;    
    } else if(Array.isArray(word)){
        return word.join(" ");
    }
    throw new Error("unable to say something");
}

saySomethingUnion(['hello', 'world']);
saySomething(['hello', 'world']);