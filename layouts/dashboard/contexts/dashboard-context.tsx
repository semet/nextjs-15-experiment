import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from 'react'

type DashboardContextType = {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
  toggleSidebar: () => void
}

type DashboardProviderProps = PropsWithChildren

const DashboardContext = createContext<DashboardContextType | null>(null)

const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const values = { isSidebarOpen, setIsSidebarOpen, toggleSidebar }

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
