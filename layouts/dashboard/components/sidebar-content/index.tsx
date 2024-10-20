import { memo } from 'react'

import {
  SidebarLink,
  SidebarLinkWithChildren,
  sidebarMenus
} from '@/layouts/dashboard'

export const SidebarContent = memo(() => {
  return (
    <div className="scrollbar-thumb-transparent scrollbar-track-transparent scrollbar-thin group-hover:scrollbar-thumb-gray-900/50 group-hover:scrollbar-track-white max-h-screen overflow-y-auto transition-all duration-500">
      <div className="mx-6 mt-7 flex flex-col gap-2">
        <h3 className="text-sm font-semibold uppercase text-gray-800">Menu</h3>
        <ul className="flex flex-col">
          {sidebarMenus.map(({ icon: Icon, href, name, children, id }) => (
            <li
              key={id}
              className="py-0.5"
            >
              {!children ? (
                <SidebarLink
                  href={href}
                  icon={Icon}
                  name={name}
                />
              ) : (
                <SidebarLinkWithChildren
                  id={id}
                  submenus={children}
                  icon={Icon}
                  name={name}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

SidebarContent.displayName = 'SidebarContent'
