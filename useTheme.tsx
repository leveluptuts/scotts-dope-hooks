import { useEffect } from 'react'

const useTheme = (user: any) => {
  useEffect(() => {
    if (user?.settings?.theme) {
      document.body.className = ''
      document.body.classList.add(user.settings.theme)
    } else {
      document.body.className = ''
    }
    return () => {}
  }, [user, user?.settings?.theme])
}

export default useTheme
