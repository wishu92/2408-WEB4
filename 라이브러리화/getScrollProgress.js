function getScrollProgress(){
    const 전체길이 = document.body.clientHeight;
    const 현재스크롤 = window.scrollY;

    const 진행도 = 현재스크롤 / (전체길이 - window.innerHeight);
    console.log(진행도)
    bar.style.width = `${진행도*100}%`
}