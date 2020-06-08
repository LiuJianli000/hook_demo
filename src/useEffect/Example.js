import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`useEffect：${count}`)
  })

  return (
    <>
      <h1>hook</h1>
      <p>You click {count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <hr />

    </>
  )
}
export default Example