import React from "react";
import Message from "./Message"

class Counter extends React.Component{
    constructor(){
        super();
        this.state={counter:1};
    }
    pranay="susmitha"
        incrementCounter=()=>{
        this.setState({counter: this.state.counter +1})
    }
        decrementCounter=()=>{
            this.setState({counter:this.state.counter -1})
        
    }
    render(){
        return(
            <>
   
            <h1>{this.state.counter}</h1>
            <button className="btn btn-primary" 
            onClick={this.incrementCounter} >Press</button>
            <button className="btn btn-success" 
            onClick={this.decrementCounter}>Press</button>
            <Message jyothi="pranay"/>
            </>
        )
    }
}
export default Counter;