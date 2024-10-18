import { motion, AnimatePresence } from 'framer-motion'

import {
  SidebarContent,
  SidebarHeader,
  useDashboard
} from '@/layouts/dashboard'

const sidebarVariants = {
  hidden: {
    x: '-100%',
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.3
    }
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}

export const DesktopSidebar = () => {
  const { isSidebarOpen } = useDashboard()

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.aside
          className="hidden min-h-screen w-[330px] border-r md:block"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarVariants}
        >
          <SidebarHeader />
          <SidebarContent />
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
