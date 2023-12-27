import React, { useState } from 'react'

export default function UseStateDemo() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [Employee, setEmployee] = useState(
        {
             name:"",
             address:"",
             phone:""

        }
    )
    const SubmitForm = (event) =>
    {
        event.preventDefault();
        // setEmployee({...Employee, [event.target.name]: event.target.value})
        console.log(`Details are ${name} `)
    }
  return (
    <div>UseStateDemo

<form onSubmit={SubmitForm}>
<input type="text" name="name" onChange ={(event)=>{setName(event.target.value)}}/>
<input type="text" name="address" onChange ={(event)=>{setAddress(event.target.value)}}/>
        <input type="text" name="phone" onChange ={(event)=>{setPhone(event.target.value)}}/>
  <button type='submit'> Submit </button>
  </form>
    </div>
  )
}
