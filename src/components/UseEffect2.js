import React, { useEffect, useState } from 'react'

export default function UseEffect2() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    
    useEffect(()=>
    alert('I m clicked'),[num2])
  return (
    <div>UseEffect2
        <button onClick={()=>setNum1(num1+1)}> Num1 </button>
        <button onClick={()=>setNum2(num2+1)}> Num2 </button>
        {num1}
        {num2}
    </div>
  )
}
