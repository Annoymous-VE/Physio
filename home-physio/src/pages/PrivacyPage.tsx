import React from 'react'
import { AlertCircle } from 'lucide-react'
import { SITE_CONFIG } from '../data/site'
import { Card } from '../components/ui/Card'

interface PrivacyPageProps {
  onNavigate?: (path: string) => void
}

export const PrivacyPage: React.FC<PrivacyPageProps> = () => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* HERO */}
      <section className="bg-gradient-to-b from-teal-900/10 via-slate-50 to-white pt-12 pb-12 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100/80 text-teal-900 border border-teal-200 mb-3">
            Data Protection & GDPR
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy (Placeholder Template)
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            UK General Data Protection Regulation (UK GDPR) & Data Protection Act 2018 informational policy.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        {/* Important Demo Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
            <span>Client Demonstration Notice — Policy Requires Client Legal Review</span>
          </div>
          <p>
            This privacy policy is a structured template provided for demonstration purposes. Before deploying this website for live clinical practice with actual patients, the practice owner must customize this policy to reflect their specific data controller registration (Information Commissioner's Office - ICO), clinical record retention procedures, and practice software integrations.
          </p>
          <p className="font-semibold">
            In this demo version, no form data is transmitted or stored on external servers.
          </p>
        </div>

        <Card padding="lg" className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Who We Are</h2>
            <p>
              <strong>{SITE_CONFIG.name}</strong> operates as an independent private physiotherapy practice providing home-visit clinical services in the UK. For the purposes of the UK GDPR and the Data Protection Act 2018, the clinician operates as the Data Controller responsible for your personal and healthcare information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. What Information We Collect</h2>
            <p className="mb-2">When you request a home visit or contact our practice, we may collect:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li><strong>Contact Information:</strong> Full name, telephone number, email address, home address, and postcode.</li>
              <li><strong>Clinical Information:</strong> Medical history, current symptoms, details of surgeries, medications, and rehabilitation goals.</li>
              <li><strong>Communication History:</strong> Records of email inquiries, appointment booking requests, and consent declarations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Lawful Basis for Processing Special Category Data</h2>
            <p>
              Under UK GDPR Article 6 & Article 9, health data is categorized as "Special Category Data". We process this data under the legal basis of the provision of health or social care and treatment by healthcare professionals bound by professional duties of confidentiality (HCPC & CSP).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Clinical Record Retention</h2>
            <p>
              In accordance with UK Chartered Society of Physiotherapy (CSP) guidelines and the NHS Records Management Code of Practice, clinical physiotherapy records for adult patients must be securely retained for a minimum of 8 years following the conclusion of treatment (or until age 25 for paediatric patients).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Your Legal Rights</h2>
            <p className="mb-2">Under data protection laws, you have rights including:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Your right of access (Subject Access Request) to obtain copies of your clinical treatment notes.</li>
              <li>Your right to rectification of inaccurate personal details.</li>
              <li>Your right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-teal-700 underline">ico.org.uk</a>.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Contacting the Practice</h2>
            <p>
              For any questions regarding your data privacy or to update your contact details, please contact us at <strong>{SITE_CONFIG.email}</strong> or <strong>{SITE_CONFIG.phone}</strong>.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
