
import React,{Component} from "react";
class Picture extends React.Component {
    state={
        name:"pranay"
    }
    goodMorning=()=>{
        this.setState({message:"saiKumar"})
    }
    goodEvening=()=>{
        this.setState({message:"vinod"})
    }
    goodNight=()=>{
        this.setState({message:"kesava"})
    }
    render(){
    return(
        <>
        <div className="container mt-5">
        <div className="row">
        <div className="col md-5">
        <div className="card">
        <div className="card-header"></div>
        <h1>{this.state.name}</h1>
        <div className="card-body">
        <button className="btn btn-info mr-2" onClick={this.goodMorning}>gooodMorning</button>
        <button className="btn btn-danger mr-2" onClick={this.goodEvening}>goodEvening</button>
        <button className="btn btn-success mr-2" onClick={this.goodNight}>goodNight</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        <Component/>
        </>
    )
    };
};
export default Picture;