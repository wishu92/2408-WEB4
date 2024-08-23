function scrolledAppear(appearingTarget){
    window.addEventListener('scroll',(e)=>{

    const pos = appearingTarget.getBoundingClientRect();
    //    getBoundingClientRect(); -> 컨텐츠 기준으로 위치를 알려줌.
    if(pos.top <= window.innerHeight - pos.height){
        // content의 top이 윈도우 높이보다 작아지면 = 밑에서 올라올 때 화면에서 나타나기 시작하면,
        appearingTarget.classList.add('active');
    }else {
        appearingTarget.classList.remove('active');
    }

    })
}

// css에 active 넣기.

// .content{
//     opacity: 0;
//     transform: translateX(200px);
//     transition: 0.3s;
// }

// .content.active{
//     opacity: 1;
//     transform: none;
// }