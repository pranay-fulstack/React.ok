import React from "react";
import CompB from "./CompB"
class CompA extends React.Component{
    size=[20,30,40];
    render(){
        return(
            <>
            <h1>Size:{this.size[0]}|{this.size[1]}|{this.size[2]}</h1>
            <CompB name={this.size[0]}/>
            </>
            
        )
    }
}
export default CompA;