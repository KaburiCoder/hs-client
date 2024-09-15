import { useEffect, useRef } from 'react'

export const useDidMount = (func: () => void) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, [didMount.current]);

  return didMount.current;
}