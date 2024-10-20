import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { FC } from 'react'
import { MdClose } from 'react-icons/md'

import { Props } from './type'
import { backdropVariants, sidebarVariants } from './variants'

export const SidePanel: FC<Props> = (props) => {
  const { isOpen, setIsOpen, children, title, onClose } = props

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={() => {
            setIsOpen(false)
            if (onClose) {
              onClose()
            }
          }}
          className="relative z-50"
        >
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/30"
          />
          <div className="fixed inset-0 flex justify-end">
            <DialogPanel
              as={motion.div}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative h-screen w-full max-w-full bg-white md:max-w-[400px] 2xl:max-w-[600px]"
            >
              <div className="absolute flex w-full justify-between bg-gray-100 px-6 py-3">
                <h2 className="text-xl font-semibold tracking-wide text-gray-600">
                  {title}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-gray-500 hover:bg-primary/10"
                >
                  <MdClose size={24} />
                </button>
              </div>
              <div className="scrollbar-thin scrollbar-thumb-gray-900/50 scrollbar-track-white mt-16 h-full overflow-y-auto px-6 py-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
