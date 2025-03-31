import { AvtIcon } from './avt-icon'

export const PageHeader = () => {
  return (
    <header
      className="fixed top-0 right-3 left-3 z-20 flex h-[calc(5rem+env(safe-area-inset-top))] flex-col justify-center overflow-hidden p-3 backdrop-blur-lg"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
      id="headerPortal"
    >
      <a
        className="absolute right-4 z-20 mt-3 select-none"
        target="_blank"
        href="https://avtriathlon.nl/fietsen/wielrennen/"
      >
        <AvtIcon className="h-8 w-8 fill-blue-700" />
      </a>
      <div className="absolute top-0 left-0 z-0 h-full w-full rounded-lg border border-t-0 border-zinc-200 bg-zinc-100 opacity-60" />
    </header>
  )
}
