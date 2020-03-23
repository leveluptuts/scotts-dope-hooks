import { useEffect, useLayoutEffect } from 'react'

const useIsoLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default useIsoLayoutEffect
