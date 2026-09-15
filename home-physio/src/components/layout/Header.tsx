import React, { useState, useEffect } from 'react'
import { Menu, X, Calendar, Stethoscope } from 'lucide-react'
import { SITE_CONFIG } from '../../data/site'
import { Button } from '../ui/Button'

interface HeaderProps {
  currentPath?: string
  onNavigate?: (path: string) => void
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('#hero')

  // Detect scroll offset for sticky navbar glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  // ScrollSpy to track active section in viewport
  useEffect(() => {
    const sectionIds = SITE_CONFIG.navLinks
      .map(item => item.href.startsWith('#') ? item.href.slice(1) : null)
      .filter((id): id is string => Boolean(id))

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 140

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(`#${id}`)
            return
          }
        }
      }
      setActiveSection('#hero')
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    handleScrollSpy() // initial check

    return () => window.removeEventListener('scrollSpy', handleScrollSpy)
  }, [])

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)
    setActiveSection(href)

    if (href.startsWith('#')) {
      const id = href.slice(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.replaceState(null, '', href)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            {/* Brand */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer shrink-0"
              aria-label="HomePhysio — return to top"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-xs group-hover:bg-teal-800 transition-colors duration-200">
                <Stethoscope className="w-4.5 h-4.5" style={{ width: '18px', height: '18px' }} />
              </div>
              <div>
                <span className="block text-[17px] font-extrabold tracking-tight text-slate-900 leading-none group-hover:text-teal-800 transition-colors duration-200" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {SITE_CONFIG.name}
                </span>
                <span className="block text-[10.5px] text-slate-500 font-medium leading-tight tracking-wide mt-0.5">
                  Home-Visit Physiotherapy
                </span>
              </div>
            </button>

            {/* Desktop Navigation with Active Scrollspy Highlighting */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {SITE_CONFIG.navLinks.map((item) => {
                const isActive = activeSection === item.href
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-1.5 text-[13px] font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-teal-900 bg-teal-50 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-teal-700" />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2.5">
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('#contact-booking')}
                icon={<Calendar className="w-3.5 h-3.5" />}
                iconPosition="left"
                className="hidden sm:inline-flex"
              >
                Book Visit
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none"
                aria-label="Toggle navigation"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="lg:hidden fixed inset-x-0 top-[57px] z-50 bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-57px)] overflow-y-auto mobile-menu-enter">
            <div className="px-4 py-5 space-y-1.5">
              {/* Location context */}
              <div className="flex items-center justify-between mb-4 px-1">
                <span className="text-xs text-slate-500 font-medium">
                  Covering <span className="text-slate-800 font-semibold">{SITE_CONFIG.primaryLocation}</span> & surrounds
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  Accepting Patients
                </span>
              </div>

              {/* Nav links */}
              {SITE_CONFIG.navLinks.map((item) => {
                const isActive = activeSection === item.href
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 text-left cursor-pointer ${
                      isActive
                        ? 'bg-teal-50 text-teal-900 border-l-3 border-teal-700'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 border-l-3 border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg className={`w-4 h-4 ${isActive ? 'text-teal-700' : 'text-slate-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )
              })}

              {/* Mobile CTAs */}
              <div className="pt-4 mt-2 border-t border-slate-100 space-y-2.5">
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={() => scrollToSection('#contact-booking')}
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Book an Appointment
                </Button>
                <div className="text-center pt-2">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-xs font-bold text-teal-800 hover:underline"
                  >
                    Call clinician: {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

