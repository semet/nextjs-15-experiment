import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { FC } from 'react'

import { Props } from './type'

export const DropDown: FC<Props> = (props) => {
  const { children, trigger } = props
  return (
    <Popover>
      {({ open }) => (
        <>
          <PopoverButton className="rounded-full p-2 text-gray-600 hover:bg-blue-100/40 hover:text-blue-600">
            {trigger}
          </PopoverButton>
          <AnimatePresence>
            {open && (
              <PopoverPanel
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                anchor="bottom"
                className="mt-2 flex origin-top-right flex-col rounded-md bg-white p-3 shadow"
              >
                {children}
              </PopoverPanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  )
}
