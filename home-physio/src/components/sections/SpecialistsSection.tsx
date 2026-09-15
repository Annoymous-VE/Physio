import React from 'react'
import { Award, ShieldCheck, CheckCircle2, Calendar, ArrowRight, Quote } from 'lucide-react'
import { SPECIALISTS } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

interface SpecialistsSectionProps {
  onSelectSpecialist?: (specialistName: string) => void
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ onSelectSpecialist }) => {
  const handleConsultClick = (specialistName: string) => {
    if (onSelectSpecialist) {
      onSelectSpecialist(specialistName)
    }
    const el = document.getElementById('contact-booking')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="specialists" className="py-20 sm:py-28 bg-slate-50/80 border-t border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clinical Specialists"
          title="Senior Chartered Physiotherapists"
          subtitle="All home consultations are conducted exclusively by vetted, HCPC registered, DBS-checked clinical experts with extensive NHS and private experience."
          align="center"
        />

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {SPECIALISTS.map((specialist) => (
            <div
              key={specialist.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group card-lift"
            >
              {/* Image & Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={specialist.imageUrl}
                  alt={specialist.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a reliable clinical photo if network or remote link drops
                    const target = e.target as HTMLImageElement
                    if (!target.src.includes('photo-1559839734-2b71ea197ec2')) {
                      target.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80'
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Registration badge */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-teal-800/90 text-white backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    HCPC Reg
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/90 text-slate-800 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                    <Award className="w-3.5 h-3.5 text-teal-700" />
                    MCSP
                  </span>
                </div>

                {/* Name & Role overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold tracking-tight text-white">{specialist.name}</h3>
                  <p className="text-xs text-teal-200 font-medium mt-0.5">{specialist.role}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Experience & Title */}
                  <div className="border-b border-slate-100 pb-3">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Experience</p>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">{specialist.experience}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {specialist.bio}
                  </p>

                  {/* Specialties tags */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Specialist Areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {specialist.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-teal-50/80 text-teal-800 rounded-lg font-medium border border-teal-100/60"
                        >
                          <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 relative">
                    <Quote className="w-4 h-4 text-teal-600/40 mb-1" />
                    <p className="text-xs italic text-slate-600 leading-relaxed">
                      "{specialist.quote}"
                    </p>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <Button
                    variant="outline"
                    fullWidth
                    size="sm"
                    onClick={() => handleConsultClick(specialist.name)}
                    icon={<Calendar className="w-3.5 h-3.5 text-teal-700" />}
                  >
                    Request Visit with {specialist.name.split(' ')[1] || specialist.name}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust verification strip */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Protected Clinical Standard</p>
              <p className="text-xs text-slate-500">All clinicians undergo enhanced Disclosure and Barring Service (DBS) checks annually.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">Want to discuss your diagnosis first?</span>
            <a
              href="#contact-booking"
              className="text-xs font-bold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 hover-underline"
            >
              Contact Clinicians Directly <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
