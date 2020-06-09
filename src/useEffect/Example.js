import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PageA from './PageA';
import PageB from './PageB';

function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`useEffect：${count}`)

    return () => {
      console.log('=======================')
    }
  }, [count])

  return (
    <>
      <h1>Example</h1>
      <p>You click {count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <Router>
        <ul>
          <li><Link to="/">页面A</Link></li>
          <li><Link to="/page-b">页面B</Link></li>
        </ul>
        <Route path="/" exact component={PageA}></Route>
        <Route path="/page-b" component={PageB}></Route>
      </Router>

    </>
  )
}
export default Example