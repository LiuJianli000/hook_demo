import React, { useState, createContext } from 'react';
import Child from './Child';

export const CountContext = createContext()

export default function UseContext() {
  const [count, setCount] = useState(0)

  const name = 'liu'

  return (
    <>
      <h3>Count</h3>
      <p>You click {count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <hr />

      <CountContext.Provider value={{count, name}}>
        子组件
        <Child />
      </CountContext.Provider>
    </>
  )
}
