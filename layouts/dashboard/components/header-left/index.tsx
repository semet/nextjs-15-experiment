import { SearchBar, ToggleSidebar } from '@/layouts/dashboard'

export const HeaderLeft = () => {
  return (
    <div className="flex items-center gap-2">
      <ToggleSidebar />
      <SearchBar />
    </div>
  )
}
