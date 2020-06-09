import React, { useEffect } from 'react';

function PageA() {
  useEffect(() => {
    console.log('来了老弟---A')

    return () => {
      console.log('老弟走好---a')
    }
  }, [])
  return (
    <h2 style={{ color: 'blue' }}>I'm PageA</h2>
  )
}

export default PageA