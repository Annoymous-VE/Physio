import React from 'react'
import {
  ShieldCheck,
  Award,
  BookOpen,
  HeartHandshake,
  Stethoscope,
  GraduationCap,
  Calendar,
  Quote,
  ArrowRight,
} from 'lucide-react'
import { SITE_CONFIG } from '../data/site'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'

interface AboutPageProps {
  onNavigate: (path: string) => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-0">
      {/* ============================================================
          1. HERO — EDITORIAL PORTRAIT + BIO
      ============================================================ */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">

            {/* LEFT: Portrait image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-teal-50 rounded-full opacity-60 blur-2xl pointer-events-none" />
                <div className="relative img-hover-zoom rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                    alt="Professional physiotherapist in clinical attire, representing the lead clinician"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    width={800}
                    height={1067}
                  />
                </div>

                {/* Credential badges overlay */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-slate-100/80">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-teal-50 text-teal-800 border border-teal-200/60">
                      HCPC Registered
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/60">
                      CSP Chartered Member
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                      Enhanced DBS Cleared
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-[13px] font-bold text-slate-900">[Lead Physiotherapist Name]</p>
                    <p className="text-[11.5px] text-teal-700 font-medium">Chartered Physiotherapist · MCSP, HCPC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-teal-600/50" />
                <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-700">About Your Physiotherapist</span>
              </div>

              <h1
                className="text-[2rem] sm:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Dedicated one-to-one physiotherapy, focused on your independence.
              </h1>

              <div className="space-y-4 text-[16px] text-slate-500 leading-relaxed">
                <p>
                  Welcome to <strong className="text-slate-700">{SITE_CONFIG.name}</strong>. I provide dedicated home-visit physiotherapy throughout{' '}
                  <strong className="text-slate-700">{SITE_CONFIG.primaryLocation}</strong> and surrounding regions, helping people recover from joint pain, complex surgeries, sports injuries, and mobility restrictions.
                </p>
                <p>
                  With extensive experience across NHS hospital trusts and private musculoskeletal clinics, I recognised that many individuals who need physiotherapy most find travelling to a clinic physically exhausting, stressful, or impossible.
                </p>
                <p>
                  By visiting you at home, I eliminate travel strain and evaluate how you move in your genuine everyday environment — your stairs, furniture, bed transfers, and garden steps.
                </p>
              </div>

              {/* Pull quote */}
              <div className="relative my-6 pl-6 border-l-2 border-teal-200">
                <Quote className="w-6 h-6 text-teal-200 absolute -left-3.5 -top-1" />
                <p className="text-[17px] italic text-slate-600 leading-relaxed font-medium">
                  "Treatment designed around your life, your home and your goals."
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate('/book')}
                  icon={<Calendar className="w-5 h-5" />}
                >
                  Book an Initial Assessment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate('/home-visits')}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  How Home Visits Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. PHILOSOPHY OF CARE
      ============================================================ */}
      <section className="bg-slate-50/70 py-16 sm:py-24 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Clinical Philosophy"
            title="A patient-centred, dignified approach"
            subtitle="Every rehabilitation journey is tailored to your individual values, daily routine, and personal goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <HeartHandshake className="w-6 h-6 text-teal-700" />,
                title: 'Unhurried & Compassionate',
                desc: 'Appointments are never rushed. We take time to listen, understand your pain triggers, and proceed at a pace that feels safe and comfortable.',
              },
              {
                icon: <BookOpen className="w-6 h-6 text-teal-700" />,
                title: 'Evidence-Based Treatment',
                desc: 'All techniques, manual therapy, and exercise prescriptions adhere to current NICE guidelines and best available clinical evidence.',
              },
              {
                icon: <Stethoscope className="w-6 h-6 text-teal-700" />,
                title: 'Empowerment & Self-Management',
                desc: 'Beyond hands-on relief, the primary objective is giving you the tools and confidence to maintain long-term independence.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. CREDENTIALS & QUALIFICATIONS
      ============================================================ */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Credentials & Professional Standards"
            title="Registered healthcare professional"
            subtitle="Regulated by UK statutory bodies with full clinical indemnity insurance and enhanced DBS verification."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <GraduationCap className="w-5 h-5 text-teal-700" />,
                label: 'Academic Degree',
                highlight: 'BSc (Hons) Physiotherapy',
                sub: '[University Placeholder, UK]',
                desc: 'Comprehensive 3-year clinical degree covering musculoskeletal, neurological, and cardiorespiratory therapy.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-teal-700" />,
                label: 'HCPC Statutory Register',
                highlight: 'HCPC Registered',
                sub: '[Registration No. Placeholder]',
                desc: 'Ensures UK practitioners meet strict national standards of proficiency and professional conduct.',
              },
              {
                icon: <Award className="w-5 h-5 text-teal-700" />,
                label: 'Professional Society',
                highlight: 'Chartered Physiotherapist',
                sub: 'Member of the CSP (MCSP)',
                desc: 'Member of the Chartered Society of Physiotherapy, the professional body for UK physiotherapists.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-teal-700" />,
                label: 'Vetting & Insurance',
                highlight: 'Enhanced DBS Cleared',
                sub: 'Full Clinical Indemnity Insurance',
                desc: 'Complete background checks and professional indemnity cover for visiting patients in private residences.',
              },
            ].map((cred, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-200/80 bg-white">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  {cred.icon}
                </div>
                <p className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-400 mb-1">{cred.label}</p>
                <h4 className="text-[15px] font-bold text-slate-900 leading-snug" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {cred.highlight}
                </h4>
                <p className="text-[12px] text-teal-700 font-medium mt-0.5">{cred.sub}</p>
                <p className="text-[13px] text-slate-500 leading-relaxed mt-3">{cred.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-[12px] text-slate-400 text-center">
            ℹ Note for practice owner: Specific degree titles, universities, and registration numbers can be updated in{' '}
            <code className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600">src/data/site.ts</code>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-teal-800 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Ready for professional physiotherapy at home?
          </h2>
          <p className="text-teal-100/80 text-[15px] mb-7 max-w-lg mx-auto">
            Book an initial home-visit assessment and take the first step towards your recovery.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('/book')}
            icon={<Calendar className="w-5 h-5" />}
            className="bg-white text-teal-800 hover:bg-teal-50 border-white"
          >
            Book an Appointment
          </Button>
        </div>
      </section>
    </div>
  )
}
