import { useEffect } from 'react'

export const useMount = (fn: () => void) => {
	useEffect(fn, [])
}

export const useUnmount = (fn: () => void) => {
	useEffect(() => fn)
}
