import React from "react";
/*import Four from "./Four"*/
import Two from "./Two"
class One extends React.Component{
    state={
        message:"Jyothi",
        
    }
    render(){
        return (
            <>
            <h1>{this.state.message}</h1>
            <button  className="btn btn-success" onClick={()=>{
                this.setState({message:"Pranay"})
            }}>Changemessage</button>
            <hr/>
            
            <Two/>
            
            </>
        );
    };
};
export default One;