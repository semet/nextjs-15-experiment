import Image from 'next/image'

export const SidebarHeader = () => {
  return (
    <div className="flex h-[70px] items-center bg-white px-6">
      <Image
        src="/images/dark-logo.svg"
        alt="logo"
        width={0}
        height={0}
        className="h-[70px] w-[174px] object-contain"
        rel="preload"
        priority
      />
    </div>
  )
}
