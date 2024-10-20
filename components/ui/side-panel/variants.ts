import { Variants } from 'framer-motion'

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

export const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: '+100%' }, // Start off-screen on the right
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', ease: 'easeInOut' }
  },
  exit: {
    opacity: 0,
    x: '+100%', // Exit to the right side
    transition: { type: 'tween', ease: 'easeInOut' }
  }
}
