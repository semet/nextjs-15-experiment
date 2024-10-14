import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, Fragment } from 'react'
import { LuCircle } from 'react-icons/lu'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

import { TProps } from './type'

export const SidebarLinkWithChildren: FC<TProps> = (props) => {
  const { submenus, icon: Icon, id, name } = props
  const { pathname } = useRouter()
  const isActive = submenus.some(({ href }) => pathname === href)
  return (
    <Disclosure
      as="div"
      defaultOpen={isActive}
      key={id}
    >
      {({ open }) => (
        <>
          <DisclosureButton
            className={twMerge([
              'flex w-full justify-between rounded-lg p-3',
              isActive ? 'bg-primary text-white' : '',
              !isActive
                ? 'text-gray-600 hover:bg-blue-100/40 hover:text-primary'
                : ''
            ])}
          >
            <div className="flex items-center gap-2">
              {Icon && <Icon className="h-5 w-5" />}
              <span className="text-sm">{name}</span>
            </div>
            <MdKeyboardArrowDown
              className={twMerge([
                'h-4 w-4',
                open ? 'rotate-180 transform' : ''
              ])}
            />
          </DisclosureButton>
          <div className="ml-3 overflow-hidden">
            <AnimatePresence>
              {open && (
                <DisclosurePanel
                  static
                  as={Fragment}
                >
                  <motion.ul
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="origin-top"
                  >
                    {submenus.map(({ href, name, id }) => (
                      <motion.li
                        key={id}
                        className="py-0.5"
                      >
                        <Link
                          href={href}
                          className={twMerge([
                            'flex items-center gap-2 rounded-lg p-3',
                            pathname === href ? 'text-primary' : '',
                            pathname !== href ? 'hover:text-primary' : ''
                          ])}
                        >
                          <LuCircle className="h-3 w-3" />
                          <span className="text-sm">{name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  )
}
