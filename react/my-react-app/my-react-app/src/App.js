import logo from './logo.svg';
import './App.css';
import Post from './Post';
import { useRef, useState } from 'react';


function App() {

  const element = <h1 className='title'>안녕하세요 h1입니다</h1>

  const data = [{
      title : '첫글은 내꺼야',
      text : '반갑습니다'
    },{
      title : '오늘의 점심',
      text : '김밥'
    },{
      title : '컴퓨터수업',
      text : '어렵지'
    }]


    // useState, useEffect, useContext, useRef, useReducer
    // let number = 0 ;
    const [ number , setNumber ] = useState(0)
    const handleIncressNumber = () =>{
      setNumber(number+1)
    }

    const [text,setText] =useState('');
    const handleChangeText = (e) =>{
      setText(e.target.value)
    }

    const [inputText, setInputText] = useState('');
    const inputFocus = useRef()
    const handleChangeTextToButton = () => {
      setInputText(inputFocus.current.value)
    }





  return (
    <div className="App">
      {element}

      <span>{number}</span>
      <button onClick={handleIncressNumber}>딸깍</button>

      <input type="text" onChange={handleChangeText}/>
      <p>당신의 입력 : {text}</p>

      <input type="text" ref={inputFocus}/>
      <button onClick={handleChangeTextToButton}>인풋딸깍</button>
      <p>버튼누르면 : {inputText}</p>

      {data.map((value,key)=>
        <p>{value.title}</p>
      )}

      {data.map((value,key)=>
        <Post 제목={value.title} 내용={value.text}></Post>
      )}
    </div>
  );
}

export default App;

      {/* {data.map((value,key)=>{
        return <p>{value.title}</p>
      })}  아래와 같음, 
      data 배열 안에있는 title을 map은 반복문을 통해 가져옴*/}
