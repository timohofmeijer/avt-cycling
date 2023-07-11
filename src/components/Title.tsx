export const Title: React.FC<{ id?: string; children: React.ReactNode }> = ({ id, children }) => {
  return (
    <h2 className="relative mt-8 mb-4 text-xl font-bold">
      {/* compensate for floating header height */}
      <div className="absolute -top-24" id={id} />
      {children}
    </h2>
  )
}
