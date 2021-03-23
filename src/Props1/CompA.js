import React from "react";
import CompB from "./CompB";                                                                                          
function CompA (){
    let Customer={
        name:"pranay",
        age:12, 
        email:"@gmail.com"
    }

    return(
        <>
        <h1>CompA:-Name:{Customer.name},Age:{Customer.age},Email:{Customer.email}</h1>
        <CompB emp={Customer}/>
        
        </>
    )
}
export default CompA;