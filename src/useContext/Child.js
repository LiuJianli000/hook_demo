import React, { useContext } from 'react';
import { CountContext } from './UseContext';
import Child2 from './Child2';


export default function Child() {
  let data = useContext(CountContext)
  const count = data.count
  const name = data.name

  return (
    <>
      <h2>{count}</h2>
      <p>{name}</p>
      孙子组件
      <Child2 />
    </>
  )
}