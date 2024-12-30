import './App.css';
import { useState } from 'react';
import Counter from './Components/Counter';
import Inputtype from './Components/Inputtype';
import Show from './Components/Show';


function App() {
  let styleAdd = {
    title: "CNC WEB WORLD",
    style: {
      textAlign: "center",
      color: "red",
      backgroundColor: "yellow"
    }
  }
  let [data, update] = useState(styleAdd)


  return (
    <>
    <Counter/>
    <br />
    <br />
      <h1 style={{ textAlign: "center" }}>Change text style </h1>
      <hr />
     <h1 style={data.style}>{data.title}</h1>
      <button onClick={() => {
        update(
          {
            title: "Training center",
           style:{
            textAlign: "center",
            color: "white",
            backgroundColor: "blue"
           }
          }
        )
      }}>Click me</button>
<br/>
<br/>
<br/>
<br/>
      <Inputtype/>
<br/>
<br/>
<br/>
<br/>
<Show/>
    </>
  );
}


export default App;


