import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'
import { SITE_CONFIG } from '../data/site'
import { Button } from '../components/ui/Button'

interface ContactPageProps {
  onNavigate: (path: string) => void
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSent(true)
    }, 600)
  }

  const contactItems = [
    {
      icon: <Phone className="w-5 h-5 text-teal-700" />,
      label: 'Telephone',
      value: SITE_CONFIG.phone,
      sub: 'Direct clinician enquiries',
    },
    {
      icon: <Mail className="w-5 h-5 text-teal-700" />,
      label: 'Email',
      value: SITE_CONFIG.email,
      sub: 'Response within 24 hours',
    },
    {
      icon: <MapPin className="w-5 h-5 text-teal-700" />,
      label: 'Service Area',
      value: `${SITE_CONFIG.primaryLocation} & Surrounding Areas`,
      sub: SITE_CONFIG.serviceRadius,
    },
    {
      icon: <Clock className="w-5 h-5 text-teal-700" />,
      label: 'Visiting Hours',
      value: SITE_CONFIG.operatingHours.weekdays,
      sub: SITE_CONFIG.operatingHours.saturdays,
    },
  ]

  return (
    <div className="pb-0">
      {/* Page header */}
      <section className="bg-white border-b border-slate-100 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="h-px w-5 bg-teal-600/50" />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-700">Get in Touch</span>
            <span className="h-px w-5 bg-teal-600/50" />
          </div>
          <h1
            className="text-[2rem] sm:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Contact your home physiotherapist
          </h1>
          <p className="mt-4 text-[16px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Have a question about home visits for yourself or a relative? Call, email, or send an enquiry using the form below.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-slate-50/70 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* LEFT: Contact info */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h2
                  className="text-[1.35rem] font-bold text-slate-900 mb-1.5"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Direct contact information
                </h2>
                <p className="text-[14px] text-slate-500 leading-relaxed">
                  Reach us by phone or email, or use the online form.
                </p>
              </div>

              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[14.5px] font-semibold text-slate-900 leading-snug">{item.value}</p>
                      <p className="text-[12.5px] text-slate-500 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency note */}
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/60 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[12.5px] text-amber-800 leading-relaxed">
                  <strong>Medical emergencies:</strong> Call <strong>999</strong> or <strong>NHS 111</strong>. Home physiotherapy is a scheduled, non-emergency service.
                </p>
              </div>

              {/* Direct booking */}
              <div className="p-5 bg-teal-700 rounded-2xl text-white">
                <h3 className="text-[15px] font-bold mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Ready to book?
                </h3>
                <p className="text-[13px] text-teal-100 mb-4">
                  Use our online booking wizard to choose a service and request an appointment time.
                </p>
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => onNavigate('/book')}
                  icon={<Calendar className="w-4 h-4" />}
                  className="bg-white text-teal-800 hover:bg-teal-50 border-white"
                >
                  Go to Booking Wizard
                </Button>
              </div>
            </div>

            {/* RIGHT: Premium enquiry form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="p-7 sm:p-10">
                  {!isSent ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2
                          className="text-[1.35rem] font-bold text-slate-900 mb-1"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          Send an enquiry or callback request
                        </h2>
                        <p className="text-[14px] text-slate-500">
                          Fill in the details below and we'll get back to you promptly.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Full name */}
                        <div className="space-y-1.5">
                          <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-600">
                            Full Name <span className="text-teal-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Robert Walker"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:bg-white transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                          <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-600">
                            Email Address <span className="text-teal-600">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. robert@email.co.uk"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:bg-white transition-all"
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5">
                          <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-600">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="e.g. 07987 654321"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:bg-white transition-all"
                          />
                        </div>

                        {/* Postcode */}
                        <div className="space-y-1.5">
                          <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-600">
                            Your Postcode / Town
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. AB1 2CD"
                            value={formData.postcode}
                            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-600">
                          Your Message / Enquiry <span className="text-teal-600">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Please let us know how we can help, or describe your condition and any questions you have…"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:bg-white transition-all resize-none"
                        />
                      </div>

                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          isLoading={isSubmitting}
                          icon={<Send className="w-4 h-4" />}
                          iconPosition="left"
                        >
                          Send Enquiry
                        </Button>
                        <p className="text-[12px] text-slate-400">
                          * Required fields. We'll respond within 24 hours.
                        </p>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-12 space-y-5 animate-fade-in">
                      <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto border border-teal-100">
                        <CheckCircle2 className="w-8 h-8 text-teal-600" />
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold text-slate-900 mb-2"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          Enquiry received
                        </h3>
                        <p className="text-[14px] text-slate-500 max-w-sm mx-auto">
                          Thank you, <strong className="text-slate-700">{formData.name}</strong>. Your enquiry has been logged in this demo prototype. In a live environment, a response would follow within 24 hours.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setIsSent(false)
                            setFormData({ name: '', email: '', phone: '', postcode: '', message: '' })
                          }}
                        >
                          Send Another Enquiry
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => onNavigate('/book')}
                          icon={<ArrowRight className="w-3.5 h-3.5" />}
                          iconPosition="right"
                        >
                          Book an Appointment
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
