export default function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string
  title: string
  light?: boolean
}) {
  return (
    <div className="mb-14 md:mb-20">
      <p className="mb-4 flex items-center gap-4 text-xs font-medium tracking-[0.35em] uppercase text-flame">
        <span className="inline-block h-px w-10 bg-flame" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl md:text-6xl font-medium leading-[1.05] ${
          light ? 'text-ivory' : 'text-ink'
        }`}
      >
        {title}
      </h2>
    </div>
  )
}
