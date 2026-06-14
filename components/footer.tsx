'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-sm">T</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">TaskFlow<span className="text-accent italic">AI</span></span>
            </div>
            <p className="text-muted text-sm font-medium leading-relaxed">
              The world&apos;s first autonomous workflow engine for independent creators and small agencies. Built for the future of work.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-white font-black text-xs uppercase tracking-[0.2em]">Product</span>
              <a href="#features" className="text-muted text-sm hover:text-accent transition-colors font-medium">Features</a>
              <a href="#howit" className="text-muted text-sm hover:text-accent transition-colors font-medium">How it works</a>
              <a href="#faq" className="text-muted text-sm hover:text-accent transition-colors font-medium">FAQ</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-black text-xs uppercase tracking-[0.2em]">Company</span>
              <a href="#" className="text-muted text-sm hover:text-accent transition-colors font-medium">About</a>
              <a href="#" className="text-muted text-sm hover:text-accent transition-colors font-medium">Privacy</a>
              <a href="#" className="text-muted text-sm hover:text-accent transition-colors font-medium">Terms</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-black text-xs uppercase tracking-[0.2em]">Social</span>
              <a href="#" className="text-muted text-sm hover:text-accent transition-colors font-medium">Twitter</a>
              <a href="#" className="text-muted text-sm hover:text-accent transition-colors font-medium">GitHub</a>
              <a href="#" className="text-muted text-sm hover:text-accent transition-colors font-medium">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black text-muted/50 uppercase tracking-[0.3em]">
          <span>© 2026 TASKFLOW AI INC.</span>
          <span>A PORTFOLIO DEMO BY SWEETYCODES</span>
          <motion.span 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-accent"
          >
            STATUS: FULLY OPERATIONAL
          </motion.span>
        </div>
      </div>
    </footer>
  )
}
