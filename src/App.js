import React, { Component } from 'react';
import UseReducer from './useReducer/UseReducer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Count from './Count';
import CountHook from './CountHook';
import UseContext from './useContext/UseContext';
import Example from './useEffect/Example';

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
        {/* <UseContext /> */}
        {/* <UseReducer /> */}
        <Router>
        <ul>
          <li><Link to="/">count</Link></li>
          <li><Link to="/useState">useState</Link></li>
          <li><Link to="/useEffect">useEffect</Link></li>
          <li><Link to="/useContext">useContext</Link></li>
          <li><Link to="/useReducer">useReducer</Link></li>
        </ul>
        <Route path="/" exact component={Count}></Route>
        <Route path="/useState" component={CountHook}></Route>
        <Route path="/useEffect" component={Example}></Route>
        <Route path="/useContext" component={UseContext}></Route>
        <Route path="/useReducer" component={UseReducer}></Route>
      </Router>
      </>
     );
  }
}
 
export default App;