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
              <article className="h-full border-t-2 border-flame bg-ivory p-8 lg:p-10">
                <div
                  aria-hidden="true"
                  className="font-display flex h-20 w-20 items-center justify-center bg-ink text-3xl font-medium text-ivory"
                >
                  {m.initials}
                </div>
                <h3 className="font-display mt-8 text-2xl font-medium text-ink md:text-3xl">{m.name}</h3>
                <p className="mt-2 text-[12px] font-semibold tracking-[0.2em] uppercase text-flame">
                  {m.role}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
