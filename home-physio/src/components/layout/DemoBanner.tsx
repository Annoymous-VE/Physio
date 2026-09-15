import React from 'react'
import { Sparkles } from 'lucide-react'

/**
 * Demo indicator — rendered as a minimal floating pill in the bottom corner only.
 * NOT displayed as a primary top bar (per Update.md: "Remove from client-facing UI").
 */
export const DemoBanner: React.FC = () => {
  const [show, setShow] = React.useState(false)

  if (!show) {
    return (
      <button
        onClick={() => setShow(true)}
        className="fixed bottom-4 right-4 z-50 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700/60 flex items-center gap-1.5 hover:bg-slate-800 transition-all cursor-pointer"
        title="View demo information"
      >
        <Sparkles className="w-3 h-3 text-teal-400" />
        <span>Client Demo</span>
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-950/95 backdrop-blur-sm text-white text-xs rounded-2xl shadow-2xl border border-slate-700/60 p-4 max-w-xs animate-fade-in">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
          <span className="font-bold text-teal-300 text-[11px] uppercase tracking-wider">Client Demo Prototype</span>
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-slate-500 hover:text-white p-0.5 rounded cursor-pointer transition-colors"
          aria-label="Close demo notice"
        >
          ×
        </button>
      </div>
      <p className="text-slate-400 text-[11px] leading-relaxed">
        Brand name, bio, service areas and pricing are modular placeholders ready for your clinic's details. Frontend mock — no backend required.
      </p>
    </div>
  )
}
