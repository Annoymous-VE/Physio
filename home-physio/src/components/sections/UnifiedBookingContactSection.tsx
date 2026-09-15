import React, { useState } from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  AlertCircle
} from 'lucide-react'
import { SERVICES } from '../../data/services'
import { SITE_CONFIG } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

interface UnifiedBookingContactSectionProps {
  selectedServiceId?: string
  preferredSpecialist?: string
}

export const UnifiedBookingContactSection: React.FC<UnifiedBookingContactSectionProps> = ({
  selectedServiceId,
  preferredSpecialist
}) => {
  const [activeTab, setActiveTab] = useState<'book' | 'enquire'>('book')
  
  // Booking Wizard State
  const [step, setStep] = useState<number>(1)
  const [isSubmittingBooking, setIsSubmittingBooking] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  const [bookingData, setBookingData] = useState({
    serviceId: selectedServiceId || 'initial-assessment',
    preferredSpecialist: preferredSpecialist || 'Any Available Specialist',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 12:00)',
    postcode: '',
    address: '',
    fullName: '',
    email: '',
    phone: '',
    symptoms: '',
    acceptedDisclaimer: false
  })

  // Quick Enquiry Form State
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    message: ''
  })
  const [enquirySent, setEnquirySent] = useState(false)
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false)

  const [errors, setErrors] = useState<Record<string, string>>({})

  const [prevSelectedServiceId, setPrevSelectedServiceId] = useState(selectedServiceId)
  const [prevPreferredSpecialist, setPrevPreferredSpecialist] = useState(preferredSpecialist)

  if (selectedServiceId && selectedServiceId !== prevSelectedServiceId) {
    setPrevSelectedServiceId(selectedServiceId)
    setBookingData(prev => ({ ...prev, serviceId: selectedServiceId }))
  }

  if (preferredSpecialist && preferredSpecialist !== prevPreferredSpecialist) {
    setPrevPreferredSpecialist(preferredSpecialist)
    setBookingData(prev => ({ ...prev, preferredSpecialist }))
    setActiveTab('book')
  }

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {}
    if (currentStep === 1) {
      if (!bookingData.serviceId) errs.serviceId = 'Please select a treatment service'
    } else if (currentStep === 2) {
      if (!bookingData.preferredDate) errs.preferredDate = 'Please pick a preferred date'
      if (!bookingData.postcode.trim()) errs.postcode = 'Please enter your UK postcode'
      if (!bookingData.address.trim()) errs.address = 'Please enter your address / locality'
    } else if (currentStep === 3) {
      if (!bookingData.fullName.trim()) errs.fullName = 'Full name is required'
      if (!bookingData.email.trim() || !bookingData.email.includes('@')) errs.email = 'Valid email is required'
      if (!bookingData.phone.trim()) errs.phone = 'Contact telephone is required'
      if (!bookingData.symptoms.trim()) errs.symptoms = 'Please describe symptoms or recovery goals'
      if (!bookingData.acceptedDisclaimer) errs.acceptedDisclaimer = 'Please acknowledge the home visit consultation policy'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleBookingNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1)
    }
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(3)) return
    setIsSubmittingBooking(true)

    setTimeout(() => {
      setIsSubmittingBooking(false)
      setBookingRef(`HP-${Math.floor(100000 + Math.random() * 900000)}`)
      setBookingConfirmed(true)
    }, 800)
  }

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!enquiryData.name || !enquiryData.email || !enquiryData.message) return
    setIsSubmittingEnquiry(true)
    setTimeout(() => {
      setIsSubmittingEnquiry(false)
      setEnquirySent(true)
    }, 600)
  }

  const selectedService = SERVICES.find(s => s.id === bookingData.serviceId) || SERVICES[0]

  return (
    <section id="contact-booking" className="py-20 sm:py-28 bg-white border-t border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Appointment & Contact"
          title="Schedule Your Home Visit"
          subtitle="Fast-track clinical triage. Complete the appointment request below or contact our physiotherapists directly."
          align="center"
        />

        {/* Tab switchers */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
            <button
              type="button"
              onClick={() => setActiveTab('book')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'book'
                  ? 'bg-white text-teal-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-4 h-4 text-teal-700" />
              Book Home Visit
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('enquire')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'enquire'
                  ? 'bg-white text-teal-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Mail className="w-4 h-4 text-teal-700" />
              Direct Enquiry
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Booking Wizard or Enquiry Form */}
          <div className="lg:col-span-7 bg-slate-50/90 rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm">
            {activeTab === 'book' ? (
              <div>
                {!bookingConfirmed ? (
                  <div>
                    {/* Stepper Progress */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-7">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          step >= 1 ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-600'
                        }`}>1</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">Treatment</span>
                      </div>
                      <div className="w-8 sm:w-16 h-0.5 bg-slate-200" />
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          step >= 2 ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-600'
                        }`}>2</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">Time & Area</span>
                      </div>
                      <div className="w-8 sm:w-16 h-0.5 bg-slate-200" />
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          step >= 3 ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-600'
                        }`}>3</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">Details</span>
                      </div>
                    </div>

                    {/* Step 1: Treatment */}
                    {step === 1 && (
                      <div className="space-y-4 animate-fade-in">
                        <h3 className="text-lg font-bold text-slate-900">Select Physiotherapy Service</h3>
                        <p className="text-xs text-slate-500">Choose the consultation type best suited to your symptoms.</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {SERVICES.map((s) => {
                            const isSelected = bookingData.serviceId === s.id
                            return (
                              <button
                                key={s.id}
                                type="button"
                                onClick={() => setBookingData(prev => ({ ...prev, serviceId: s.id }))}
                                className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-white border-teal-700 shadow-md ring-1 ring-teal-700'
                                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                                }`}
                              >
                                <div className="flex justify-between items-start">
                                  <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md">
                                    {s.duration}
                                  </span>
                                  {isSelected && <CheckCircle2 className="w-4 h-4 text-teal-700" />}
                                </div>
                                <h4 className="font-bold text-sm text-slate-900 mt-2 line-clamp-1">{s.title}</h4>
                                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{s.shortDescription}</p>
                              </button>
                            )
                          })}
                        </div>

                        {/* Preferred specialist indicator */}
                        {bookingData.preferredSpecialist && bookingData.preferredSpecialist !== 'Any Available Specialist' && (
                          <div className="bg-teal-50 border border-teal-200/80 rounded-xl p-3 flex items-center justify-between text-xs">
                            <span className="text-teal-900 font-medium">
                              Requested Specialist: <strong>{bookingData.preferredSpecialist}</strong>
                            </span>
                            <button
                              type="button"
                              onClick={() => setBookingData(prev => ({ ...prev, preferredSpecialist: 'Any Available Specialist' }))}
                              className="text-teal-700 hover:underline font-semibold"
                            >
                              Reset
                            </button>
                          </div>
                        )}

                        <div className="pt-4 flex justify-end">
                          <Button
                            variant="primary"
                            size="md"
                            onClick={handleBookingNext}
                            icon={<ArrowRight className="w-4 h-4" />}
                            iconPosition="right"
                          >
                            Continue to Date & Location
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Time & Location */}
                    {step === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <h3 className="text-lg font-bold text-slate-900">Preferred Visit Time & Address</h3>
                        <p className="text-xs text-slate-500">We visit patients Monday through Saturday across our standard radius.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date *</label>
                            <input
                              type="date"
                              value={bookingData.preferredDate}
                              min={new Date().toISOString().split('T')[0]}
                              onChange={(e) => setBookingData(prev => ({ ...prev, preferredDate: e.target.value }))}
                              className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none"
                            />
                            {errors.preferredDate && <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Time Slot Window</label>
                            <select
                              value={bookingData.preferredTime}
                              onChange={(e) => setBookingData(prev => ({ ...prev, preferredTime: e.target.value }))}
                              className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none"
                            >
                              <option value="Morning (09:00 - 12:00)">Morning (09:00 – 12:00)</option>
                              <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 – 16:00)</option>
                              <option value="Late Afternoon / Evening (16:00 - 19:30)">Evening (16:00 – 19:30)</option>
                              <option value="Flexible / First Available">Flexible / First Available</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Postcode *</label>
                            <input
                              type="text"
                              placeholder="e.g. SW1A 1AA"
                              value={bookingData.postcode}
                              onChange={(e) => setBookingData(prev => ({ ...prev, postcode: e.target.value.toUpperCase() }))}
                              className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none uppercase"
                            />
                            {errors.postcode && <p className="text-xs text-red-600 mt-1">{errors.postcode}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Street Address & Town *</label>
                            <input
                              type="text"
                              placeholder="e.g. 14 High Street, Apartment 2"
                              value={bookingData.address}
                              onChange={(e) => setBookingData(prev => ({ ...prev, address: e.target.value }))}
                              className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none"
                            />
                            {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button variant="ghost" size="md" onClick={() => setStep(1)} icon={<ArrowLeft className="w-4 h-4" />}>
                            Back
                          </Button>
                          <Button variant="primary" size="md" onClick={handleBookingNext} icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                            Continue to Patient Info
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Patient Information & Triage */}
                    {step === 3 && (
                      <form onSubmit={handleBookingSubmit} className="space-y-4 animate-fade-in">
                        <h3 className="text-lg font-bold text-slate-900">Patient Details & Symptoms</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                            <input
                              type="text"
                              placeholder="Patient or Carer Name"
                              value={bookingData.fullName}
                              onChange={(e) => setBookingData(prev => ({ ...prev, fullName: e.target.value }))}
                              className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none"
                            />
                            {errors.fullName && <p className="text-xs text-red-600 mt-0.5">{errors.fullName}</p>}
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
                            <input
                              type="email"
                              placeholder="For appointment confirmation"
                              value={bookingData.email}
                              onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none"
                            />
                            {errors.email && <p className="text-xs text-red-600 mt-0.5">{errors.email}</p>}
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Telephone *</label>
                            <input
                              type="tel"
                              placeholder="Mobile or landline"
                              value={bookingData.phone}
                              onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none"
                            />
                            {errors.phone && <p className="text-xs text-red-600 mt-0.5">{errors.phone}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Description of Condition / Symptoms *</label>
                          <textarea
                            rows={3}
                            placeholder="e.g. Lower back stiffness with pain down left leg for 3 weeks, difficult to stand up from armchair..."
                            value={bookingData.symptoms}
                            onChange={(e) => setBookingData(prev => ({ ...prev, symptoms: e.target.value }))}
                            className="w-full text-sm bg-white border border-slate-300 rounded-xl p-3 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none resize-none"
                          />
                          {errors.symptoms && <p className="text-xs text-red-600 mt-0.5">{errors.symptoms}</p>}
                        </div>

                        {/* Disclaimer Checkbox */}
                        <div className="pt-1">
                          <label className="flex items-start gap-2.5 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={bookingData.acceptedDisclaimer}
                              onChange={(e) => setBookingData(prev => ({ ...prev, acceptedDisclaimer: e.target.checked }))}
                              className="mt-1 rounded text-teal-700 focus:ring-teal-700 w-4 h-4 cursor-pointer"
                            />
                            <span className="text-xs text-slate-600 leading-snug">
                              I confirm this request is for a home visit in the service coverage area and understand that an initial clinical confirmation call will precede the visit.
                            </span>
                          </label>
                          {errors.acceptedDisclaimer && <p className="text-xs text-red-600 mt-1">{errors.acceptedDisclaimer}</p>}
                        </div>

                        <div className="pt-4 flex justify-between items-center">
                          <Button variant="ghost" size="md" onClick={() => setStep(2)} icon={<ArrowLeft className="w-4 h-4" />}>
                            Back
                          </Button>
                          <Button
                            variant="primary"
                            size="md"
                            type="submit"
                            disabled={isSubmittingBooking}
                            icon={<CheckCircle2 className="w-4 h-4" />}
                          >
                            {isSubmittingBooking ? 'Submitting Request...' : 'Confirm Appointment Request'}
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                ) : (
                  /* Booking Confirmation Card */
                  <div className="text-center py-8 px-4 animate-scale-in">
                    <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-800 mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full mb-2">
                      Reference #{bookingRef}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">Appointment Request Received</h3>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                      Thank you, <strong>{bookingData.fullName}</strong>. A Chartered Physiotherapist will contact you at <strong>{bookingData.phone}</strong> to confirm your slot for <strong>{selectedService.title}</strong> on {bookingData.preferredDate || 'your selected date'}.
                    </p>
                    <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-left max-w-sm mx-auto text-xs space-y-1 text-slate-600">
                      <p><strong>Service:</strong> {selectedService.title}</p>
                      <p><strong>Preferred Slot:</strong> {bookingData.preferredTime}</p>
                      <p><strong>Postcode:</strong> {bookingData.postcode}</p>
                    </div>
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setBookingConfirmed(false)
                          setStep(1)
                        }}
                      >
                        Submit Another Booking
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Quick Direct Enquiry Form */
              <form onSubmit={handleEnquirySubmit} className="space-y-4 animate-fade-in">
                <h3 className="text-lg font-bold text-slate-900">Direct Message to Physiotherapist</h3>
                <p className="text-xs text-slate-500">Ask any clinical question or inquire about rehabilitation for a family member.</p>
                
                {enquirySent ? (
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center">
                    <CheckCircle2 className="w-8 h-8 text-teal-700 mx-auto mb-2" />
                    <h4 className="font-bold text-slate-900 text-base">Enquiry Sent Successfully</h4>
                    <p className="text-xs text-slate-600 mt-1">We respond to all clinical enquiries within 24 business hours.</p>
                    <button
                      type="button"
                      onClick={() => setEnquirySent(false)}
                      className="mt-4 text-xs font-bold text-teal-800 hover:underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={enquiryData.name}
                          onChange={(e) => setEnquiryData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:border-teal-700"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={enquiryData.email}
                          onChange={(e) => setEnquiryData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:border-teal-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Telephone</label>
                        <input
                          type="tel"
                          value={enquiryData.phone}
                          onChange={(e) => setEnquiryData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:border-teal-700"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Postcode / Area</label>
                        <input
                          type="text"
                          value={enquiryData.postcode}
                          onChange={(e) => setEnquiryData(prev => ({ ...prev, postcode: e.target.value }))}
                          className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 outline-none focus:border-teal-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">How can we help? *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about the condition, hospital discharge, mobility issues, or any questions..."
                        value={enquiryData.message}
                        onChange={(e) => setEnquiryData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full text-sm bg-white border border-slate-300 rounded-xl p-3 outline-none focus:border-teal-700 resize-none"
                      />
                    </div>

                    <Button
                      variant="primary"
                      fullWidth
                      size="md"
                      type="submit"
                      disabled={isSubmittingEnquiry}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmittingEnquiry ? 'Sending...' : 'Send Message'}
                    </Button>
                  </>
                )}
              </form>
            )}
          </div>

          {/* RIGHT: Direct Contact Details & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Call Box */}
            <div className="bg-teal-900 text-white rounded-3xl p-7 shadow-lg relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-teal-700/40 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-200 bg-teal-800/80 px-3 py-1 rounded-full">
                  <Phone className="w-3.5 h-3.5" /> Direct Clinical Inquiries
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight">Speak with a Physiotherapist</h3>
                <p className="text-xs text-teal-100/90 leading-relaxed">
                  Unsure whether home physiotherapy is appropriate? Call us for a free 10-minute clinical triage discussion.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center justify-center gap-2.5 w-full bg-white text-teal-950 font-bold py-3 px-5 rounded-xl text-base hover:bg-teal-50 transition-colors shadow-md"
                  >
                    <Phone className="w-4 h-4 text-teal-800" />
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Practical Contact Info Cards */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 space-y-4 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Enquiries</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold text-slate-900 hover:text-teal-700">
                    {SITE_CONFIG.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Checked continuously during clinic hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Visiting Hours</p>
                  <p className="font-semibold text-slate-900">{SITE_CONFIG.operatingHours.weekdays}</p>
                  <p className="text-xs text-slate-600">{SITE_CONFIG.operatingHours.saturdays}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Primary Service Radius</p>
                  <p className="font-semibold text-slate-900">{SITE_CONFIG.primaryLocation}</p>
                  <p className="text-xs text-slate-500">{SITE_CONFIG.serviceRadius}</p>
                </div>
              </div>
            </div>

            {/* Red Flag & NHS 111 Advisory */}
            <div className="rounded-2xl p-4 bg-amber-50 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Emergency Triage Notice</strong>
                {SITE_CONFIG.operatingHours.emergencyNote}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
