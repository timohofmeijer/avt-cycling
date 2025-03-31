import React from 'react'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'

export const LinkButton: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <Link
      href={href}
      className="group my-4 flex items-center justify-items-center gap-1 text-blue-700"
    >
      {children}
      <BsChevronRight size={18} className="group-hover:animate-left-right" />
    </Link>
  )
}
