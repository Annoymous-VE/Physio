import { useEffect } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'

export function App() {
  // Handle initial hash scrolling if user loads with #section
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* Sticky Main Navigation with ScrollSpy */}
      <Header />

      {/* Main Single Page Content */}
      <main className="flex-1 w-full animate-fade-in">
        <HomePage />
      </main>

      {/* Rich Multi-Column Footer */}
      <Footer />
    </div>
  )
}

export default App
