import React, { Component } from 'react'

export default class AddNumbers extends Component {
  constructor(props)
  {
    super(props)
    this.state= 
    {
        no1:0,
        no2:0,
        sum:0
    }
  }
  handleChange = (event)=>
  {
    this.setState({[event.target.name] : event.target.value})
  }
  Add=(event) =>
  {
    event.preventDefault();
    this.setState({sum : parseInt(this.state.no1) + parseInt(this.state.no2)} )
  }
    render() {
    return (
      <div>AddNumbers
        <form onSubmit={this.Add}>
            <div> <label> Enter No 1</label>
            <input type="text" name="no1" value={this.state.no1} onChange={this.handleChange}/>
             </div>
             <div> <label> Enter No 2</label>
            <input type="text" name="no2" value={this.state.no2} onChange={this.handleChange}/>
             </div>
             <div> <label> Sum</label>
            <input type="text" name="sum" value={this.state.sum} onChange={this.handleChange}/>
             </div>
             <button type='submit'> Add </button>
        </form>
      </div>
    )
  }
}
