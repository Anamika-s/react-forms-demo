import React, { Component } from 'react'

export default class ControlledComponent extends Component {
   constructor(props)
   {
    super(props);
    this.state={
        name : " ",
        address:"",
        phone :""
    }
   }
   handleNameChange = (event)=>
   {
//  console.log(event.target.value);
    this.setState({name : event.target.value})
   }

   handleAddressChange = (event)=>
   {
    this.setState({address : event.target.value})
    
   }
handlePhoneChange = (event)=>
{
   this.setState({phone : event.target.value})
} 
   SubmitForm = (event)=>
   {
    event.preventDefault();
    // console.log(this.state)
 alert(`Detials are ${this.state.name}
 Address is ${this.state.address}
 Phone number is ${this.state.phone}`)
 alert(JSON.stringify(this.state))
    console.log("Form is submitted")
   }
    render() {
    return (
      <div>
        <form onSubmit={this.SubmitForm}>
        <div>
            <label> Name </label>
            <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
            
        </div>
        <div>
            <label> Address </label>
            <input type='text' value={this.state.address} onChange={this.handleAddressChange}/>
            
        </div>
        <div>
            <label> Phone </label>
            <input type='text' value={this.state.Phone} onChange={this.handlePhoneChange}/>
            
        </div>
        <button type='submit'> Submit Form </button>
        </form>
        </div>
    )
  }
}
