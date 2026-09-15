import React, { useState } from 'react'
import { HelpCircle, Search } from 'lucide-react'
import { FAQS_DATA } from '../data/faqs'
import { Accordion } from '../components/ui/Accordion'
import { Button } from '../components/ui/Button'

interface FAQPageProps {
  onNavigate: (path: string) => void
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Home Visits', 'Preparation', 'Appointments & Pricing', 'Clinical & Safety']

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const accordionItems = filteredFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    badge: faq.category,
    content: (
      <p className="text-[14.5px] text-slate-600 leading-relaxed">{faq.answer}</p>
    ),
  }))

  return (
    <div className="pb-0">
      {/* Page header */}
      <section className="bg-white border-b border-slate-100 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="h-px w-5 bg-teal-600/50" />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-700">Patient Questions Answered</span>
            <span className="h-px w-5 bg-teal-600/50" />
          </div>
          <h1
            className="text-[2rem] sm:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Frequently asked questions
          </h1>
          <p className="mt-4 text-[16px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about preparing for your home visit, pricing, safety, and rehabilitation.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. price, couch, referral)…"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 text-[14px] text-slate-900 placeholder-slate-400 shadow-sm transition-all"
            />
          </div>

          {/* Category pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="bg-slate-50/70 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {accordionItems.length > 0 ? (
            <Accordion items={accordionItems} allowMultiple defaultOpenId="faq-1" />
          ) : (
            <div className="text-center py-14 bg-white rounded-2xl border border-slate-200/80">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-[15px] font-bold text-slate-700 mb-1">No matching questions found</p>
              <p className="text-[13px] text-slate-500">Try resetting the search or selecting "All".</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-5"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}
              >
                Reset Search
              </Button>
            </div>
          )}

          {/* CTA callout */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-teal-50/80 border border-teal-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1 text-center sm:text-left">
                <h3
                  className="text-[16px] font-bold text-slate-900"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Have a specific question?
                </h3>
                <p className="text-[13.5px] text-slate-500">
                  We're always happy to discuss your circumstances before you commit.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Button variant="primary" size="md" onClick={() => onNavigate('/contact')}>
                  Contact Us
                </Button>
                <Button variant="outline" size="md" onClick={() => onNavigate('/book')}>
                  Book Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
