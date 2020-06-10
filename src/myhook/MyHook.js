import React, { useCallback, useEffect, useState } from 'react';

const useWinSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size;
}

export default function MyHook() {
  const size = useWinSize()

  return (
    <div>
      页面的大小：{size.width} x {size.height}
    </div>
  )
};