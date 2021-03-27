import React, { Component } from 'react'

export class Login2 extends Component {
    constructor(){
        super();
     this.state={
        name:"",
        age:"", 
        email:"",
        mobileNum:"",}}
    pranayHandler = (event) => {
     this.setState({ [event.target.name]:event.target.value})
     console.log(this.state)
     
    }  
    render(){
        return(
            <>
            <h1>Login Form</h1>
            <div className="container mt-4">
            <div className="row">
            <div className="col-md-5">
            <form>
            <div className="form-group" > <input name="name" placeholder="name" type="text" onChange={this.pranayHandler} /></div>
            <div className="form-group"> <input name="age" placeholder="age" type="text" onChange={this.pranayHandler}/></div>
            <div className="form-group"><input name="email" placeholder="email" type="text" onChange={this.pranayHandler}/></div>
            <div className="form-group"> <input name="mobileNum" placeholder="mobile" type="text" onChange={this.pranayHandler}/></div>
            <div className="form-group"><input type="submit" class="btn btn-primary" /></div>
         </form>
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default Login2
