import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { TEAM } from '../data'

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="The Partners" title="Three founders, one standard." />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="flex h-full flex-col justify-between border-t-2 border-flame bg-ivory p-8 lg:p-10">
                <div>
                  {m.image ? (
                    <div className="aspect-[4/5] w-full overflow-hidden bg-paper">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="h-full w-full object-cover transition-all duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="font-display flex h-20 w-20 items-center justify-center bg-ink text-3xl font-medium text-ivory"
                    >
                      {m.initials}
                    </div>
                  )}
                  <h3 className="font-display mt-8 text-2xl font-medium text-ink md:text-3xl">{m.name}</h3>
                  <p className="mt-2 text-[12px] font-semibold tracking-[0.2em] uppercase text-flame">
                    {m.role}
                  </p>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
                    {m.bio.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
                {m.quote && (
                  <div className="mt-8 border-t border-line pt-6">
                    <p className="font-display text-lg italic leading-relaxed text-ink-soft/90">
                      “{m.quote}”
                    </p>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
