import Image from 'next/image'

export const SidebarHeader = () => {
  return (
    <div className="flex h-[70px] items-center bg-white px-6">
      <Image
        src="/images/dark-logo.svg"
        alt="logo"
        width={174}
        height={70}
      />
    </div>
  )
}
