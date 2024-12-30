import React, { useState } from 'react'
import './Show.css'

function Show() {
  const obj = {
    class: "show",
    btntext: "Hide"
  }
  const [show, setState] = useState(obj)
  function myfunction() {
    if (show.class === "show") {
        setState({
          class:"hide",
          btntext:"Show"
        })
    }
    else{
      setState({
        class:"show",
        btntext:"Hide"
      })
    }
  }
  return (
    <>
      <h1 className={show.class}>Click on button so text will be hide</h1>
      <button onClick={myfunction}>{show.btntext}</button>
    </>
  )
}

export default Show