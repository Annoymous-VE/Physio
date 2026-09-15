import React, { useState } from 'react'
import {
  Stethoscope,
  Activity,
  HeartPulse,
  UserCheck,
  ShieldAlert,
  Trophy,
  Footprints,
  Brain,
  CheckCircle2,
  Clock,
  Briefcase,
  ArrowRight
} from 'lucide-react'
import { SERVICES } from '../data/services'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

interface ServicesPageProps {
  onNavigate: (path: string, serviceId?: string) => void
  selectedServiceId?: string
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6 text-teal-700" />,
  Activity: <Activity className="w-6 h-6 text-teal-700" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-teal-700" />,
  UserCheck: <UserCheck className="w-6 h-6 text-teal-700" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-teal-700" />,
  Trophy: <Trophy className="w-6 h-6 text-teal-700" />,
  Footprints: <Footprints className="w-6 h-6 text-teal-700" />,
  Brain: <Brain className="w-6 h-6 text-teal-700" />
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [modalServiceId, setModalServiceId] = useState<string | null>(selectedServiceId || null)

  const activeModalService = modalServiceId
    ? SERVICES.find(s => s.id === modalServiceId) || null
    : null


  const filteredServices = activeTab === 'all'
    ? SERVICES
    : activeTab === 'msk'
    ? SERVICES.filter(s => ['initial-assessment', 'msk-physiotherapy', 'back-neck-pain', 'sports-injury'].includes(s.id))
    : activeTab === 'rehab'
    ? SERVICES.filter(s => ['post-op-rehab', 'older-adult-physio', 'falls-prevention', 'neurological-physio'].includes(s.id))
    : SERVICES

  return (
    <div className="pb-0">
      {/* Page header */}
      <section className="bg-white border-b border-slate-100 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="h-px w-5 bg-teal-600/50" />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-700">Clinical Home Services</span>
            <span className="h-px w-5 bg-teal-600/50" />
          </div>
          <h1
            className="text-[2rem] sm:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Specialist physiotherapy in your home
          </h1>
          <p className="mt-4 text-[16px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            All equipment, diagnostic testing, hands-on treatment, and rehab progression brought directly to your door across [Primary Town/City].
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Services ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveTab('msk')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'msk'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Musculoskeletal & Pain
            </button>
            <button
              onClick={() => setActiveTab('rehab')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'rehab'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Post-Op & Mobility Care
            </button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES DETAILED GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              padding="lg"
              className="flex flex-col justify-between border-slate-200 hover:border-teal-300 transition-all shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0">
                    {serviceIconMap[service.iconName] || <Stethoscope className="w-6 h-6" />}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {service.duration}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 font-bold">
                      {service.pricePlaceholder}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Key Benefits Checklist */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Treatment Highlights:
                  </h4>
                  <div className="space-y-1.5">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment Brought */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2 text-xs text-slate-600">
                  <Briefcase className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Equipment brought: </span>
                    {service.equipmentProvided.join(', ')}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Button
                  variant="primary"
                  fullWidth
                  size="md"
                  onClick={() => onNavigate('/book', service.id)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Book This Service
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  size="md"
                  onClick={() => setModalServiceId(service.id)}
                >
                  View Full Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. DETAIL MODAL (WHEN A SERVICE IS CLICKED) */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
                  {serviceIconMap[activeModalService.iconName] || <Stethoscope className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{activeModalService.title}</h3>
                  <p className="text-xs text-teal-800 font-semibold">{activeModalService.duration} • Home Visit Session</p>
                </div>
              </div>
              <button
                onClick={() => setModalServiceId(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeModalService.fullDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900">Who is this recommended for?</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {activeModalService.whoIsItFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900">What to expect during your home visit:</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {activeModalService.whatToExpect.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                fullWidth
                size="lg"
                onClick={() => {
                  const sId = activeModalService.id
                  setModalServiceId(null)
                  onNavigate('/book', sId)
                }}
              >
                Book Appointment for {activeModalService.title}
              </Button>
              <Button
                variant="outline"
                fullWidth
                size="md"
                onClick={() => setModalServiceId(null)}
              >
                Close Window
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
