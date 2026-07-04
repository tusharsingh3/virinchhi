import { useState } from 'react'
import { Images } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Lightbox from './Lightbox'
import { PROJECTS } from '../data'

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [imageIndex, setImageIndex] = useState(0)
  const openProject = openIndex !== null ? PROJECTS[openIndex] : null

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:py-36 lg:px-10">
      <Reveal>
        <SectionHeading eyebrow="Selected Work" title="Projects that speak quietly." />
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100} className={p.span ? 'md:col-span-2' : ''}>
            <article className="group">
              <figure
                className={`relative overflow-hidden bg-paper ${p.images ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (!p.images) return
                  setOpenIndex(i)
                  setImageIndex(0)
                }}
              >
                <img
                  src={p.image}
                  alt={p.category ? `${p.title} — ${p.category.toLowerCase()} project in ${p.location}` : `${p.title} in ${p.location}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                    p.imageAspect ?? (p.span ? 'aspect-[16/9]' : 'aspect-[4/3]')
                  }`}
                />
                {p.category && (
                  <figcaption className="absolute top-5 left-5 bg-ivory/95 px-4 py-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-ink">
                    {p.category}
                  </figcaption>
                )}
                {p.images && (
                  <span className="absolute bottom-5 right-5 flex items-center gap-2 bg-ink/80 px-3 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-ivory">
                    <Images size={14} />
                    {p.images.length} Photos
                  </span>
                )}
              </figure>
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-5">
                <div>
                  <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-flame md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.location}</p>
                </div>
                <p className="font-display text-lg text-flame">{p.year}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-sm text-ink-soft italic">
        A selection of built and ongoing work. Full portfolio available on request.
      </p>

      {openProject?.images && (
        <Lightbox
          images={openProject.images}
          title={openProject.title}
          index={imageIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setImageIndex}
        />
      )}
    </section>
  )
}
