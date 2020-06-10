import React, { Component } from 'react';
import UseReducer from './useReducer/UseReducer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Count from './Count';
import CountHook from './CountHook';
import UseContext from './useContext/UseContext';
import Example from './useEffect/Example';
import UseCxtRdc from './useContext-useReducer/UseCxtRdc';
import UseMemo from './useMemo/UseMemo';
import UseRef from './useRef/UseRef';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <h1>hooks 学习</h1>
        <Router>
        <ul>
          <li><Link to="/count-demo">count</Link></li>
          <li><Link to="/useState">useState</Link></li>
          <li><Link to="/useEffect">useEffect</Link></li>
          <li><Link to="/useContext">useContext</Link></li>
          <li><Link to="/useReducer">useReducer</Link></li>
          <li><Link to="/useContext-useReducer">useContext-useReducer</Link></li>
          <li><Link to='/useMemo'>useMemo</Link></li>
          <li><Link to='/useRef'>useRef</Link></li>
        </ul>
        <Route path="/count-demo" component={Count}></Route>
        <Route path="/useState" component={CountHook}></Route>
        <Route path="/useEffect" component={Example}></Route>
        <Route path="/useContext" component={UseContext}></Route>
        <Route path="/useReducer" component={UseReducer}></Route>
        <Route path="/useContext-useReducer" component={UseCxtRdc}></Route>
        <Route path="/useMemo" component={UseMemo}></Route>
        <Route path="/useRef" component={UseRef}></Route>
      </Router>
      </>
     );
  }
}
 
export default App;