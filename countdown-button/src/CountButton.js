import React, { useState } from 'react'


const CountButton = () => {
    const [currentCount, setCurrentCount] = useState(0)
    
const handleClick = () => {
    setCurrentCount(currentCount + 1)
    //console.log(currentCount)
}

    return ( 
    <div>
        <button onClick={handleClick}>+1</button> 
        <div>{currentCount}</div> 
    </div>
    )
}

export default CountButton