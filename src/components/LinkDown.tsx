import { FaArrowAltCircleDown } from 'react-icons/fa'

export const LinkDown: React.FC<{ hash: string; children: React.ReactNode }> = ({
  hash,
  children,
}) => {
  return (
    <a href={hash} className="mb-1 flex items-center text-blue-700">
      {children} <FaArrowAltCircleDown size={13} className="ml-2" />
    </a>
  )
}
