'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useState } from 'react'

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  )
}

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  } as const

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  } as const

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-black mb-12"
        >
          Powerful Features
        </motion.h2>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max"
        >
          {/* Large card - Smart Invoicing */}
          <motion.div variants={cardVariants} className="md:col-span-2 md:row-span-2">
            <TiltCard className="h-full">
              <div className="relative group rounded-lg overflow-hidden flex flex-col justify-between min-h-80 p-8 text-black h-full">
                <motion.div 
                  className="absolute inset-0 z-0 opacity-50"
                  animate={{ boxShadow: ["0 0 20px rgba(185, 255, 102, 0.2)", "0 0 40px rgba(185, 255, 102, 0.4)", "0 0 20px rgba(185, 255, 102, 0.2)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#b9ff66] via-[#b9ff66] to-[#97e841] z-0" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-block px-3 py-1 bg-black/10 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Smart Invoicing
                    </div>
                    {/* Animated Invoice Icon */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-black/10 p-3 rounded-2xl backdrop-blur-sm"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tighter">
                    Never miss an invoice again
                  </h3>
                  <p className="text-black/80 font-medium text-lg mt-6 max-w-md">
                    Automated reminders, follow-ups, and payment tracking all in one place.
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* AI Assistant card */}
          <motion.div variants={cardVariants} className="md:col-span-2">
            <TiltCard>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all h-full">
                <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide text-foreground">
                  AI Assistant
                </div>
                <h3 className="text-xl font-black mb-2">AI Task Assistant</h3>
                <p className="text-muted text-sm">
                  Intelligent task breakdown and automation powered by AI
                </p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Client Tracker card */}
          <motion.div variants={cardVariants} className="md:col-span-2">
            <TiltCard>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all h-full">
                <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide text-foreground">
                  Tracking
                </div>
                <h3 className="text-xl font-black mb-2">Client Tracker</h3>
                <p className="text-muted text-sm">
                  Centralized client management and interaction history
                </p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Bottom wide card */}
          <motion.div variants={cardVariants} className="md:col-span-4">
            <TiltCard>
              <div className="bg-secondary rounded-lg p-8 text-white hover:shadow-lg transition-all h-full">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
                  Automation
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-black mb-2">Auto Follow-ups</h3>
                    <p className="text-white/80 text-sm">Schedule and send follow-ups automatically</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-2">Time Tracking</h3>
                    <p className="text-white/80 text-sm">Track billable hours across all projects</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-2">Templates</h3>
                    <p className="text-white/80 text-sm">Pre-built project and workflow templates</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
