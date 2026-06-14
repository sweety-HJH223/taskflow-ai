'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-black font-black text-lg">T</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-white">TaskFlow<span className="text-accent italic">AI</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'How it Works', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => handleSmoothScroll(item.toLowerCase().replace(/ /g, ''))}
                className="text-xs font-bold text-white/70 hover:text-white transition-all tracking-widest uppercase relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSmoothScroll('waitlist')}
              className="px-5 py-2 bg-white text-black rounded-lg font-black text-xs shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-accent/20 transition-all flex items-center gap-2"
            >
              <span>Early Access</span>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-8 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-4 mt-6">
                {['Features', 'How it Works', 'FAQ'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleSmoothScroll(item.toLowerCase().replace(/ /g, ''))}
                    className="text-2xl font-black text-muted hover:text-accent transition-colors text-left px-2 tracking-tighter"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => handleSmoothScroll('waitlist')}
                  className="mt-4 w-full py-4 bg-accent text-black rounded-2xl font-black text-lg shadow-[0_0_30px_rgba(185,255,102,0.2)]"
                >
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
