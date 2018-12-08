import React from 'react';
import '../css/App.css';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    };
    
  }

  handleClick() {
    alert('this comes from app.js');
  }

  componentDidMount() {
    
  }
 
  
  render() {
    
    return (
      <h> Hello from Openshift Application </h>
    );
  }
}
