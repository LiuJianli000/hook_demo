import React, { useState, useMemo } from 'react';

export default function UseMemo() {
  const [xiaohong, setXiaohong] = useState('xiaohong is waiting')
  const [zhiling, setZhiling] = useState('zhiling is waiting')
  
  return ( 
    <>
      <button onClick={() => { setXiaohong(new Date().getTime()) }}>xiaohong</button>
      <button onClick={() => { setZhiling(new Date().getTime() + 'zhiling is coming') }}>zhiling</button>
      <Child name={xiaohong}>{zhiling}</Child>
    </>
   );
}


function Child({ name, children}) {
  const changeXiaohong = (name) => {
    console.log('she is coming, xiaohong is coming')
    return name + ', xiaohong is coming'
  }

  // const actionXiaohong = changeXiaohong(name)  // 会发现，每次点击父组件时候，子组件中的方法跟着再执行一遍
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
  
  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  )
} 