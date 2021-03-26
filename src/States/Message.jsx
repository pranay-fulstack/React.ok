import React from "react"
import Images from "../../src/States/Images/jpranay.jpg";
class Message extends React.Component{
    state={
        message:"hello pavani",
    }
    change=()=>{
        this.setState({message:"hello pranav"})
        console.log(this.state.message);
    }
    render(){
        return(
            <>
            <img src={Images} alt="" height="200px" width="200px"/>
            <h1>{this.state.message}</h1>
            <h2>{this.props.jyothi}</h2>
            <button className="btn btn-info" onClick={this.change}>ChangeMessage</button>
            </>
        )
    }
}
export default Message;