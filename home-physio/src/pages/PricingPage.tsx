import React from 'react'
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Receipt,
} from 'lucide-react'
import { PRICING_TIERS, PRICING_NOTES } from '../data/pricing'
import { Button } from '../components/ui/Button'

interface PricingPageProps {
  onNavigate: (path: string) => void
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-0">
      {/* Page header */}
      <section className="bg-white border-b border-slate-100 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="h-px w-5 bg-teal-600/50" />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-700">Transparent Investment</span>
            <span className="h-px w-5 bg-teal-600/50" />
          </div>
          <h1
            className="text-[2rem] sm:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Home visit pricing & fees
          </h1>
          <p className="mt-4 text-[16px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Clear, honest pricing with no hidden facility charges. Every appointment includes full one-to-one clinical care and standard travel.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[12.5px] font-semibold">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            {PRICING_NOTES.label}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-slate-50/70 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col ${
                  tier.popular
                    ? 'bg-teal-700 text-white shadow-2xl shadow-teal-900/25 ring-1 ring-teal-600'
                    : 'bg-white border border-slate-200/80 shadow-sm'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-3.5 rounded-full tracking-widest uppercase shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <span className={`text-[11px] font-semibold tracking-wider uppercase ${tier.popular ? 'text-teal-200' : 'text-teal-700'}`}>
                    {tier.duration}
                  </span>

                  <h2
                    className={`mt-2 text-xl font-bold ${tier.popular ? 'text-white' : 'text-slate-900'}`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {tier.name}
                  </h2>

                  <div className="mt-4 mb-1 flex items-baseline gap-2">
                    <span className={`text-4xl font-extrabold tracking-tight ${tier.popular ? 'text-white' : 'text-slate-900'}`}>
                      {tier.price}
                    </span>
                    <span className={`text-xs ${tier.popular ? 'text-teal-200' : 'text-slate-400'}`}>/ session [placeholder]</span>
                  </div>

                  <p className={`text-[13.5px] mb-4 leading-relaxed ${tier.popular ? 'text-teal-100' : 'text-slate-500'}`}>
                    {tier.description}
                  </p>

                  <div className={`text-[12.5px] px-3 py-2 rounded-xl mb-5 ${tier.popular ? 'bg-teal-600/50 text-teal-100' : 'bg-slate-50 text-slate-600'}`}>
                    <strong className={tier.popular ? 'text-teal-200' : 'text-slate-700'}>Recommended for: </strong>
                    {tier.recommendedFor}
                  </div>

                  <div className={`space-y-2.5 border-t pt-5 mb-6 flex-1 ${tier.popular ? 'border-teal-600/50' : 'border-slate-100'}`}>
                    <p className={`text-[11px] font-semibold uppercase tracking-wider mb-3 ${tier.popular ? 'text-teal-200' : 'text-slate-500'}`}>
                      What's included:
                    </p>
                    {tier.includes.map((item, idx) => (
                      <div key={idx} className={`flex items-start gap-2 text-[13px] ${tier.popular ? 'text-teal-100' : 'text-slate-600'}`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? 'text-teal-300' : 'text-teal-600'}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={tier.popular ? 'secondary' : 'outline'}
                    fullWidth
                    size="lg"
                    onClick={() => onNavigate('/book')}
                    icon={<Calendar className="w-4 h-4" />}
                    className={tier.popular ? 'bg-white text-teal-800 hover:bg-teal-50 border-white' : ''}
                  >
                    Book {tier.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & policies */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Payment methods */}
            <div className="p-7 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Payment methods & travel
                </h3>
              </div>
              <div className="space-y-3 text-[13.5px] text-slate-500 leading-relaxed">
                <p>
                  <strong className="text-slate-700">Travel area:</strong> {PRICING_NOTES.travelPolicy}
                </p>
                <div>
                  <strong className="text-slate-700">Accepted payment:</strong>
                  <ul className="mt-2 space-y-1.5">
                    {PRICING_NOTES.paymentMethods.map((method, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600">
                        <span className="text-teal-600 font-bold leading-snug">·</span>
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="pt-2 border-t border-slate-100">
                  <strong className="text-slate-700">Cancellation:</strong> {PRICING_NOTES.cancellationPolicy}
                </p>
              </div>
            </div>

            {/* Insurance */}
            <div className="p-7 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Private health insurance & receipts
                </h3>
              </div>
              <div className="space-y-3 text-[13.5px] text-slate-500 leading-relaxed">
                <p>{PRICING_NOTES.insuranceInfo}</p>
                <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-100 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-teal-800">
                    All invoices include official HCPC & CSP registration numbers for straightforward claims processing.
                  </p>
                </div>
                <p className="text-[12.5px] text-slate-400">
                  Patients settle directly with the practice on the day and submit receipts to their insurer for reimbursement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-teal-800 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Ready to book your home visit?
          </h2>
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
