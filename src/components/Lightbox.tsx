import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({
  images,
  title,
  index,
  onClose,
  onIndexChange,
}: {
  images: string[]
  title: string
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}) {
  const prev = () => onIndexChange((index - 1 + images.length) % images.length)
  const next = () => onIndexChange((index + 1) % images.length)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [index])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 px-4 py-16"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-6 right-6 flex h-11 w-11 cursor-pointer items-center justify-center text-ivory/80 transition-colors hover:text-flame-bright"
      >
        <X size={28} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        aria-label="Previous image"
        className="absolute left-2 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center text-ivory/80 transition-colors hover:text-flame-bright sm:left-6"
      >
        <ChevronLeft size={32} />
      </button>

      <figure
        className="flex max-h-full max-w-5xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`${title} — photo ${index + 1} of ${images.length}`}
          className="max-h-[80vh] w-auto max-w-full object-contain"
        />
        <figcaption className="text-[11px] tracking-[0.25em] uppercase text-ivory/60">
          {title} · {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        aria-label="Next image"
        className="absolute right-2 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center text-ivory/80 transition-colors hover:text-flame-bright sm:right-6"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  )
}
