'use client'
import cn from 'classnames'
// import { motion } from 'motion/react'
// import { usePathname } from 'next/navigation'

export const PageAnimation: React.FC<{
  children: React.ReactNode
  direction?: 'left' | 'right'
  className?: string
}> = ({ children, /* direction = 'right', */ className }) => {
  return <div className={cn(className, 'min-h-screen w-full')}>{children}</div>
}

// export const OFFPageAnimation: React.FC<{
//   children: React.ReactNode
//   direction?: 'left' | 'right'
//   className?: string
// }> = ({ children, direction = 'right', className }) => {
//   const x = direction === 'left' ? -200 : 200
//   const path = usePathname()
//   return (
//     <motion.div
//       key={path}
//       initial={{ x, opacity: 0 }}
//       animate={{ z: 99, x: 0, opacity: 1 }}
//       exit={{ x, opacity: 0 }}
//       transition={{ duration: 0.4 }}
//       className={cn(className, 'min-h-screen w-full')}
//     >
//       {children}
//     </motion.div>
//   )
// }
