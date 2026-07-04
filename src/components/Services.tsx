import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { SERVICES } from '../data'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading light eyebrow="What We Do" title="Six disciplines, one studio." />
        </Reveal>

        <div className="grid gap-px border border-ivory/10 bg-ivory/10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 60}>
              <article className="group h-full bg-ink p-8 transition-colors duration-300 hover:bg-[#201a17] lg:p-10">
                <p className="font-display text-lg text-flame">{s.no}</p>
                <h3 className="font-display mt-4 text-2xl font-medium text-ivory md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/60">{s.desc}</p>
                <span
                  className="mt-8 block h-px w-10 bg-flame/60 transition-all duration-300 group-hover:w-20 group-hover:bg-flame"
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
