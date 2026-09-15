import React, { useState } from 'react'
import { MapPin, CheckCircle2, AlertCircle, Search, ArrowRight } from 'lucide-react'
import { Button } from './Button'

interface PostcodeCheckerProps {
  onBookInArea?: (postcode: string) => void
  className?: string
}

export const PostcodeChecker: React.FC<PostcodeCheckerProps> = ({
  onBookInArea,
  className = ''
}) => {
  const [inputCode, setInputCode] = useState('')
  const [result, setResult] = useState<{
    status: 'covered' | 'outer' | 'unconfirmed'
    title: string
    message: string
    zone: string
    travelNote: string
  } | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputCode.trim()) return

    setIsSearching(true)
    setTimeout(() => {
      const code = inputCode.trim().toUpperCase()
      setIsSearching(false)

      if (code.startsWith('AB1') || code.startsWith('AB2') || code.startsWith('SW') || code.startsWith('W1') || code.includes('TOWN') || code.includes('CENTRAL')) {
        setResult({
          status: 'covered',
          title: `Direct Coverage in ${code}`,
          message: 'Excellent! Your area is inside our Primary Home Visit Zone. Regular slots available this week.',
          zone: 'Zone 1 (Core Service Area)',
          travelNote: 'Standard travel is fully included in the session fee.'
        })
      } else if (code.startsWith('AB') || code.startsWith('E') || code.startsWith('N') || code.includes('SURROUND') || code.includes('VILLAGE')) {
        setResult({
          status: 'outer',
          title: `Covered with Coordinated Scheduling (${code})`,
          message: 'Great news! We regularly visit your area on designated weekday routes.',
          zone: 'Zone 2 (Outer Suburb / Borough)',
          travelNote: 'Standard travel included. Weekend visits subject to confirmation.'
        })
      } else {
        setResult({
          status: 'unconfirmed',
          title: `Demo Postcode Verification for ${code}`,
          message: 'In this client demo, all simulated UK postcodes can be configured for your exact clinical territory.',
          zone: 'Configurable Service Zone',
          travelNote: 'Travel fees and coverage boundary are easily customized in site data.'
        })
      }
    }, 350)
  }

  const quickSamples = ['[AB1 Central]', '[AB12 Outer]', '[AB21 Village]']

  return (
    <div className={`bg-white rounded-3xl border border-teal-100 shadow-sm p-6 sm:p-8 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-teal-800 flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">Check Home Visit Coverage</h3>
          <p className="text-xs sm:text-sm text-slate-500">Enter your UK postcode or town to verify immediate visiting availability</p>
        </div>
      </div>

      <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="e.g. AB1 2CD, SW1, or Town name..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm bg-slate-50/50"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSearching}
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
          className="whitespace-nowrap"
        >
          Check Area
        </Button>
      </form>

      {/* Quick click suggestions */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="font-medium">Try demo areas:</span>
        {quickSamples.map((sample) => (
          <button
            key={sample}
            type="button"
            onClick={() => {
              setInputCode(sample)
            }}
            className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-teal-50 hover:text-teal-800 border border-slate-200 transition-colors cursor-pointer"
          >
            {sample}
          </button>
        ))}
      </div>

      {/* Result box */}
      {result && (
        <div
          className={`mt-5 p-4 sm:p-5 rounded-2xl border animate-fade-in ${
            result.status === 'covered'
              ? 'bg-teal-50/80 border-teal-200 text-teal-950'
              : result.status === 'outer'
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
              : 'bg-slate-50 border-slate-200 text-slate-800'
          }`}
        >
          <div className="flex items-start gap-3">
            {result.status === 'covered' || result.status === 'outer' ? (
              <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm sm:text-base font-bold">{result.title}</h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/90 border border-slate-300/60 font-semibold shadow-2xs">
                  {result.zone}
                </span>
              </div>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed">{result.message}</p>
              <div className="mt-2 text-xs font-medium text-slate-600 flex items-center gap-1.5">
                <span>📍 {result.travelNote}</span>
              </div>
              {onBookInArea && (
                <div className="mt-3.5 pt-3 border-t border-slate-200/60">
                  <Button
                    type="button"
                    size="sm"
                    variant="primary"
                    onClick={() => onBookInArea(inputCode || 'AB1')}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    Proceed to Book in this Area
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
