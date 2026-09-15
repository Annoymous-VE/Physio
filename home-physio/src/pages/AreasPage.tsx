import React from 'react'
import {
  MapPin,
  CheckCircle2,
  Navigation,
  Compass
} from 'lucide-react'
import { COVERAGE_DATA } from '../data/areas'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PostcodeChecker } from '../components/ui/PostcodeChecker'

interface AreasPageProps {
  onNavigate: (path: string) => void
}

export const AreasPage: React.FC<AreasPageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-0">
      {/* Page header */}
      <section className="bg-white border-b border-slate-100 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center gap-2 justify-center mb-4">
              <span className="h-px w-5 bg-teal-600/50" />
              <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-700">Geographic Coverage</span>
              <span className="h-px w-5 bg-teal-600/50" />
            </div>
            <h1
              className="text-[2rem] sm:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Areas covered for home visits
            </h1>
            <p className="mt-4 text-[16px] text-slate-500 leading-relaxed">
              {COVERAGE_DATA.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <PostcodeChecker onBookInArea={() => onNavigate('/book')} />
          </div>
        </div>
      </section>

      {/* Coverage zones */}
      <section className="bg-slate-50/70 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Zones"
          title="Service radius & visiting schedules"
          subtitle="We organise visits into structured zones to ensure prompt arrival and unhurried appointments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COVERAGE_DATA.zones.map((zone, idx) => (
            <Card
              key={idx}
              padding="lg"
              className="flex flex-col justify-between border-t-4 border-t-teal-700"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md">
                    {zone.zone}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{zone.travelFee}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{zone.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{zone.description}</p>

                {/* Sample Postcodes */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Sample Districts:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.postcodes.map((pc, pIdx) => (
                      <span key={pIdx} className="px-2 py-1 bg-slate-100 rounded text-xs font-mono text-slate-700">
                        {pc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Zone Features */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {zone.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Button
                  variant="outline"
                  fullWidth
                  size="md"
                  onClick={() => onNavigate('/book')}
                >
                  Book in {zone.zone}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Map/coverage visual */}
      <section className="bg-white py-12 sm:py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-950 text-teal-300 border border-teal-800">
                <Compass className="w-3.5 h-3.5" /> Travel Policy & Flexibility
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Not sure if your address is covered?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If your postcode falls slightly outside our standard zones, we frequently accommodate extended appointments or combine visits on scheduled regional days.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('/contact')}
                  icon={<Navigation className="w-4 h-4" />}
                >
                  Ask About Your Specific Location
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => onNavigate('/book')}
                  className="bg-transparent text-white border-slate-700 hover:bg-slate-800 hover:text-white"
                >
                  Request Appointment
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4 text-xs sm:text-sm">
              <h4 className="font-bold text-white text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                Key Covered Towns & Villages:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                {COVERAGE_DATA.sampleLocations.map((loc, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="text-teal-400">•</span>
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs italic pt-2 border-t border-slate-700/60 font-mono">
                ℹ️ {COVERAGE_DATA.disclaimer}
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
