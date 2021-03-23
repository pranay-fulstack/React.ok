import React from "react"
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
            <h1>{this.state.message}</h1>
            <h2>{this.props.jyothi}</h2>
            <button className="btn btn-info" onClick={this.change}>ChangeMessage</button>
            </>
        )
    }
}
export default Message;