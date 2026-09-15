import React, { useState } from 'react'
import {
  ShieldCheck,
  Calendar,
  Home,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  UserCheck,
  Stethoscope,
  Activity,
  HeartPulse,
  Brain,
  Trophy,
  Footprints,
  PhoneCall,
  Sparkles
} from 'lucide-react'
import { SITE_CONFIG } from '../data/site'
import { SERVICES, type ServiceItem } from '../data/services'
import { FAQS_DATA } from '../data/faqs'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PostcodeChecker } from '../components/ui/PostcodeChecker'
import { Accordion } from '../components/ui/Accordion'
import { SpecialistsSection } from '../components/sections/SpecialistsSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { UnifiedBookingContactSection } from '../components/sections/UnifiedBookingContactSection'

const serviceIconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  UserCheck: <UserCheck className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
  Footprints: <Footprints className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
}

const trustItems = [
  {
    icon: <Home className="w-5 h-5 text-teal-700" />,
    title: 'Zero Travel or Strain',
    desc: 'No painful car journeys, parking stress, or sitting in cold public waiting rooms when you are hurting.',
  },
  {
    icon: <Clock className="w-5 h-5 text-teal-700" />,
    title: '100% 1-on-1 Attention',
    desc: 'Unhurried, dedicated clinical appointments with full 60 minutes devoted entirely to your recovery.',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-teal-700" />,
    title: 'Real-World Domestic Assessment',
    desc: 'Treatment tailored to your actual environment — your stairs, chairs, bedroom, and everyday movement challenges.',
  },
  {
    icon: <UserCheck className="w-5 h-5 text-teal-700" />,
    title: 'Carer & Family Included',
    desc: 'Family members and carers can be directly involved to learn safe transfers, support techniques, and exercise assistance.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Book Your Home Visit',
    desc: 'Request online or call our clinical triage team. We agree on a convenient time window that suits your schedule.',
    badge: 'Quick & Simple'
  },
  {
    num: '02',
    title: 'Physiotherapist Arrives',
    desc: 'Your Chartered Physiotherapist arrives with a portable treatment couch, sterile tools, and all exercise rehabilitation equipment.',
    badge: 'Fully Equipped'
  },
  {
    num: '03',
    title: '60-Min Assessment & Treatment',
    desc: 'In-depth physical examination of your joint mechanics, nerve function, and posture, followed by immediate hands-on therapy.',
    badge: 'Day 1 Relief'
  },
  {
    num: '04',
    title: 'Bespoke Recovery Roadmap',
    desc: 'Personalised home exercise plan with HD video guides, ergonomic suggestions, and ongoing progress tracking.',
    badge: 'Sustainable Care'
  },
]

