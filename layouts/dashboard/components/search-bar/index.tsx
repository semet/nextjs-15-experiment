import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useRef, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = () => {
    setIsOpen(true)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }
  return (
    <Fragment>
      <button
        onClick={onClick}
        className="rounded-full p-2 text-gray-600 hover:bg-blue-100/40 hover:text-primary"
      >
        <IoMdSearch className="h-5 w-5" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <DialogBackdrop
              as={motion.div}
              className="fixed inset-0 bg-black/40"
            />
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[10%] flex w-screen transform items-center justify-center p-4"
            >
              <DialogPanel className="min-w-[50svw] space-y-4 rounded-lg bg-white px-6 py-8 shadow-lg">
                <DialogTitle>
                  <input
                    type="text"
                    ref={inputRef}
                    placeholder="Search"
                    className="w-full rounded-md border border-gray-200 p-2"
                  />
                </DialogTitle>
                <Description>
                  <span className="text-sm italic text-gray-500">
                    Type any keyword to search
                  </span>
                </Description>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </Fragment>
  )
}
