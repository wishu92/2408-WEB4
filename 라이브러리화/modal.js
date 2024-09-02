//html에 button만들고,
// const로 끌어와서 클래스명,이벤트리스너 {openModal(title,text)} 사용하기. modal css랑 짝꿍


const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalWindow = document.createElement('div');
modalWindow.classList.add('modal-window');
modal.appendChild(modalWindow);

const modalTitle = document.createElement('h2');
modalTitle.classList.add('modal-title');
modalWindow.appendChild(modalTitle);

const modalText = document.createElement('p');
modalText.classList.add('modal-text');
modalWindow.appendChild(modalText);

const closeButton = document.createElement('button');
closeButton.classList.add('modal-close')
closeButton.innerText = '확 인'
modalWindow.appendChild(closeButton);




closeButton.addEventListener('click',()=>{
    closeModal();
})

window.addEventListener('click',(e)=>{
    console.log(e);
    // 클릭정보가 저장되어있음. target은 어디를 눌렀는지 저장됨.
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})

window.addEventListener('keydown',(e)=>{
// keydown = 보드판의 키를 눌렀을때
// ESC 눌렀을때 console.log(e)값의 key가 Escape인것을 알 수 있음
    if(e.key === 'Escape'){
        closeModal();
    }
})

function closeModal(){
    modal.style.display = 'none';
}


function openModal(title,text){
    modalTitle.innerText = title;
    modalText.innerText = text;
    modal.style.display = 'flex';
}