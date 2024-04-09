import React from 'react'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'

export const LinkButton: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <Link href={href} className="flex items-center gap-1 my-4 text-blue-700 justify-items-center">
      {children}
      <BsChevronRight size={18} />
    </Link>
  )
}