export const HomePage: React.FC = () => {
  // Shared state for smooth cross-section interaction
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('initial-assessment')
  const [preferredSpecialist, setPreferredSpecialist] = useState<string>('')
  const [serviceFilter, setServiceFilter] = useState<string>('all')
  
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

  const handleBookService = (serviceId: string) => {
    setSelectedServiceForBooking(serviceId)
    scrollTo('#contact-booking')
  }

  const handleSelectSpecialist = (name: string) => {
    setPreferredSpecialist(name)
    scrollTo('#contact-booking')
  }

  // Filter services
  const filteredServices = SERVICES.filter((s) => {
    if (serviceFilter === 'all') return true
    if (serviceFilter === 'msk') return s.id.includes('msk') || s.id.includes('joint') || s.id.includes('back')
    if (serviceFilter === 'rehab') return s.id.includes('post-op') || s.id.includes('rehab')
    if (serviceFilter === 'elderly') return s.id.includes('elderly') || s.id.includes('falls') || s.id.includes('mobility')
    return true
  })

  // First 4 FAQs for the compact split section
  const faqItems = FAQS_DATA.slice(0, 4).map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: (
      <p className="text-[14.5px] text-slate-600 leading-relaxed">{faq.answer}</p>
    ),
  }))

  return (
    <div className="pb-0">

      {/* ============================================================
          1. HERO — EDITORIAL SPLIT WITH POSTCODE TRIAGE
      ============================================================ */}
      <section id="hero" className="relative bg-white overflow-hidden scroll-mt-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 sm:py-24 lg:py-28">

            {/* LEFT: Content */}
            <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
              {/* Headline */}
              <h1
                className="text-[2.5rem] sm:text-[3.25rem] lg:text-[3.85rem] font-extrabold text-slate-900 leading-[1.05] tracking-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Physiotherapy at home,{' '}
                <span className="text-teal-700">built around&nbsp;you.</span>
              </h1>

              {/* Sub */}
              <p className="text-[17px] text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Professional, Chartered physiotherapy delivered in the comfort, privacy, and convenience of your own home.
                No travel strain. No crowded clinics. Unhurried one-to-one clinical rehabilitation.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => scrollTo('#contact-booking')}
                  icon={<Calendar className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Book a Home Visit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollTo('#services')}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Explore Services
                </Button>
              </div>

              {/* Trust strip */}
              <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-x-5 gap-y-2.5 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5 text-[12.5px] font-medium text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{SITE_CONFIG.credentials.hcpc}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12.5px] font-medium text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{SITE_CONFIG.credentials.csp}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12.5px] font-medium text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{SITE_CONFIG.credentials.dbs}</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Image & Floating Cards */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-teal-50 rounded-full opacity-70 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-8 w-56 h-56 bg-teal-100/40 rounded-full opacity-50 blur-2xl pointer-events-none" />

              <div className="relative img-hover-zoom rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[580px]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                  alt="Chartered physiotherapist evaluating patient movement in domestic home setting"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating service area card */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 lg:-left-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <div className="text-[10.5px] text-slate-400 font-semibold uppercase tracking-wider">Service Coverage</div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">{SITE_CONFIG.primaryLocation} & Surrounds</div>
                </div>
              </div>

              {/* Floating telephone card */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 lg:-right-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <div className="text-[10.5px] text-slate-400 font-semibold uppercase tracking-wider">Direct Enquiries</div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">{SITE_CONFIG.phone}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Postcode Checker bar */}
          <div className="pb-12">
            <div className="max-w-3xl mx-auto">
              <PostcodeChecker onBookInArea={() => scrollTo('#contact-booking')} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. ABOUT / WHY CHOOSE US
      ============================================================ */}
      <section id="about" className="bg-slate-900 text-white py-20 sm:py-28 border-t border-slate-800/80 scroll-mt-20 relative overflow-hidden">
        {/* Ambient subtle glow orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle geometric dot and sparse cross overlay with CSS mask gradient */}
        <div 
          className="absolute inset-0 bg-dot-cross-pattern pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeading
            light
            eyebrow="Why Choose Us"
            title="Clinical Excellence, Directly In Your Home"
            subtitle="Eliminate the strain of travelling to a hospital or clinic. We assess your movement where it matters most: your daily life."
            align="center"
          />

          {/* 4 Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="bg-slate-950/70 rounded-2xl p-6 border border-slate-800 shadow-sm hover:border-slate-700 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4 text-teal-400">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Clinical Portrait & Philosophy */}
          <div className="bg-slate-950/80 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-slate-900 border border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                    alt="Lead Chartered Physiotherapist in clinical uniform"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-slate-700 text-xs">
                  <p className="font-bold text-white">Dr. Eleanor Vance</p>
                  <p className="text-teal-400 font-medium">Lead Chartered Physiotherapist · MCSP, HCPC</p>
                </div>
              </div>

              {/* Bio details */}
              <div className="lg:col-span-7 space-y-5">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  "Rehabilitation tailored around your life, your home and your personal recovery goals."
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  With over 12 years of clinical practice across NHS hospital trusts and private musculoskeletal centres, our team founded HomePhysio to solve a critical healthcare challenge: patients recovering from surgeries, severe back spasms, or elderly frailty often find travelling to a clinic physically exhausting and stressful.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  By visiting you directly, we eliminate commute strain and evaluate how you move in your genuine everyday setting — your stairs, your favourite armchair, bed transfers, and garden steps.
                </p>

                {/* Key stats row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-center sm:text-left">
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-teal-400">100%</span>
                    <span className="text-xs text-slate-400 font-medium">Home-Focused</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-teal-400">12+</span>
                    <span className="text-xs text-slate-400 font-medium">Years Experience</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-teal-400">60 Min</span>
                    <span className="text-xs text-slate-400 font-medium">Dedicated Visits</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => scrollTo('#contact-booking')}
                    icon={<Calendar className="w-4 h-4" />}
                  >
                    Request Initial Assessment
                  </Button>
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => scrollTo('#specialists')}
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                    className="border border-slate-700 text-white hover:bg-slate-800 hover:text-white"
                  >
                    Meet Clinical Specialists
                  </Button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          3. SERVICES
      ============================================================ */}
      <section id="services" className="py-20 sm:py-28 bg-white border-t border-slate-200/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Specialist Care"
            title="Home Physiotherapy Treatments"
            subtitle="Evidence-based clinical rehabilitation delivered at your doorstep with portable hospital-grade equipment."
            align="center"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
            {[
              { id: 'all', label: 'All Treatments' },
              { id: 'msk', label: 'Musculoskeletal & Spine' },
              { id: 'rehab', label: 'Post-Op Rehabilitation' },
              { id: 'elderly', label: 'Elderly Mobility & Falls' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setServiceFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  serviceFilter === tab.id
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="bg-slate-50/80 rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg hover:border-teal-300/80 transition-all duration-300 card-lift group"
              >
                <div>
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200 shadow-xs">
                      {serviceIconMap[service.iconName] || <Stethoscope className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-bold text-teal-800 bg-teal-100/70 px-2.5 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 border-t border-slate-200/70 pt-4 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <Button
                    variant="outline"
                    fullWidth
                    size="sm"
                    onClick={() => handleBookService(service.id)}
                    icon={<Calendar className="w-3.5 h-3.5 text-teal-700" />}
                  >
                    Book This Treatment
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          4. HOW IT WORKS
      ============================================================ */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-slate-900 text-white border-t border-slate-800/80 scroll-mt-20 relative overflow-hidden">
        {/* Ambient background accents */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeading
            light
            eyebrow="Simple & Transparent"
            title="How Home-Visit Physiotherapy Works"
            subtitle="From your initial triage enquiry to a fully tailored recovery roadmap — four clear, stress-free steps."
            align="center"
          />

          {/* 4 Connected Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 relative">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-slate-950/70 rounded-3xl p-7 border border-slate-800 shadow-xl relative flex flex-col justify-between group hover:border-teal-500/40 hover:bg-slate-950/90 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-2xl bg-teal-500 text-slate-950 font-extrabold text-sm flex items-center justify-center shadow-md">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-bold text-teal-300 bg-teal-950/80 border border-teal-800 px-2.5 py-1 rounded-full">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Preparation Guidance Card */}
          <div className="mt-12 bg-slate-950/70 rounded-3xl p-8 border border-slate-800 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 bg-teal-950/80 border border-teal-800 px-3 py-1 rounded-full mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" /> What to Prepare
                </span>
                <h4 className="text-lg font-bold text-white">Preparing for your physiotherapist's arrival</h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                  You do not need a huge clinic space! A clear floor area of roughly 2m x 2m in your living room or bedroom is plenty. Wear comfortable loose clothing and keep any hospital discharge letters or medication lists handy.
                </p>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollTo('#contact-booking')}
                icon={<Calendar className="w-4 h-4" />}
                className="shrink-0 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold shadow-md shadow-teal-950 cursor-pointer"
              >
                Book Your Assessment
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          5. DOCTORS / SPECIALISTS
      ============================================================ */}
      <SpecialistsSection onSelectSpecialist={handleSelectSpecialist} />

      {/* ============================================================
          6. TESTIMONIALS (AUTO-SLIDING LEFT TO RIGHT)
      ============================================================ */}
      <TestimonialsSection />


      {/* ============================================================
          7. FAQ — 2-COLUMN SPLIT WITH EXACT 4 QUESTIONS
      ============================================================ */}
      <section id="faq" className="py-20 sm:py-28 bg-slate-50/80 border-t border-slate-200/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Side: Heading & Description */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Frequently Asked Questions
              </h2>

              <p className="text-base text-slate-600 leading-relaxed pt-1">
                Everything you need to know about booking, treatment couches, clothing, pricing, and clinical safety.
              </p>
            </div>

            {/* Right Side: Accordion with exactly 4 questions */}
            <div className="lg:col-span-7">
              <Accordion items={faqItems} allowMultiple defaultOpenId="faq-1" />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          8. CONTACT / BOOKING
      ============================================================ */}
      <UnifiedBookingContactSection
        selectedServiceId={selectedServiceForBooking}
        preferredSpecialist={preferredSpecialist}
      />

    </div>
  )
}

export default HomePage
