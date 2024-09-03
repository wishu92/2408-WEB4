import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  const element = <h1 className='title'>안녕하세요 h1입니다</h1>
  const data = [{
      title : '첫글은 내꺼야',
      text : '반갑습니다'
    },{
      title : '오늘의 날씨',
      text : '맑음'
    },{
      title : '점심메뉴',
      text : '김치찌개'
    }]

    
  return (
    <div className="App">
      {element}
      {/* {data.map((value,key)=>{
        return <p>{value.title}</p>
      })}  아래와 같음, 
      data 배열 안에있는 title을 map은 반복문을 통해 가져옴*/}

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
