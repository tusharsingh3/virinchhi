import { CONTACT, NAV_LINKS } from '../data'

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="Back to top">
              <img src="/logo.png" alt="" className="h-10 w-auto" />
              <span className="leading-tight">
                <span className="font-display block text-2xl font-semibold tracking-wide text-flame">VIRINCHHI</span>
                <span className="block text-[10px] tracking-[0.45em] uppercase text-ivory/60">Architects</span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">
              Architecture, interiors and turnkey construction studio based in Ghaziabad.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] uppercase text-flame-bright">Explore</p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ivory/70 transition-colors hover:text-flame-bright">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] uppercase text-flame-bright">Reach Us</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              {CONTACT.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="transition-colors hover:text-flame-bright">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-flame-bright">
                  {CONTACT.email}
                </a>
              </li>
              <li className="max-w-xs">{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-xs text-ivory/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Virinchhi Architects. All rights reserved.</p>
          <p>Govindpuram · Ghaziabad</p>
        </div>
      </div>
    </footer>
  )
}
