import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react'

export default function UnControlledComp() {

    const name = React.createRef("name");
    const address = React.createRef("address");

     const SubmitData = (event) =>
     {
        event.preventDefault();
        console.log(name.current.value + " " + address.current.value)
     }

  return (
    <div>UnControlledComp
<form onSubmit={SubmitData}>
    <label> Enter NAme </label>
    <input type='text' name="name" ref={name}/>
    <input type='text' name="address" ref={address}/>
    
    <button type='submit'> Submit </button>
</form>

    </div>
  )
}
