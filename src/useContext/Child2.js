import React, { useContext } from 'react';
import { CountContext } from './UseContext';


export default function Child2() {
  let data = useContext(CountContext)
  const count = data.count
  const name = data.name

  return (
    <>
      <h2>{count}</h2>
      <p>{name}</p>
    </>
  )
}