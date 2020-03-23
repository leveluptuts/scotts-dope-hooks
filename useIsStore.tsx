// ? About This Hook ?
// This hook returns a boolean if you are on a store page or not

import { useContext, useEffect, useState } from 'react';
import { __RouterContext } from 'react-router';

function useIsStore() {
	const { location } = useContext(__RouterContext);
	const [isStore, setIsStore] = useState(false);
	useEffect(() => {
		if (location.pathname.includes('store')) {
			setIsStore(true);
		} else {
			setIsStore(false);
		}
	}, [location.pathname]);
	return isStore;
}

export default useIsStore;
