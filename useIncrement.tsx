import { useState } from 'react'

export const useIncrement = (initial: number, step = 1, lowerLimit = 0) => {
  const [value, setValue] = useState(initial)
  const inc = () => setValue(prev => prev + step)
  const deinc = () =>
    setValue(prev => (prev === lowerLimit ? lowerLimit : prev - step))
  return [
    value,
    {
      inc,
      deinc,
    },
  ]
}
