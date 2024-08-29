function makeCountUp(target, goal, duration, accFunc = 'ease', frame = 60){
     // accFunc는 문자열 `ease`,`linear`,함수로 쓸수있음.
     //frame은 비우면 60이 기본값, 원하는 값 넣을 수 있음.
    const totalFrame = duration * frame;

    let progressFunc;

        // try - catch 문 안의 내용을 실행하다가 throw(던지다)를 만나면 멈추고
        // catch로 이동 error값 송출
    try {
        if(accFunc === 'ease') {
            progressFunc = easeInOutCubic;
        }else if(typeof accFunc === 'function'){
            progressFunc = accFunc;
        }else if(accFunc === 'linear') {
            progressFunc = (x)=>{
                return x
                // 기본이 등속linear이니까
            };
        }else {
            throw new Error("잘못된 가속도 함수 입니다.");
            
        }

        for(let i = 0 ; i <= totalFrame ; i ++) {
        const 진행도 = i/totalFrame;
        setTimeout(()=>{
            target.innerText = parseInt(goal * progressFunc(진행도));
        },i/frame * 1000)
    }

    } catch (e) {
        console.error(e);
        // e에 저장된 정보를 console로 출력, log문과 error문이 있음.
    }

    function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
}
