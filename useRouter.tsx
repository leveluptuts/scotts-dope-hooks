import { useContext } from 'react'
import { __RouterContext } from 'react-router'

function useRouter() {
  return useContext(__RouterContext)
}

export default useRouter
