import React from 'react'
import {
  Home,
  CheckCircle2,
  Calendar
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'

interface HomeVisitsPageProps {
  onNavigate: (path: string) => void
}

export const HomeVisitsPage: React.FC<HomeVisitsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-0">
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100/80 text-teal-900 border border-teal-200">
                The Home Visit Advantage
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Physiotherapy without leaving home.
              </h1>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
                Experience high-street clinic expertise with the comfort, peace of mind, and convenience of your own living room. No traffic, no crowded waiting rooms, and no travel pain.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate('/book')}
                  icon={<Calendar className="w-5 h-5" />}
                >
                  Book a Home Visit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate('/pricing')}
                >
                  View Pricing & Fees
                </Button>
              </div>
            </div>

            {/* Right: Visual Experience Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-teal-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Home className="w-5 h-5 text-teal-300" />
                    <span className="font-bold text-sm tracking-wide text-white">Full Clinic Kit Brought to You</span>
                  </div>
                  <span className="text-[10px] bg-teal-800/80 text-teal-200 px-2 py-0.5 rounded font-mono">
                    Professional Standard
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Hydraulic portable treatment plinth (if required)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Clinical joint mobilisation & massage equipment</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Progressive resistance bands, weights & balance pads</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Electrotherapy & cryo/heat packs</span>
                  </div>
                </div>

                <div className="p-4 bg-teal-950/60 rounded-2xl border border-teal-800/60 text-xs text-teal-200">
                  💡 <strong>Space Required:</strong> Just enough clear floor space for a single treatment bed (approx 2m x 2m), or simply a comfortable armchair.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STEP BY STEP PROCESS (5 STAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Patient Journey"
          title="5 Stages of Your Home Rehabilitation"
          subtitle="A clear, organized pathway from booking to full functional independence."
        />

        <div className="space-y-6">
          <Card padding="lg" className="border-l-4 border-l-teal-700">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Book Your Convenient Slot</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Request an appointment through our online booking wizard or contact us directly. We coordinate a date and time that suits your daily rhythm, morning or afternoon.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 self-start">
                Step 1
              </span>
            </div>
          </Card>

          <Card padding="lg" className="border-l-4 border-l-teal-700">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Physiotherapist Visits Your Home</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Your Chartered Physiotherapist arrives punctually at your door, carrying sanitized clinical tools, protective covers, and all necessary assessment aids.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 self-start">
                Step 2
              </span>
            </div>
          </Card>

          <Card padding="lg" className="border-l-4 border-l-teal-700">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">In-Depth Assessment & Hands-On Relief</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    We conduct joint range testing, muscle strength evaluation, and nerve root conduction checks. Immediate manual therapy and pain-relieving techniques are applied during the first 60 minutes.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 self-start">
                Step 3
              </span>
            </div>
          </Card>

          <Card padding="lg" className="border-l-4 border-l-teal-700">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Personalised Home Exercise Plan</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    You receive tailored exercises utilizing your own furniture (stairs, armchairs, doorways) so practice is simple and immediately habitual. Digital video guides are emailed to your inbox.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 self-start">
                Step 4
              </span>
            </div>
          </Card>

          <Card padding="lg" className="border-l-4 border-l-teal-700">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Follow-Up & Functional Progression</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Ongoing review appointments track your milestone progress, increase loading intensity, refine gait mechanics, and transition you into independent maintenance.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 self-start">
                Step 5
              </span>
            </div>
          </Card>
        </div>
      </section>

      {/* 3. KEY BENEFITS SUMMARY */}
      <section className="bg-slate-100/70 py-16 sm:py-24 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Clinical Advantages"
            title="Benefits of Physiotherapy at Home"
            subtitle="Why home-based physical therapy often achieves faster functional results than clinical office visits."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card padding="md">
              <h4 className="font-bold text-slate-900 text-lg mb-2">No Transport Difficulties</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ideal for individuals who cannot drive post-surgery, elderly relatives reliant on taxis, or anyone in acute musculoskeletal spasm.
              </p>
            </Card>

            <Card padding="md">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Private & Confidential</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enjoy complete privacy without the bustling environment of commercial fitness or health centres.
              </p>
            </Card>

            <Card padding="md">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Direct Environmental Insights</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your physio observes real challenges: slippery bathroom rugs, awkward bed heights, stair railings, or garden steps.
              </p>
            </Card>

            <Card padding="md">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Flexible Scheduling</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Save 1 to 2 hours of travelling and waiting time. We work around your family or work timetable.
              </p>
            </Card>

            <Card padding="md">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Involved Family & Carers</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Spouses, sons, daughters, and professional carers can be present to learn correct support and transfer techniques.
              </p>
            </Card>

            <Card padding="md">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Unhurried Clinical Dedication</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                100% of your allocated time is spent with your therapist, delivering optimal treatment value.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
