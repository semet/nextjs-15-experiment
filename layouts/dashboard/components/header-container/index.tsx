import { HeaderLeft, HeaderRight } from '@/layouts/dashboard'

export const HeaderContainer = () => {
  return (
    <header className="flex h-[70px] items-center justify-between bg-white px-4 lg:px-8">
      <HeaderLeft />
      <HeaderRight />
    </header>
  )
}
