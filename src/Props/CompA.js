import React from "react";
import CompB from "./CompB";
class CompA extends React.Component {
    user_Name="Pranay";
    render(){
        return(
            <>
            <h1> CompA {this.user_Name}</h1>
            <CompB CompB={this.user_Name}/>
            </>
        )
    }
}
export default CompA;