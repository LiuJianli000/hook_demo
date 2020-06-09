import React, { Component } from 'react';
// import Count from './Count';
// import CountHook from './CountHook';
import UseContext from './useContext/UseContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        {/* <Count /> */}
        {/* <CountHook /> */}
        {/* <Example /> */}
        <UseContext />
      </>
     );
  }
}
 
export default App;