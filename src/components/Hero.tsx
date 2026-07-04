import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-dvh items-end">
      <img
        src="/projects/casa-verde.jpg"
        alt="Contemporary residence designed by Virinchhi Architects"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/30" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-20 lg:px-10 lg:pb-28">
        <p className="mb-6 flex items-center gap-4 text-xs font-medium tracking-[0.4em] uppercase text-flame-bright">
          <span className="inline-block h-px w-12 bg-flame-bright" aria-hidden="true" />
          Architecture · Interiors · Turnkey
        </p>
        <h1 className="font-display max-w-4xl text-5xl font-medium leading-[1.02] text-ivory md:text-7xl lg:text-8xl">
          Spaces with soul,
          <br />
          <em className="text-flame-bright">built</em> to endure.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
          Virinchhi Architects is a Ghaziabad-based design studio crafting residences,
          workplaces and interiors where light, material and proportion come first.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#projects"
            className="inline-flex h-12 items-center bg-flame px-8 text-[13px] font-semibold tracking-[0.2em] uppercase text-ivory transition-colors hover:bg-flame-deep"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center border border-ivory/50 px-8 text-[13px] font-semibold tracking-[0.2em] uppercase text-ivory transition-colors hover:border-flame-bright hover:text-flame-bright"
          >
            Start a Project
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 right-8 hidden h-12 w-12 items-center justify-center rounded-full border border-ivory/40 text-ivory transition-colors hover:border-flame-bright hover:text-flame-bright md:flex"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
