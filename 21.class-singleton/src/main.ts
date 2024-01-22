// 싱글톤 패턴, 인스턴스 객체를 1개만 만들어서 사용할 수 있게하는 패턴
class Singleton {
    
    // static instance = new Singleton(); // 방법1
    static instance: Singleton;// 방법2

    private constructor(){
        
    }

    // 방법2 생성 메소드
    static getInstance(){
        if(this.instance) return this.instance;
        this.instance = new Singleton();
        return this.instance;
    }
}

// Singleton.instance // 방법1 생성

let singleton = Singleton.getInstance(); // 방법2 생성