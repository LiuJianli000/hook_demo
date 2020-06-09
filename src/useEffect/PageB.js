import React, { useEffect } from 'react';

function PageB() {
  useEffect(() => {
    console.log('来了老弟---B')
  })
  return (
    <h2 style={{ color: 'red' }}>I'm PageA</h2>
  )
}

export default PageB