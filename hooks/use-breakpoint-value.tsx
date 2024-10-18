import { useEffect, useState } from 'react'

type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const breakpoints: Record<Breakpoint, number> = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

export const useBreakpointValue = <T,>(
  values: Partial<Record<Breakpoint, T>>
): T | undefined => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint | undefined>(
    undefined
  )

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth

      if (width >= breakpoints['2xl']) {
        setBreakpoint('2xl')
      } else if (width >= breakpoints.xl) {
        setBreakpoint('xl')
      } else if (width >= breakpoints.lg) {
        setBreakpoint('lg')
      } else if (width >= breakpoints.md) {
        setBreakpoint('md')
      } else if (width >= breakpoints.sm) {
        setBreakpoint('sm')
      } else {
        setBreakpoint('base')
      }
    }

    // Initial check
    updateBreakpoint()

    // Listen for window resize
    window.addEventListener('resize', updateBreakpoint)

    return () => {
      window.removeEventListener('resize', updateBreakpoint)
    }
  }, [])

  if (!breakpoint) return undefined

  return values[breakpoint]
}
