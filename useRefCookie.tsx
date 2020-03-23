import { useEffect } from 'react'
import Cookies from 'js-cookie'

function useRefCookie(affiliateCode: string) {
	useEffect(() => {
		const search = new URLSearchParams(affiliateCode)
		const affiliateId = search.get('ref')
		if (affiliateId) {
			Cookies.set('affiliateId', affiliateId, { expires: 30 })
		}
	}, [affiliateCode])
}

export default useRefCookie
