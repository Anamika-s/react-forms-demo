import React, { useState } from 'react'

export default function UseEffectDemo() {
    const [num, setCount] = useState(0);
  return (
    <div>UseEffect
  <button type='click' onClick={(()=> 
    setCount(num+1),
    ()=> alert("I m clicked"))}> Increase </button>
  {num}
    </div>
  )
}
