import React from 'react'
import { Stethoscope, Phone, Mail, MapPin, ShieldCheck, ArrowRight, Clock } from 'lucide-react'
import { SITE_CONFIG } from '../../data/site'
import { SERVICES } from '../../data/services'

interface FooterProps {
  onNavigate?: (path: string) => void
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollTo = (hash: string) => {
    if (hash.startsWith('#')) {
      const id = hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        window.history.replaceState(null, '', hash)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-800 flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-teal-200" style={{ width: '18px', height: '18px' }} />
              </div>
              <div>
                <span
                  className="block text-[17px] font-extrabold text-white tracking-tight leading-none"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {SITE_CONFIG.name}
                </span>
                <span className="block text-[10.5px] text-teal-500 font-medium leading-tight mt-0.5">
                  Home-Visit Physiotherapy
                </span>
              </div>
            </div>

            <p className="text-[13.5px] text-slate-500 leading-relaxed max-w-xs">
              {SITE_CONFIG.subtitle}
            </p>

            <div className="space-y-2 text-[12.5px]">
              <div className="flex items-center gap-2 text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                {SITE_CONFIG.credentials.hcpc}
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                {SITE_CONFIG.credentials.csp}
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                {SITE_CONFIG.credentials.dbs}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-300">Services</h4>
            <ul className="space-y-2.5 text-[13px]">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-slate-500 hover:text-teal-400 transition-colors text-left cursor-pointer leading-snug"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('#services')}
                  className="text-teal-500 hover:text-teal-400 text-[12px] flex items-center gap-1 mt-1 cursor-pointer font-medium"
                >
                  All services <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Page Sections */}
          <div className="space-y-4">
            <h4 className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-300">Navigation</h4>
            <ul className="space-y-2.5 text-[13px]">
              {[
                { label: 'Top / Home', hash: '#hero' },
                { label: 'Why Choose Us', hash: '#about' },
                { label: 'Treatments & Care', hash: '#services' },
                { label: 'How It Works', hash: '#how-it-works' },
                { label: 'Clinical Specialists', hash: '#specialists' },
                { label: 'Patient Testimonials', hash: '#testimonials' },
                { label: 'Frequently Asked Questions', hash: '#faq' },
                { label: 'Book Home Visit', hash: '#contact-booking' },
              ].map((item) => (
                <li key={item.hash}>
                  <button
                    onClick={() => scrollTo(item.hash)}
                    className="text-slate-500 hover:text-teal-400 transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-300">Contact & Area</h4>
            <div className="space-y-3 text-[13px]">
              <div className="flex items-start gap-2.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.primaryLocation} & Surrounds</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-500">
                <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-500">
                <Mail className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span className="break-all">{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <div>Mon–Fri: 08:00–19:30</div>
                  <div>Saturday: 09:00–14:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-5 bg-slate-900/50 rounded-2xl border border-slate-900 text-[12px] text-slate-600 leading-relaxed space-y-2">
          <p className="font-semibold text-slate-500">Clinical information notice:</p>
          <p>{SITE_CONFIG.disclaimer}</p>
          <p>Emergency care: In case of acute medical emergencies, call 999 or attend your nearest NHS Emergency Department immediately.</p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-slate-600">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => scrollTo('#hero')} className="hover:text-slate-400 transition-colors cursor-pointer">
              Back to Top ↑
            </button>
            <span className="text-slate-800">·</span>
            <button onClick={() => scrollTo('#faq')} className="hover:text-slate-400 transition-colors cursor-pointer">
              FAQs
            </button>
            <span className="text-slate-800">·</span>
            <button onClick={() => scrollTo('#contact-booking')} className="hover:text-slate-400 transition-colors cursor-pointer">
              Book Visit
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
