import { useEffect, useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { CONTACT } from '../data'

const INPUT_CLASSES =
  'w-full border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none transition-colors focus:border-flame'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState(false)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(false), 4000)
    return () => clearTimeout(t)
  }, [toast])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSending(true)
    // No backend yet — simulate a brief send, then confirm.
    setTimeout(() => {
      setSending(false)
      setToast(true)
      form.reset()
    }, 700)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:py-36 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Let's build something worth keeping." />
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Phone size={20} className="mt-1 shrink-0 text-flame" />
              <span>
                <span className="block text-[11px] font-semibold tracking-[0.25em] uppercase text-ink-soft">
                  Phone
                </span>
                <span className="flex flex-col gap-1">
                  {CONTACT.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="font-display text-xl text-ink transition-colors hover:text-flame"
                    >
                      {p.display}
                    </a>
                  ))}
                </span>
              </span>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="group flex items-start gap-4">
                <Mail size={20} className="mt-1 shrink-0 text-flame" />
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.25em] uppercase text-ink-soft">
                    Email
                  </span>
                  <span className="font-display text-xl break-all text-ink transition-colors group-hover:text-flame">
                    {CONTACT.email}
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={20} className="mt-1 shrink-0 text-flame" />
              <span>
                <span className="block text-[11px] font-semibold tracking-[0.25em] uppercase text-ink-soft">
                  Studio
                </span>
                <span className="font-display text-xl text-ink">{CONTACT.address}</span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="border border-line bg-paper p-8 lg:p-10" noValidate={false}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-[11px] font-semibold tracking-[0.25em] uppercase text-ink-soft">
                  Name <span className="text-flame">*</span>
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={INPUT_CLASSES} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-[11px] font-semibold tracking-[0.25em] uppercase text-ink-soft">
                  Phone <span className="text-flame">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91 ..." className={INPUT_CLASSES} />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="mb-2 block text-[11px] font-semibold tracking-[0.25em] uppercase text-ink-soft">
                Email
              </label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={INPUT_CLASSES} />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-[11px] font-semibold tracking-[0.25em] uppercase text-ink-soft">
                Tell us about your project <span className="text-flame">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Plot size, location, what you'd like to build..."
                className={`${INPUT_CLASSES} resize-y`}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-8 inline-flex h-12 w-full cursor-pointer items-center justify-center bg-flame px-8 text-[13px] font-semibold tracking-[0.2em] uppercase text-ivory transition-colors hover:bg-flame-deep disabled:cursor-default disabled:opacity-60 sm:w-auto"
            >
              {sending ? 'Sending…' : 'Send Enquiry'}
            </button>
          </form>
        </Reveal>
      </div>

      <div aria-live="polite">
        {toast && (
          <div className="toast-enter fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 bg-ink px-6 py-4 text-sm text-ivory shadow-xl">
            <CheckCircle2 size={20} className="shrink-0 text-flame-bright" />
            Thank you — your enquiry has been received. We'll get back to you shortly.
          </div>
        )}
      </div>
    </section>
  )
}
