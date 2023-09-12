import './App.css';
import { useState } from 'react';

function App() {
  const [myCounter, setMyCounter] = useState(1)

  const [advices, setAdvices] = useState([
    "Learn React",
    "Now Have Handsome Income",
    "Invest your New Income",
    "Health Insurance",
    "Future Secure",
])

function nextHandler (){
  console.log('next')
  if(myCounter < advices.length) {
    setMyCounter(myCounter + 1)
}
}
function previousHandler (){
  console.log('previous')
  if(myCounter > 1) {
    setMyCounter(myCounter - 1)
}
}
  return (
    <div className="App" style={{padding:"100px"}}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {
              Array.from([1,2,3,4, 5], x =>(
                <span style={{height:"50px", width:"50px", borderRadius:"50%", backgroundColor: myCounter >= x? 'blue': 'grey', color:'white', display:'flex', justifyContent:'center', alignItems:'center',}}>{x}</span>
                ))
            }
          </div>
          <p style={{textAlign:'center',  marginTop:'100px', fontSize:'30px', fontWeight:'bold'}}>
            {advices[myCounter -1]}
          </p>
          <div style={{display:'flex', justifyContent:'space-around'}}>
            {
              Array.from(['Previous', 'Next'], x =>(
                <button style={{padding:'10px 20px', borderRadius:'10px', marginTop:'100px', cursor:'pointer', background:'grey' , color:'white', outline:'none', border:'none'}} onClick={x ==='Previous' ? previousHandler :nextHandler}>{x}</button>
              ))
            }
          </div>
    </div>
  );
}

export default App;
