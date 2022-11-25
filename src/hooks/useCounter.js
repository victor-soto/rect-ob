import { useState } from 'react'

export const useCounter = (initialValue = 0) => {
  const minValue = -10
  const maxValue = 10
  const [value, setValue] = useState(initialValue)

  const increment = (val) => {
    setValue((oldValue) => {
      console.log(oldValue, maxValue)
      if (oldValue < maxValue) return oldValue + val
      return maxValue
    })
  }

  const decrement = (val) => {
    setValue((oldValue) => {
      if (oldValue > minValue) return oldValue - val
      return minValue
    })
  }

  const reset = () => {
    setValue(0)
  }

  return {
    value, increment, decrement, reset,
  }
}
