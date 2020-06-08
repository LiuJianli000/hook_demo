import React, { useState, useEffect } from 'react';

function CountHook() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`useEffect：${count}`)
  })

  return (
    <>
      <h3>hook</h3>
      <p>You click {count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  )
}

export default CountHook