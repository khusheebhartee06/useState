import React, { useState } from 'react'

function Inputtype() {
    const [text, setColor] = useState("blue");
    function getColor(e) {
        // console.log(e.target.value)
        let color=e.target.value
        setColor(color)
    }
    return (
        <>
            <h1 style={{ color: text }}>Cnc Web World</h1>
            <input type="color" name="color" id="" onChange={getColor} />
        </>
    )
}

export default Inputtype