import React, { useState } from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react'
import { SERVICES } from '../data/services'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

interface BookingPageProps {
  onNavigate: (path: string) => void
  initialServiceId?: string
}

export const BookingPage: React.FC<BookingPageProps> = ({ onNavigate, initialServiceId }) => {
  const [step, setStep] = useState<number>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  // Form state
  const [formData, setFormData] = useState({
    serviceId: initialServiceId || 'initial-assessment',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 12:00)',
    postcode: '',
    address: '',
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'Phone Call',
    conditionReason: '',
    hasHadSurgery: 'no',
    acceptedDisclaimer: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})


  const selectedService = SERVICES.find(s => s.id === formData.serviceId) || SERVICES[0]

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.serviceId) errs.serviceId = 'Please choose a service'
    } else if (currentStep === 2) {
      if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date'
      if (!formData.postcode.trim()) errs.postcode = 'Please enter your UK postcode'
      if (!formData.address.trim()) errs.address = 'Please enter your street address / town'
    } else if (currentStep === 3) {
      if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name'
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please enter a valid email address'
      if (!formData.phone.trim()) errs.phone = 'Please enter your contact phone number'
      if (!formData.conditionReason.trim()) errs.conditionReason = 'Please describe your main symptoms or reason for booking'
      if (!formData.acceptedDisclaimer) errs.acceptedDisclaimer = 'Please confirm you understand this is a home visit inquiry'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1)
      window.scrollTo({ top: 180, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1))
    window.scrollTo({ top: 180, behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(3)) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      const randomRef = `HP-${Math.floor(100000 + Math.random() * 900000)}`
      setBookingRef(randomRef)
      setIsConfirmed(true)
      window.scrollTo({ top: 100, behavior: 'smooth' })
    }, 700)
  }

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* HERO HEADER */}
      <section className="bg-gradient-to-b from-teal-900/10 via-slate-50 to-white pt-12 pb-12 border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100/80 text-teal-900 border border-teal-200 mb-3">
            Home Appointment Request
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book Your Home Visit Consultation
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Complete the 3-step request below. We will confirm your visiting slot and clinician arrival details.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isConfirmed ? (
          <div className="space-y-8">
            {/* STEP PROGRESS INDICATOR */}
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-slate-200 z-0"></div>
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-teal-700 z-0 transition-all duration-300"
                style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
              ></div>

              {/* Step 1 */}
              <div className="relative z-10 text-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mx-auto transition-all ${
                    step >= 1 ? 'bg-teal-700 text-white ring-4 ring-teal-100' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  1
                </div>
                <span className="text-[11px] font-semibold text-slate-700 mt-1 block">Service</span>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 text-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mx-auto transition-all ${
                    step >= 2 ? 'bg-teal-700 text-white ring-4 ring-teal-100' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  2
                </div>
                <span className="text-[11px] font-semibold text-slate-700 mt-1 block">Date & Area</span>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 text-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mx-auto transition-all ${
                    step >= 3 ? 'bg-teal-700 text-white ring-4 ring-teal-100' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  3
                </div>
                <span className="text-[11px] font-semibold text-slate-700 mt-1 block">Your Details</span>
              </div>
            </div>

            {/* FORM CONTAINER */}
            <Card padding="lg" className="shadow-lg border-slate-200">
              {/* STEP 1: SERVICE SELECTION */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Step 1: Choose Your Home Physiotherapy Service</h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Select the consultation format that matches your condition.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {SERVICES.map((s) => (
                      <label
                        key={s.id}
                        className={`p-4 rounded-xl border-2 flex items-start gap-4 cursor-pointer transition-all ${
                          formData.serviceId === s.id
                            ? 'border-teal-700 bg-teal-50/70 ring-2 ring-teal-600/10'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="serviceId"
                          value={s.id}
                          checked={formData.serviceId === s.id}
                          onChange={() => setFormData({ ...formData, serviceId: s.id })}
                          className="mt-1 text-teal-700 focus:ring-teal-500 h-4 w-4"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="font-bold text-slate-900 text-sm sm:text-base">{s.title}</span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-teal-900">
                              {s.duration}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                            {s.shortDescription}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button
                      type="button"
                      variant="primary"
                      size="lg"
                      onClick={handleNext}
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Next: Choose Date & Location
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2: DATE & ADDRESS */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Step 2: Preferred Date, Time & Home Address</h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Tell us where and when you would like the physiotherapist to visit.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-xs text-rose-600 mt-1">{errors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Time of Day *
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white"
                        >
                          <option value="Morning (08:30 - 12:00)">Morning (08:30 – 12:00)</option>
                          <option value="Early Afternoon (12:00 - 15:00)">Early Afternoon (12:00 – 15:00)</option>
                          <option value="Late Afternoon / Evening (15:00 - 19:30)">Late Afternoon / Evening (15:00 – 19:30)</option>
                          <option value="Saturday Morning (09:00 - 13:00)">Saturday Morning (09:00 – 13:00)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      UK Postcode *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. AB1 2CD or SW1A 1AA"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm uppercase"
                      />
                    </div>
                    {errors.postcode && (
                      <p className="text-xs text-rose-600 mt-1">{errors.postcode}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Home Address / Access Instructions *
                    </label>
                    <textarea
                      rows={2}
                      placeholder="House number/name, street name, town, and any parking/intercom notes..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                    {errors.address && (
                      <p className="text-xs text-rose-600 mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={handleBack}
                      icon={<ArrowLeft className="w-4 h-4" />}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      size="lg"
                      onClick={handleNext}
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Next: Patient Details
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3: PATIENT DETAILS & SUBMIT */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Step 3: Patient Information & Condition Details</h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Please provide contact details and a brief outline of the problem.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Patient Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="e.g. Jane Smith"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        />
                      </div>
                      {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          placeholder="e.g. 07123 456789"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          placeholder="e.g. jane.smith@email.co.uk"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        />
                      </div>
                      {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        value={formData.contactMethod}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white"
                      >
                        <option value="Phone Call">Phone Call (Recommended)</option>
                        <option value="Email">Email</option>
                        <option value="SMS / WhatsApp">SMS Message</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Reason for Appointment & Symptoms *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what pain, stiffness, recent surgery, or mobility difficulty you are experiencing..."
                      value={formData.conditionReason}
                      onChange={(e) => setFormData({ ...formData, conditionReason: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                    {errors.conditionReason && <p className="text-xs text-rose-600 mt-1">{errors.conditionReason}</p>}
                  </div>

                  {/* Booking Summary Box */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
                    <div className="font-bold text-slate-900 text-sm mb-1">Appointment Summary:</div>
                    <div><strong>Service:</strong> {selectedService.title} ({selectedService.duration})</div>
                    <div><strong>Preferred Time:</strong> {formData.preferredDate || 'Date to be chosen'}, {formData.preferredTime}</div>
                    <div><strong>Address:</strong> {formData.address || 'Address pending'}, {formData.postcode}</div>
                  </div>

                  {/* Consent & Demo Disclaimer Checkbox */}
                  <div className="space-y-2 pt-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.acceptedDisclaimer}
                        onChange={(e) => setFormData({ ...formData, acceptedDisclaimer: e.target.checked })}
                        className="mt-0.5 h-4 w-4 rounded text-teal-700 focus:ring-teal-500 border-slate-300"
                      />
                      <span className="text-xs text-slate-600 leading-normal">
                        I understand this is a home visit inquiry. The clinic will confirm appointment availability and clinician arrival schedule prior to the visit.
                      </span>
                    </label>
                    {errors.acceptedDisclaimer && (
                      <p className="text-xs text-rose-600">{errors.acceptedDisclaimer}</p>
                    )}
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={handleBack}
                      icon={<ArrowLeft className="w-4 h-4" />}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      icon={<CheckCircle2 className="w-4 h-4" />}
                      iconPosition="left"
                    >
                      Submit Appointment Request
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        ) : (
          /* POLISHED CONFIRMATION STATE */
          <div className="animate-fade-in space-y-6">
            <Card padding="lg" className="border-2 border-emerald-500/80 shadow-xl text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Request Received
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
                  Thank You, {formData.fullName || 'Patient'}!
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-lg mx-auto leading-relaxed">
                  Your appointment request has been successfully recorded.
                </p>
              </div>

              {/* Reference box */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-teal-800">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Service:</span>
                  <span className="font-semibold text-slate-900">{selectedService.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Slot:</span>
                  <span className="font-semibold text-slate-900">{formData.preferredDate} ({formData.preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-semibold text-slate-900">{formData.postcode}</span>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="p-4 bg-teal-50/70 rounded-2xl border border-teal-200 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
                <h4 className="font-bold text-teal-950 text-sm">What Happens Next:</h4>
                <ul className="space-y-1 list-disc list-inside text-slate-700">
                  <li>Our clinician reviews your request and travel schedule.</li>
                  <li>We contact you via <strong>{formData.contactMethod}</strong> ({formData.phone}) to confirm the exact visiting time.</li>
                  <li>A confirmation email with preparatory instructions has been simulated.</li>
                </ul>
              </div>

              {/* Demo Mode Notice */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 max-w-md mx-auto font-mono">
                ℹ️ <strong>Client Demo Notice:</strong> This demo form simulates the full patient booking journey without sending external emails. In production, this connects to your CRM, calendar, or email system.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('/')}
                >
                  Return to Homepage
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setIsConfirmed(false)
                    setStep(1)
                  }}
                >
                  Book Another Session
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
