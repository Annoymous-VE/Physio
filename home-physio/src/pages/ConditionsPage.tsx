import React, { useState } from 'react'
import {
  ShieldAlert,
  Search,
  AlertTriangle,
  ArrowRight,
  Activity
} from 'lucide-react'
import { CONDITIONS_DATA } from '../data/conditions'
import { Button } from '../components/ui/Button'

interface ConditionsPageProps {
  onNavigate: (path: string, serviceId?: string) => void
}

export const ConditionsPage: React.FC<ConditionsPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredCategories = CONDITIONS_DATA.map(category => {
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory
    if (!matchesCategory) return null

    const matchingConditions = category.conditions.filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.commonSymptoms.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      c.homePhysioApproach.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (matchingConditions.length === 0) return null

    return {
      ...category,
      conditions: matchingConditions
    }
  }).filter(Boolean)

  return (
    <div className="pb-0">
      {/* Page header */}
      <section className="bg-white border-b border-slate-100 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="h-px w-5 bg-teal-600/50" />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-700">Conditions Directory</span>
            <span className="h-px w-5 bg-teal-600/50" />
          </div>
          <h1
            className="text-[2rem] sm:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Conditions we treat at home
          </h1>
          <p className="mt-4 text-[16px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From acute sciatica and knee arthritis to post-surgical hip replacements and balance retraining.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search symptoms (e.g. sciatica, knee, shoulder, falls)…"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 text-[14px] text-slate-900 placeholder-slate-400 shadow-sm transition-all"
            />
          </div>

          {/* Category filters */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-xl text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Conditions
            </button>
            {CONDITIONS_DATA.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-xl text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions listing */}
      <section className="bg-slate-50/70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Activity className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching conditions found</h3>
            <p className="text-sm text-slate-500 mt-1">Try a different search term or browse by category.</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => { setSearchTerm(''); setSelectedCategory('all') }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <div key={category!.id} className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-2xl font-bold text-slate-900">{category!.name}</h2>
                <p className="text-sm text-slate-500 mt-0.5">{category!.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {category!.conditions.map((cond) => (
                  <div key={cond.id} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-bold text-slate-900">{cond.name}</h3>
                        <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">
                          Home Treatable
                        </span>
                      </div>

                      {/* Symptoms */}
                      <div className="space-y-1.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Typical Symptoms:
                        </h4>
                        <div className="space-y-1">
                          {cond.commonSymptoms.map((sym, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <span className="text-teal-700 font-bold">•</span>
                              <span>{sym}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* How Home Physio Helps */}
                      <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="font-bold text-teal-950 block mb-1">Our Home Rehabilitation Approach:</span>
                        {cond.homePhysioApproach}
                      </div>

                      {/* Red Flags Alert Note (if any) */}
                      {cond.redFlagsNote && (
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span>{cond.redFlagsNote}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => onNavigate('/book', cond.recommendedServiceId)}
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                      >
                        Book Assessment for {cond.name}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

        {/* Clinical Disclaimer Callout */}
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-300/80 text-xs text-slate-600 leading-relaxed space-y-2">
          <p className="font-bold text-slate-800 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-teal-700" />
            Individual Assessment & Healthcare Disclaimer:
          </p>
          <p>
            Information on this page is for general educational orientation and does not constitute formal medical diagnosis. Every patient undergoes an in-depth clinical screening to confirm suitability for home treatment before any therapeutic intervention begins.
          </p>
        </div>
        </div>
      </section>
    </div>
  )
}
