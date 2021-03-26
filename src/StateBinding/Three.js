import React, { Component } from 'react'

export class Three extends Component {
    state={
        name:"sharath",
    }
    pranay=(value)=>{
        this.setState({name:value})
    }
    render() {
        return (
            <>
            <h1>Event Binding</h1>
            <div className="container mt-4">
            <div className="row">
            <div className="col md-4">
            <div className="card">
            <div className="card-header">
            <h2>{this.state.name}</h2>
            </div>
            <div className="card-body">
            <button className="btn btn-primary mr-4" onClick={this.pranay.bind(this, "Pavan")}>Money</button>
            <button className="btn btn-success mr-4" onClick={this.pranay.bind(this, "Kondareddy")}>Power</button>
            <button className="btn btn-danger mr-4" onClick={this.pranay.bind(this, "Pranay")}>Trust</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default Three
