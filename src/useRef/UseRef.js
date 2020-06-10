import React, { useRef, useState, useEffect } from 'react';

const UseRef = () => {
  // 使用 useRef 获取 dom 元素的值
  const inputEle = useRef(null)
  const handleClick = () => {
    inputEle.current.value = 'hello world'
    console.log(inputEle)
  }
  
  const [text, setText] = useState('hello world')
  const textRef = useRef()

  useEffect(() => {
    // 把 value 值保存到 ref 中
    textRef.current = text
    console.log('textRef.current', textRef.current)
  })
  
  return ( 
    <>
      <input ref={inputEle} type="text" />
      <button onClick={handleClick}>在input上展示文字</button>
      <hr />
      <input value={text} onChange={e => {setText(e.target.value)}} />
    </>
   );
}

export default UseRef;