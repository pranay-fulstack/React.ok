import React, { Component } from 'react'
import Click from './Click';

export class Counter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             count:0
        };
    };
    a="pranay";
    IncrementCount=()=>{
        this.setState({count:this.state.count +1});
    };
    DecrementCount=()=>{
        this.setState({
            count: this.state.count-1
        });
    };
    render() {
    
        
        return <>
            <div>
            <h1>Count No:{this.state.count}</h1>
                <button onClick={this.IncrementCount}>incremented to x</button>
                <button onClick={this.DecrementCount}>decremented to x</button>
            </div>
            <Click name={this.a} />
        </>
    };
}

export default Counter;
