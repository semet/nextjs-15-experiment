import { HeaderLeft, HeaderRight } from '@/layouts/dashboard'

export const HeaderContainer = () => {
  return (
    <header className="bg- flex h-[70px] items-center justify-between bg-white px-8">
      <HeaderLeft />
      <HeaderRight />
    </header>
  )
}
