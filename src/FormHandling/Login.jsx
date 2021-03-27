import React, { Component } from 'react'

export class Login extends Component {
    constructor(){
        super();
        this.setState({name:"pranay",
                       age:23,
                       email:"pranay@gamil.com"
                     })
    }
    pranay=(event)=>{
        console.log(event.target.value)
        this.setState({name:event.target.value})
                    };
    jyothi=(event)=>{
        console.log(event.target.value)
        this.setState({age:event.target.value})
                    };
    saikumar=(pranay)=>{
         console.log(pranay.target.value)
         this.setState({email:pranay.target.value})
    }                
    render() {
        return (
            <>
            <h1>Login Form</h1>
            <hr/>
            <form>
            <label>name</label>
            <input type="text" onChange={this.pranay} name="pranay"/> <br/> <br/>
            <label>age</label>
            <input type="number" onChange={this.jyothi}/> <br/> <br/>
            <label>email</label>
            <input type="text" onChange={this.saikumar}/> <br/> <br/>
            <button type="submit">login</button>
            </form>

                
            </>
        );
    };
};

export default Login
