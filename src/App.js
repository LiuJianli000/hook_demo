import React, { Component } from 'react';
import Count from './Count';
import CountHook from './CountHook';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <Count />
        <CountHook />
      </>
     );
  }
}
 
export default App;