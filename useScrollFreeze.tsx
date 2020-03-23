// ? About This Hook ?
// This hook adds overflow hidden to body to prevent scrolling

import { useLayoutEffect } from 'react'

export default function useScrollFreeze() {
	useLayoutEffect(() => {
		// Get original body overflow
		const originalStyle = window.getComputedStyle(document.body).overflow
		// Prevent scrolling on mount
		document.body.style.overflow = 'hidden'
		// Re-enable scrolling when component unmounts
		return () => {
			document.body.style.overflow = originalStyle
		}
	}, []) // Empty array ensures effect is only run on mount and unmount
}
