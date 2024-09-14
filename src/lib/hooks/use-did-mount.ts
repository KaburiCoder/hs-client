import React, { useEffect, useRef } from 'react'

export const useDidMount = (func: () => void) => {
  const didMount = useRef(false)
  useEffect(() => {
    if (didMount.current) {
      func()
    }
    didMount.current = true
  }, [])
  return didMount.current;
}
