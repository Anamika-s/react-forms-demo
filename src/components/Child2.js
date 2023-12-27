import React from 'react'
import {useContext} from 'react';
import { ColorContext } from '../Context';
export default function Child2() {
    const color = useContext(ColorContext); 
  return (
    <div>Child2

        <h1>{color} </h1>
    </div>
  )
}
