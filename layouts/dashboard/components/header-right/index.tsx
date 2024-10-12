import { LanguageSelector, UserMenu } from '@/layouts/dashboard'

export const HeaderRight = () => {
  return (
    <div className="flex items-center gap-5">
      <LanguageSelector />
      <UserMenu />
    </div>
  )
}
