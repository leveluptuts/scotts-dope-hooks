import { useState, useMemo } from 'react'
const useIsHover = () => {
  const [state, setState] = useState(false)

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setState(true),
      onMouseLeave: () => setState(false),
    }
  }, [])

  return [state, bind]
}

export { useIsHover }
