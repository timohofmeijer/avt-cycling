'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsChevronLeft } from 'react-icons/bs'

export const HeaderBack: React.FC = () => {
  const isRoot = usePathname() === '/'
  if (isRoot) return null
  return (
    <Link
      href="/"
      className="flex items-center justify-items-center gap-1 text-blue-600 z-10 bottom-2 absolute"
    >
      <BsChevronLeft size={18} /> Terug
    </Link>
  )
}
