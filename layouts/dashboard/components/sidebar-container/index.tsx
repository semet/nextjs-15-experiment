import { SidebarContent, SidebarHeader } from '@/layouts/dashboard'

export const SidebarContainer = () => {
  return (
    <aside className="hidden min-h-screen w-[330px] border-r md:block">
      <SidebarHeader />
      <SidebarContent />
    </aside>
  )
}
