import React from 'react'
import { Star, Quote, CheckCircle2 } from 'lucide-react'
import { TESTIMONIALS_DATA } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'

export const TestimonialsSection: React.FC = () => {
  // Double the list for seamless infinite loop from left to right
  const displayList = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA]

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-950 text-white scroll-mt-20 overflow-hidden relative">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          light
          eyebrow="Patient Stories"
          title="Real-World Rehabilitation Outcomes"
          subtitle="Demonstration patient testimonials reflecting genuine home recovery journeys across London & Surrey."
          align="center"
        />
      </div>

      {/* Full-width sliding marquee container */}
      <div className="relative mt-12 w-full overflow-hidden py-4">
        {/* Left and Right edge fade gradients for seamless visual aesthetic */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20" />

        {/* Moving track from left to right */}
        <div 
          className="animate-slide-ltr flex gap-6 items-stretch"
          style={{ animationDuration: displayList.length > 12 ? '65s' : '45s' }}
        >
          {displayList.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[350px] sm:w-[410px] shrink-0 bg-white/[0.04] rounded-3xl p-7 border border-white/10 flex flex-col justify-between hover:bg-white/[0.08] hover:border-teal-500/40 transition-all duration-300 shadow-xl backdrop-blur-xs group"
            >
              <div className="space-y-4">
                {/* Header: Rating + Quote symbol */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <Quote className="w-6 h-6 text-teal-400/50 group-hover:text-teal-400 transition-colors" />

                {/* Testimonial Quote text */}
                <p className="text-sm text-slate-200 italic leading-relaxed line-clamp-4">
                  "{t.quote}"
                </p>

                {/* Outcome badge if available */}
                {t.outcome && (
                  <div className="flex items-center gap-2 pt-1 text-xs text-emerald-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t.outcome}</span>
                  </div>
                )}
              </div>

              {/* Patient / Family details footer */}
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Initials Avatar */}
                  <div className="w-9 h-9 rounded-full bg-teal-950 border border-teal-500/40 flex items-center justify-center text-teal-300 font-semibold text-xs shrink-0">
                    {t.avatarInitials || t.clientName.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm leading-snug">{t.clientName}</p>
                    <p className="text-xs text-teal-400 font-medium">{t.conditionType}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t.location}</p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="mt-3 text-[10px] text-slate-500 italic">
                ℹ {t.isSampleDisclaimer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
