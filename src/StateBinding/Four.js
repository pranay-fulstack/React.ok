import React, { Component } from 'react'
import Two from "./Two"
export class Four extends Component {
    state={
        counter:0
    }
    pranay=(value)=>{
        this.setState({counter:this.state.counter+value

        })
    }
    render() {
        return (
            <>
            <div className="container mt-4">
            <div className="row">
            <div className="col-md-4">
            <div className="card">
            <div className="card header">
            <h2>{this.state.counter}</h2>
            </div>
            <div className="card body">
            <button  className=" btn btn-success" onClick={this.pranay.bind(this,+1)}>increment</button>
            <button  className="btn btn-danger mt-3" onClick={this.pranay.bind(this,-1)}>decrement</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            <hr/>
             <Two/>  
              
            </>
        )
    }
}

export default Four
