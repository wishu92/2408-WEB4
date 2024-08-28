function makeHorizonScroll(target,brakePoint) {

    target.classList.add('horizon-scroll-target');

    const scrollbarWidth = window.innerWidth - document.body.clientWidth

    const horizonContainer = document.createElement('div');
    horizonContainer.classList.add('horizon-scroll-container')

    target.parentElement.insertBefore(horizonContainer,target)
    // div들 생성하기만 하는게 아니라 적합한 html에 끼워넣어야함. 
    // 따라서 상위div만들어서 미리끼워넣기 target의 부모요소로 끼워넣기.
    // horizonContainer를 삽입, target전에(미리 만들어놓은 박스)
   

    const horizonSticky = document.createElement('div');
    horizonSticky.classList.add("horizon-scroll-sticky-view");

    const moveContainer = document.createElement('div');
    moveContainer.classList.add('horizon-scroll-move-container');

    horizonContainer.appendChild(horizonSticky);
    horizonSticky.appendChild(moveContainer);
    moveContainer.appendChild(target);
   




    const applyPos = (pos) => {
        moveContainer.style.transform = `translateX(${pos}px)`
    }

    const moveHorizonScroll =()=>{

        const pos = horizonContainer.getBoundingClientRect();
        const range = (moveContainer.clientWidth - window.innerWidth)*-1;
        let targetPos;

        if(pos.top > 0){
            targetPos = 0;
        }else if(pos.top < range) {
            targetPos = range;
        }else {
            targetPos = pos.top;
        }


        if(window.innerWidth < brakePoint){
            applyPos(0)
        }else {
            applyPos(targetPos)
        }
    }

    const checkBreaking = () => {
        return window.innerWidth < brakePoint ? true : false
    }

    const setCSS = () => {
        const resp = checkBreaking();
        if(resp){
            horizonContainer.style.height = 'auto'
            horizonSticky.style.height = 'auto'
            horizonSticky.style.position = 'relative'
            moveContainer.style.width = `100%`;
        }else {
            moveContainer.style.width = `fit-content`
            horizonContainer.style.height = `${moveContainer.getBoundingClientRect().width - window.innerWidth + window.innerHeight + scrollbarWidth}px`
            // 컨텐츠의 넓이에 따라 높이가 만들어져야 하므로 css순서중요
            horizonSticky.style.height = `100vh`
            horizonSticky.style.position = 'sticky'
        }
    }

    const init = () => {
        horizonSticky.style.width = `100%`
        horizonSticky.style.overflow = `hidden`
        horizonSticky.style.top = `0px`

        moveContainer.style.height = '100%'
        moveHorizonScroll()
        setCSS();
    }


    init();
    window.addEventListener('scroll',moveHorizonScroll)
    window.addEventListener('resize',()=>{
        moveHorizonScroll()
        setCSS();
    })

}