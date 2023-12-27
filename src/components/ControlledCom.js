import React, { Component } from 'react'

export default class ControlledCom extends Component {
   constructor(props)
   {
    super(props);
    this.state={
        // name : " ",
        // address:"",
        // phone :"",
        Employee :
   {
     name :"",
     address:"",
     phone :"" 
   }
     }
   }
   
   handleChange = (event)=>
   {

     console.log(event.target.name);
//  console.log(event.target.value);
    // this.setState({name : event.target.value})
    this.setState({[event.target.name] : event.target.value})
    this.setState({...this.Employee, [event.target.name]: event.target.value})
      
  }

   
   SubmitForm = (event)=>
   {
    event.preventDefault();
    // console.log(this.state)
 alert(`Detials are ${this.state.Employee.name}
 Address is ${this.state.Employee.address}
 Phone number is ${this.state.Employee.phone}`)
//  alert(JSON.stringify(this.state))
    console.log("Form is submitted")
   }
    render() {
    return (
      <div>
        <form onSubmit={this.SubmitForm}>
        <div>
            <label> Name </label>
            <input type='text' name="name" value={this.state.Employee.name} onChange={this.handleChange}/>
            
        </div>
        <div>
            <label> Address </label>
            <input type='text' name="address" value={this.state.Employee.address} onChange={this.handleChange}/>
            
        </div>
        <div>
            <label> Phone </label>
            <input type='text' name="phone" value={this.state.Employee.Phone} onChange={this.handleChange}/>
            
        </div>
        <button type='submit'> Submit Form </button>
        </form>
        </div>
    )
  }
}
