import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { memo } from 'react'
import { MdClose } from 'react-icons/md'

import {
  SidebarContent,
  SidebarHeader,
  useDashboard
} from '@/layouts/dashboard'

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const sidebarVariants = {
  hidden: { opacity: 0, x: '-100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', ease: 'easeInOut' }
  },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: { type: 'tween', ease: 'easeInOut' }
  }
}

export const MobileSidebar = memo(() => {
  const { isSidebarOpen, setIsSidebarOpen } = useDashboard()

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <Dialog
          static
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          className="relative z-50"
        >
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/30"
          />
          <div className="fixed inset-0 flex">
            <DialogPanel
              as={motion.div}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="group relative h-full w-full max-w-[330px] bg-white p-4"
            >
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute right-4 top-4 text-gray-500"
              >
                <MdClose size={24} />
              </button>
              <SidebarHeader />
              <SidebarContent />
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
})

MobileSidebar.displayName = 'MobileSidebar'
