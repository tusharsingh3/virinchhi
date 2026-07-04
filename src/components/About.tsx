import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const STATS = [
  { value: '10+', label: 'Ongoing Projects' },
  { value: '5', label: 'Years of Practice' },
  { value: '3', label: 'Cities' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:py-36 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionHeading eyebrow="About the Studio" title="Design led by restraint, delivered with rigour." />
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            Founded by three partners in Govindpuram, Ghaziabad, Virinchhi Architects works
            across architecture, interiors and turnkey construction. We believe the most
            luxurious material is space itself — every project begins with light, proportion
            and the way a family or business actually lives.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
            From a first sketch to the final handover, one studio carries the responsibility.
            No hand-offs, no diluted intent — the building you move into is the building we drew.
          </p>
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-between gap-12">
          <figure className="relative overflow-hidden">
            <img
              src="/projects/e68-residence.jpg"
              alt="E-68 Vertica Residence, a four-storey home with planted balconies"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-0 left-0 h-1 w-24 bg-flame" aria-hidden="true" />
          </figure>

          <dl className="grid grid-cols-3 gap-x-8 gap-y-10">
            {STATS.map((s) => (
              <div key={s.label} className="border-t border-line pt-4">
                <dt className="order-2 text-[11px] font-medium tracking-[0.2em] uppercase text-ink-soft">
                  {s.label}
                </dt>
                <dd className="font-display mb-1 text-4xl font-semibold text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
