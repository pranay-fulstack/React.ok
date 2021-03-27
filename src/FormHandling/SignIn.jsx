
import React, { Component } from 'react'

export class SignIn extends Component {
    state={
        name:"",
        mobile:"",
    }
    pranay=(event)=>{
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
    jyothi=(event)=>{
        console.log(event.target.value)
        this.setState({mobile:event.target.value})
    }
    sai=(event)=>{
        event.preventDefault();
        console.log(this.state.name)
    }
    render() {
        return (
            <div>

              <div className="container mt-5" >
              <div className="row">
              <div className="col md-6">
              <form>
              <div className="form-group" onChange={this.sai}>
              <input className="form-control" type="text" onChange={this.pranay} placeholder="name" name={this.state.name}/ ></div>
              <div className="form-group">
              <input className="form-control" type="number" onChange={this.jyothi} placeholder="mobile" name={this.state.mobile}/ ></div>
              <div className="from-group">
              <input className="from-control btn btn-success" type="submit" /></div>
              </form>
              </div>
              </div>
              </div>
            </div>
        )
    }
}

export default SignIn
