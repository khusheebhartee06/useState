import React, { useState } from 'react'

function Counter() {
    let [val,setState] = useState(1)
    function sub(){
        if(val>1){
            val-=1;
            setState(val)
        }
    }
  return (
   <>
   <h2>Counter : {val}</h2>
   <button onClick={sub}>Subtraction</button> &nbsp;
   <button onClick={()=>{setState(val+1)}}>Addition</button>
   </>
  )
}

export default Counter