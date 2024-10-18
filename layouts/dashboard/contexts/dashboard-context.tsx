import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useState
} from 'react'

import { useBreakpointValue } from '@/hooks'

type DashboardContextType = {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
  toggleSidebar: () => void
}

type DashboardProviderProps = PropsWithChildren

const DashboardContext = createContext<DashboardContextType | null>(null)

const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const deviceType = useBreakpointValue({
    base: 'mobile',
    sm: 'mobile',
    md: 'tablet',
    lg: 'desktop',
    xl: 'desktop'
  })

  const [isSidebarOpen, setIsSidebarOpen] = useState(
    () => deviceType === 'desktop'
  )

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const values = { isSidebarOpen, setIsSidebarOpen, toggleSidebar }

  useLayoutEffect(() => {
    if (deviceType === 'desktop') {
      setIsSidebarOpen(true)
    } else {
      setIsSidebarOpen(false)
    }
  }, [deviceType])
  return (
    <DashboardContext.Provider value={values}>
      {children}
    </DashboardContext.Provider>
  )
}

const useDashboard = () => {
  const context = useContext(DashboardContext)

  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }

  return context
}

export { DashboardProvider, useDashboard }
