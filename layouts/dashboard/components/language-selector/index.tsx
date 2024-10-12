import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

import { languages } from '@/layouts/dashboard'

export const LanguageSelector = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton className="rounded-full p-2 text-gray-600 hover:bg-blue-100/40 hover:text-blue-600">
            <Image
              alt="Language"
              src="/images/flags/indonesia.svg"
              height={24}
              width={24}
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
                className="mt-2 flex origin-top-right flex-col rounded-md bg-white p-3 shadow"
              >
                {languages.map((language) => (
                  <MenuItem
                    key={language.id}
                    as={'button'}
                    className="data-[focus]:text-primary flex items-center gap-2 rounded px-1 py-2 text-gray-600 data-[focus]:bg-blue-50/40"
                  >
                    <Image
                      alt={language.name}
                      height={20}
                      src={language.flag}
                      width={20}
                    />
                    <span className="text-sm">{language.name}</span>
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
