import React, { useReducer } from 'react';

export default function UseReducer() {
  const [count, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0)

  return (
    <div>
      <h2>现在的分数是：{count}</h2>
      <button onClick={() => { dispatch({ type: 'add' })  }}>+</button>
      <button onClick={() => { dispatch({ type: 'sub' })  }}>-</button>
    </div>
  )
}