import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useMutation } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { authKey } from '@/factories/mutation'
import { logoutRequest, userMenu } from '@/layouts/dashboard'
import { clearToken } from '@/utils'

export const UserMenu = () => {
  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: authKey.logout,
    mutationFn: logoutRequest,
    onSettled: () => {
      clearToken()
      push('/auth/login')
    }
  })
  const handleMenuClick = (name: string) => {
    if (['profile', 'setting'].includes(name.toLowerCase())) {
      push(`/dashboard/${name.toLowerCase()}`)
    } else {
      mutate()
    }
  }
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton className="rounded-full p-2 text-gray-600 hover:bg-blue-100/40 hover:text-blue-600">
            <Image
              alt="User"
              src="/images/dummy/user-1.jpg"
              height={35}
              width={35}
              className="rounded-full"
            />
          </MenuButton>
          <AnimatePresence>
            {open && (
              <MenuItems
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                anchor="bottom end"
                className="mt-2 flex origin-top-right flex-col rounded-md bg-white px-3 shadow"
              >
                {userMenu.map(({ icon: Icon, id, name }) => (
                  <MenuItem
                    key={id}
                    as={'button'}
                    onClick={() => handleMenuClick(name)}
                    className="flex items-center gap-2 rounded-md px-2 py-2 text-gray-600 first:mt-2 last:mb-2 data-[focus]:bg-blue-50/40 data-[focus]:text-primary"
                  >
                    <Icon />
                    <span className="text-sm">{name}</span>
                  </MenuItem>
                ))}
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  )
}
