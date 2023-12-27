import React, { useState } from 'react'

export default function IncreaseCount() {
    const [counter, setCounter] = useState(0);
   IncreaseCount = (event)=>
   {
    setCounter(counter+1);
   }
  return (
    <div>IncreaseCount
  <button type='click' onClick={IncreaseCount}> Increase </button>
  {counter}
    </div>
  )
}
