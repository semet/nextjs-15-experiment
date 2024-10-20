import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/ui'

import { Props } from './type'

export const ModalDialog: FC<Props> = (props) => {
  const {
    centered = false,
    isOpen,
    setIsOpen,
    isLoading,
    title,
    children,
    showBackdrop = false,
    onConfirm,
    confirmText,
    size = 'md'
  } = props
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => {
            if (!isLoading) {
              setIsOpen(false)
            }
          }}
          className="relative z-50"
        >
          {showBackdrop && (
            <DialogBackdrop
              as={motion.div}
              className="fixed inset-0 bg-black/40"
            />
          )}

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[20%] flex w-screen transform items-center justify-center p-4"
          >
            <DialogPanel
              className={twMerge([
                'rounded-lg bg-white shadow-lg',
                size === 'xs' && 'w-full sm:w-[50%] md:w-[40%] lg:w-[30%]',
                size === 'sm' && 'w-full sm:w-[60%] md:w-[50%] lg:w-[40%]',
                size === 'md' && 'w-full sm:w-[70%] md:w-[60%] lg:w-[50%]',
                size === 'lg' && 'w-full sm:w-[80%] md:w-[70%] lg:w-[60%]'
              ])}
            >
              {title && (
                <DialogTitle className="border-b px-4 py-3 text-lg font-bold text-gray-700">
                  {title}
                </DialogTitle>
              )}
              <div className="px-4 py-3">{children}</div>

              <div
                className={twMerge([
                  'flex gap-4 border-t px-4 py-3',
                  centered ? 'justify-center' : ''
                ])}
              >
                <Button
                  variant="warning"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                {onConfirm && (
                  <Button
                    variant="primary"
                    onClick={onConfirm}
                  >
                    {isLoading ? (
                      <CgSpinner className="mx-auto animate-spin" />
                    ) : (
                      (confirmText ?? 'Save')
                    )}
                  </Button>
                )}
              </div>
            </DialogPanel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
