import React from 'react'
import { Card } from '../components/ui/Card'

interface CookiesPageProps {
  onNavigate?: (path: string) => void
}

export const CookiesPage: React.FC<CookiesPageProps> = () => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* HERO */}
      <section className="bg-gradient-to-b from-teal-900/10 via-slate-50 to-white pt-12 pb-12 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100/80 text-teal-900 border border-teal-200 mb-3">
            Website Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            How we use cookies to ensure a secure, fast, and accessible browsing experience.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <Card padding="lg" className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your computer or mobile device when you browse websites. They help the site remember your preferences, keep navigation fast, and enable interactive features such as our Area Postcode Checker and Booking Wizard.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. How We Use Cookies on This Website</h2>
            <p className="mb-3">
              This website prioritizes patient privacy. In this demo version, only strictly necessary technical mechanisms are utilized:
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">Essential / Technical State</span>
                <p className="text-slate-600">Remembers your current navigation step in the booking wizard and active filters.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">No Invasive Third-Party Advertising Trackers</span>
                <p className="text-slate-600">We do not sell data to third-party ad exchanges or run behavioral marketing cookies on this clinical website.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Managing Your Browser Cookie Settings</h2>
            <p>
              You can choose to disable or delete cookies via your browser settings (Chrome, Safari, Edge, Firefox). However, disabling essential cookies may impact certain interactive tools such as form progression.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Updates to This Cookie Policy</h2>
            <p>
              If our practice adds website analytics (e.g., privacy-friendly Google Analytics or Plausible Analytics) in production, this policy will be updated with an explicit cookie consent preference banner.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
