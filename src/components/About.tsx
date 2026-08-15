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
      {/* Intro Header */}
      <div className="mb-20">
        <Reveal>
          <SectionHeading eyebrow="Our Story" title="Three minds. One vision. Infinite forms." />
        </Reveal>
      </div>

      <div className="space-y-24 md:space-y-36">
        {/* Section 1: How It All Began */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-ink md:text-3xl mb-6">
              How It All Began
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Virinchhi Architects was not born in a boardroom — it was born in a conversation.
                Each walking a different professional path, each carrying a distinct expertise,
                found themselves drawn together by a shared restlessness. A feeling that the
                spaces around us could be more thoughtful, more intentional, more alive.
              </p>
              <p>
                Vaibhav, with his deep roots in commercial architecture and urban planning, had
                spent years studying how cities grow and how buildings shape the communities
                within them. Sumit, immersed in the world of BIM and data-driven design,
                understood how technology could make architecture smarter, more precise, and
                more future-ready. Vartika, with her mastery of interiors and an instinct for
                how a space feels, knew that no building is truly complete until the human
                experience inside it has been considered with equal care.
              </p>
              <p>
                Separately, they were skilled professionals. Together, they realised they could
                be something far greater — a firm that could take a project from master plan to
                finished interior, from concept sketch to construction documentation, with
                complete expertise at every stage.
              </p>
              <p>
                And so, Virinchhi Architects was founded — not just as a business, but as a
                shared belief that architecture, planning, and interior design are not separate
                disciplines. They are one continuous act of creation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="relative overflow-hidden">
              <img
                src="/projects/e68-residence.jpg"
                alt="E-68 Vertica Residence, a four-storey home with planted balconies"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-0 left-0 h-1 w-24 bg-flame" aria-hidden="true" />
            </figure>
          </Reveal>
        </div>

        {/* Section 2: The Name Behind the Vision */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <Reveal className="lg:order-2">
            <h3 className="font-display text-2xl font-medium text-ink md:text-3xl mb-6">
              The Name Behind the Vision
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Our name is not just a word — it is an intention.
              </p>
              <p>
                Virinchhi is one of the many names of Lord Brahma, the Creator in Hindu
                philosophy — the divine source of all forms, all knowledge, and all beginnings.
                Brahma is the architect of the universe itself, the one who breathes life into
                what did not exist before, who shapes the formless into form.
              </p>
              <p>
                We chose this name because it speaks to the very heart of what we believe
                architecture is. Every project we take on begins as nothing — an empty plot, a
                blank floor plan, a client's half-formed dream. And through design, through
                craft, through years of knowledge and genuine care, we bring it into being.
              </p>
              <p>
                To create a building is to participate in something ancient and profound. It is
                to say: this space did not exist, and now it does — and it will outlast us.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="lg:order-1 flex items-center justify-center p-8 bg-paper/55 border border-line aspect-square"
          >
            <div className="text-center max-w-sm">
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-flame block mb-4">
                Meaning
              </span>
              <p className="font-display text-3xl italic leading-relaxed text-ink mb-6">
                “Virinchhi. The Creator. The one who gives form to dreams.”
              </p>
              <span className="h-0.5 w-12 bg-flame/30 block mx-auto" aria-hidden="true" />
            </div>
          </Reveal>
        </div>

        {/* Section 3: What We Stand For */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-ink md:text-3xl mb-6">
              What We Stand For
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                We are a firm built on three pillars — Architecture, Interior Design, and Urban
                Planning — because we believe that the best spaces are designed with all three
                lenses at once. When a building is planned with its interiors in mind from day
                one, when its design considers not just the plot but the neighbourhood around
                it, when technology and Vastu wisdom sit at the same table as creativity — that
                is when truly extraordinary spaces are born.
              </p>
              <p>
                We are a young firm with deep expertise, a small team that gives every project the
                attention it deserves, and a growing portfolio that spans bungalows and villas,
                residence interiors, gym and wellness spaces, commercial complexes, and
                large-scale infrastructure.
              </p>
              <p>
                Every client who walks through our door brings us a dream. Our job — and our
                joy — is to build it.
              </p>

              <div className="pt-6">
                <p className="font-display text-xl font-medium text-flame leading-relaxed">
                  Virinchhi Architects — Creating All Forms. Crafting Dreams.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-between gap-12">
            <figure className="relative overflow-hidden">
              <img
                src="/projects/casa-verde.jpg"
                alt="Casa Verde Residence, architectural model and build details"
                className="aspect-video w-full object-cover"
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
      </div>
    </section>
  )
}
