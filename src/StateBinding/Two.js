import React, { Component } from 'react'
import Three from "./Three";
export class Two extends Component {
    state={
        message:"hii Susmitha"
    }
    pranay=()=>{
        this.setState({message:"Hey Susmitha"})
    }
    jyothi=()=>{
        this.setState({message:"H r u Susmitha"})
    }
    
    render() {
        return (
            <>
            <h1>Event handling</h1>
            <div>
            <div className="btn btn success mt-5">
            <div className="row">
            <div className="col md-4">
            <div className="card">
            <div className="card-header">
            <h2>{this.state.message}</h2>
            </div>
            <div className="card-body">
            <button className="btn btn-success mr-3" onClick={()=>{this.setState({message:"hello Susmitha"})}}>Pranay</button>
            <button className="btn btn-primary mr-3" onClick={this.pranay}>saiKumar</button>
            <button className="btn btn-danger mr-3" onClick={()=>{this.jyothi();}}>Vinod</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <hr/>
            <Three/>
            
            </>
        )
    }
}

export default Two
