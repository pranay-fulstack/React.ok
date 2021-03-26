import React, { Component } from 'react'
import One from "./StateBinding/One";
export class App extends Component {
    render() {
        return (
            <>
            <div>
            <nav className="nav nav-dark bg-dark">
            <a href="/">Hello Pranay</a>
            </nav> 
            </div>
            <One/>
            </>
        )
    }
}

export default App;
