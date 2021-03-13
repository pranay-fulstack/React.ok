import React, { Component } from 'react';

class Click extends Component {
  
    render() {
        
        return <>
           <h1>Click component</h1>
           <h2>{this.props.name}</h2>
        </>
    };
};

export default Click;
