import React, { Component } from 'react'
/*import Login2 from "./FormHandling/Login2";
import Login from "./FormHandling/Login";*/
import SignIn from "./FormHandling/SignIn";
export class App extends Component {
    render() {
        return (
            <>
            <div>
            <nav className="nav nav-dark bg-dark">
            <a href="/">Hello Pranay</a>
            </nav> 
            </div>
            
            <SignIn/>
            </>
        )
    }
}

export default App;
