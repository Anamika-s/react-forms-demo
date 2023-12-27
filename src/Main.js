import React , {useState}from 'react'
import { ColorContext } from './Context'
import Child1 from './Child1';

export default function Main() {
 const [color, setColor] = useState("red");

  return (
    <div>Main
        <ColorContext.Provider value="red"> 
            <Child1/>
         </ColorContext.Provider> 

    </div>
  )
}
