import { useBreakpointValue } from '@/hooks'
import { DesktopSidebar, MobileSidebar } from '@/layouts/dashboard'

export const SidebarContainer = () => {
  const deviceType = useBreakpointValue({
    base: 'mobile',
    sm: 'mobile',
    md: 'tablet',
    lg: 'desktop',
    xl: 'desktop'
  })

  return deviceType === 'desktop' ? <DesktopSidebar /> : <MobileSidebar />
}
