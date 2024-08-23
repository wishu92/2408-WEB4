
function getTargetScrollProgress(target, startTargetApprochInView) {
    // 컨텐츠 = target , 
    // startTarget... = 언제부터 시작으로할건지 true or false 값 넣기
    // true면 target이 브라우저에 들어오는 순간부터, false면 target이 브라우저에 꽉찬 순간부터.
    const targetPos = target.getBoundingClientRect()
    const distance = startTargetApprochInView ? (targetPos.top- window.innerHeight)*-1 : targetPos.top*-1
    // 조건문 ? true일때 : false일때
    const maxDistance = startTargetApprochInView ? targetPos.height + window.innerHeight : targetPos.height - window.innerHeight;
    return clamp(distance/maxDistance,0,1)
    // 함수화할 때 값을 사용할 수 있게 return?

    function clamp(value,min,max){
        return Math.max(Math.min(value,max),min)
    }
}

// 사용방법
{/* <script src="/라이브러리화/getTargetScrollProgress.js"></script> */}
