import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-ivory/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="Virinchhi Architects — home">
          <img src="/logo.png" alt="" className="h-9 w-auto" />
          <span className="leading-tight">
            <span className="font-display block text-xl font-semibold tracking-wide text-flame">
              VIRINCHHI
            </span>
            <span
              className={`block text-[10px] tracking-[0.45em] uppercase ${
                scrolled || open ? 'text-ink-soft' : 'text-ivory/80'
              }`}
            >
              Architects
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[13px] font-medium tracking-[0.18em] uppercase transition-colors hover:text-flame ${
                  scrolled ? 'text-ink' : 'text-ivory'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden ${
            scrolled || open ? 'text-ink' : 'text-ivory'
          }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ivory lg:hidden">
          <ul className="space-y-1 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl text-ink transition-colors hover:text-flame"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
