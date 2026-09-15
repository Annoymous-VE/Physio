import React, { useState } from 'react'
import { X, AlertTriangle, PhoneCall } from 'lucide-react'

/**
 * Minimal professional top notice bar.
 * Per Update.md: "Reduce significantly — do not allow notification bars to overpower the website."
 */
export const EmergencyNotice: React.FC = () => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="bg-slate-950 text-slate-400 text-[11px] py-1.5 px-4 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-1.5 w-1.5 rounded-full bg-teal-500" />
          <span className="text-slate-400">
            Private home-visit physiotherapy · <span className="text-slate-300">[Primary Town/City]</span> & surrounding areas
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-amber-400/80">
            <AlertTriangle className="w-3 h-3 shrink-0" />
            <span>Emergencies: call <strong className="text-amber-300">NHS 111</strong> or <strong className="text-amber-300">999</strong></span>
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="tel:08000000000"
            className="hidden lg:flex items-center gap-1 text-slate-400 hover:text-teal-400 transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-teal-500" />
            <span>0800 [PHONE]</span>
          </a>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="text-slate-600 hover:text-slate-400 p-0.5 rounded cursor-pointer transition-colors"
            aria-label="Dismiss notice"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}
