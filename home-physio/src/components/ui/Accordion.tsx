import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface AccordionItemData {
  id: string
  title: string
  content: React.ReactNode
  badge?: string
}

export interface AccordionProps {
  items: AccordionItemData[]
  allowMultiple?: boolean
  defaultOpenId?: string
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenId,
  className = ''
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : [])

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      )
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-200 bg-white ${
              isOpen
                ? 'border-teal-300 ring-2 ring-teal-500/10 shadow-sm'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 font-semibold text-slate-900 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-2xl"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="text-base sm:text-lg text-slate-900 font-medium">{item.title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-teal-700' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fade-in">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
