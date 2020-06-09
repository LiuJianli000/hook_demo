import React, { Component } from 'react';
import Count from './Count';
import CountHook from './CountHook';
import Example from './useEffect/Example';

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
        <hr />
        <Example />
      </>
     );
  }
}
 
export default App;