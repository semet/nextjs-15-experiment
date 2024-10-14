import { SidebarHeader, SidebarContent } from '@/layouts/dashboard'

export const SidebarContainer = () => {
  return (
    <aside className="min-h-screen w-[330px] border-r">
      <SidebarHeader />
      <SidebarContent />
    </aside>
  )
}
