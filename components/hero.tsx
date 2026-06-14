'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const SplineScene = dynamic(() => import('./ui/spline-scene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-secondary/20 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-muted text-sm uppercase tracking-widest">Loading 3D Scene...</div>
    </div>
  ),
})

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const headline = "STOP DOING IT MANUALLY"
  const words = headline.split(" ")

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="z-10"
          >
            <div className="space-y-1">
              {words.map((word, i) => (
                <motion.h1
                  key={i}
                  variants={wordVariants}
                  className={`text-6xl sm:text-8xl font-black leading-[0.9] tracking-tighter ${
                    word === "MANUALLY" 
                      ? "text-transparent" 
                      : "text-white"
                  }`}
                  style={word === "MANUALLY" ? {
                    WebkitTextStroke: '2px #b9ff66',
                  } : {}}
                >
                  {word}
                </motion.h1>
              ))}
            </div>
            
            <motion.p 
              variants={itemVariants}
              className="text-white/80 text-base md:text-lg mt-8 max-w-lg font-medium leading-relaxed"
            >
              AI-powered workflow automation for indie freelancers and small agencies. 
              <span className="text-white block mt-2 font-bold italic">Stop doing it manually.</span>
            </motion.p>
            
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-[#b9ff66] text-black font-black text-lg rounded-2xl hover:shadow-[0_0_30px_rgba(185,255,102,0.4)] transition-all flex items-center gap-3"
            >
              Get Early Access <span className="text-2xl">→</span>
            </motion.button>
          </motion.div>

          {/* Right: Spline 3D Scene */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center"
          >
            <div className="w-full h-full relative">
              {mounted && <SplineScene />}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
