'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const HeartSVG = ({ color, className, scale = 1 }: { color: string; className?: string; scale?: number }) => (
  <motion.svg
    viewBox="0 0 32 32"
    fill={color}
    className={className}
    animate={{ scale: [scale, scale * 1.2, scale] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <path d="M16 28.5L14.1 26.6C7.3 20.4 3 16.5 3 11.5C3 8.4 5.4 6 8.5 6C10.2 6 11.9 6.8 13 8.1C14.1 6.8 15.8 6 17.5 6C20.6 6 23 8.4 23 11.5C23 16.5 18.7 20.4 11.9 26.6L16 28.5Z" />
  </motion.svg>
)

const SparkleSVG = ({ color, className }: { color: string; className?: string }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill={color}
    className={className}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </motion.svg>
)

const Particle = ({ delay, color }: { delay: number; color: string }) => (
  <motion.div
    initial={{ y: 0, opacity: 0, scale: 0 }}
    animate={{ 
      y: -120, 
      opacity: [0, 1, 0],
      scale: [0, 1, 0.5],
      x: Math.random() * 60 - 30,
      rotate: Math.random() * 360
    }}
    transition={{ duration: 4, repeat: Infinity, delay }}
    className="absolute z-0 w-4 h-4"
  >
    {Math.random() > 0.5 ? <SparkleSVG color={color} /> : <HeartSVG color={color} />}
  </motion.div>
)

export default function ContinuousPersonalityBots() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="w-full h-full flex items-center justify-center relative bg-transparent overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Atmosphere */}
      <div className="absolute w-[500px] h-[500px] bg-[#b9ff66]/5 blur-[120px] rounded-full z-0" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Particle key={i} delay={i * 0.4} color={i % 2 === 0 ? '#b9ff66' : '#ec4899'} />
        ))}
      </div>

      {/* 1. Active Status Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-10 flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md z-20"
      >
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#b9ff66]" />
        <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.2em]">
          AI Core: <span className="text-accent italic">Online</span>
        </span>
      </motion.div>

      <div className="relative flex items-end gap-12 pb-16 z-10">
        
        {/* Robot 1: Green Chibi */}
        <motion.div
          animate={{ 
            x: isHovered ? 35 : 0,
            y: isHovered ? [0, -8, 0] : [0, -15, 0],
            rotate: isHovered ? [0, -3, 0] : [0, -2, 0]
          }}
          transition={{ 
            x: { type: "spring", stiffness: 100, damping: 20 },
            y: { duration: isHovered ? 0.4 : 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative flex flex-col items-center group"
        >
          {/* 2. Reactive Speech Bubble (Green) */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0,
              y: isHovered ? -100 : 0
            }}
            className="absolute z-30 bg-accent text-black font-black text-[10px] px-4 py-2 rounded-2xl rounded-bl-none shadow-[0_10px_20px_rgba(185,255,102,0.3)] whitespace-nowrap"
          >
            I&apos;ll handle the invoices!
          </motion.div>

          {/* Support Head */}
          <div className="w-32 h-26 bg-card border-[4px] border-[#b9ff66] rounded-[3.5rem] relative flex flex-col items-center justify-center shadow-[0_0_30px_rgba(185,255,102,0.2)] z-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#b9ff66]/10 to-transparent" />
            
            {/* PERMANENT Blushing Cheeks */}
            <div className="absolute w-full flex justify-around px-6 top-14">
              <div className="w-5 h-2 bg-pink-400/30 blur-[4px] rounded-full" />
              <div className="w-5 h-2 bg-pink-400/30 blur-[4px] rounded-full" />
            </div>

            {/* Big Expressive Eyes */}
            <div className="flex gap-6 z-10">
              <motion.div 
                animate={isHovered ? {
                  scale: 1.2
                } : {
                  scaleY: [1, 0.1, 1]
                }}
                transition={{ 
                  duration: isHovered ? 0.2 : 4, 
                  repeat: isHovered ? 0 : Infinity,
                  repeatDelay: 2
                }}
                className="w-5 h-5 relative flex items-center justify-center"
              >
                {isHovered ? (
                  <svg viewBox="0 0 10 10" className="w-full h-full stroke-[#b9ff66] fill-none stroke-[2]">
                    <path d="M 1 7 Q 5 2 9 7" />
                  </svg>
                ) : (
                  <div className="w-4 h-4 bg-[#b9ff66] rounded-full shadow-[0_0_15px_#b9ff66] relative">
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full opacity-80" />
                  </div>
                )}
              </motion.div>
              <motion.div 
                animate={isHovered ? {
                  scale: 1.2
                } : {
                  scaleY: [1, 0.1, 1]
                }}
                transition={{ 
                  duration: isHovered ? 0.2 : 4, 
                  repeat: isHovered ? 0 : Infinity,
                  repeatDelay: 2
                }}
                className="w-5 h-5 relative flex items-center justify-center"
              >
                {isHovered ? (
                  <svg viewBox="0 0 10 10" className="w-full h-full stroke-[#b9ff66] fill-none stroke-[2]">
                    <path d="M 1 7 Q 5 2 9 7" />
                  </svg>
                ) : (
                  <div className="w-4 h-4 bg-[#b9ff66] rounded-full shadow-[0_0_15px_#b9ff66] relative">
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full opacity-80" />
                  </div>
                )}
              </motion.div>
            </div>

            {/* PERMANENT Smile */}
            <motion.div 
              animate={{ 
                scaleX: isHovered ? 1.6 : 1.2,
                y: isHovered ? 2 : 0
              }}
              className="mt-3 w-4 h-1 border-b-2 border-[#b9ff66] rounded-full z-10" 
            />

            {/* Bowtie */}
            <div className="absolute -bottom-1 flex items-center justify-center z-30">
              <div className="w-4 h-4 bg-[#b9ff66] rotate-45 rounded-sm shadow-[0_0_10px_rgba(185,255,102,0.5)]" />
              <div className="w-2 h-2 bg-white rounded-full z-40 -mx-1 shadow-inner" />
              <div className="w-4 h-4 bg-[#b9ff66] -rotate-45 rounded-sm shadow-[0_0_10px_rgba(185,255,102,0.5)]" />
            </div>
          </div>

          {/* Squishy Body */}
          <div className="w-22 h-18 bg-card border-[3px] border-[#b9ff66]/50 rounded-b-[2.5rem] rounded-t-lg -mt-2 relative shadow-2xl overflow-hidden">
             <motion.div 
               animate={{ x: [-10, 10, -10] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute inset-x-6 top-5 h-1 bg-[#b9ff66]/30 rounded-full" 
             />
          </div>

          {/* Arms */}
          <motion.div 
            animate={{ 
              rotate: isHovered ? [-20, -70, -30] : [-30, -40, -30]
            }}
            transition={{ duration: isHovered ? 0.4 : 3, repeat: Infinity }}
            className="absolute -left-6 top-24 w-10 h-4 bg-[#b9ff66] rounded-full origin-right" 
          >
             <div className="absolute -left-2 -top-1 w-6 h-6 border-3 border-[#b9ff66] rounded-full bg-card shadow-sm" />
          </motion.div>
          
          <motion.div 
            animate={{ 
              rotate: isHovered ? 0 : [30, 40, 30],
              x: isHovered ? 5 : 0
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-6 top-24 w-12 h-4 bg-[#b9ff66] rounded-full origin-left z-10" 
          >
             <div className="absolute -right-2 -top-1 w-7 h-7 border-3 border-[#b9ff66] rounded-full bg-card shadow-sm" />
          </motion.div>
        </motion.div>

        {/* Central Heart */}
        <motion.div
          animate={{ 
            y: isHovered ? [0, -20, 0] : [0, -15, 0],
            scale: isHovered ? 1.4 : [1, 1.1, 1],
            rotate: isHovered ? [0, 10, -10, 0] : 0
          }}
          transition={{ duration: isHovered ? 1.5 : 3, repeat: Infinity }}
          className="mb-32 z-10"
        >
          <HeartSVG color="#ec4899" className="w-10 h-10 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]" scale={1.2} />
        </motion.div>

        {/* Robot 2: Pink Chibi */}
        <motion.div
          animate={{ 
            x: isHovered ? -35 : 0,
            y: isHovered ? [0, -8, 0] : [0, -15, 0],
            rotate: isHovered ? [0, 3, 0] : [0, 2, 0]
          }}
          transition={{ 
            x: { type: "spring", stiffness: 100, damping: 20 },
            y: { duration: isHovered ? 0.4 : 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative flex flex-col items-center group"
        >
          {/* Reactive Speech Bubble (Pink) */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0,
              y: isHovered ? -100 : 0
            }}
            className="absolute z-30 bg-pink-500 text-white font-black text-[10px] px-4 py-2 rounded-2xl rounded-br-none shadow-[0_10px_20px_rgba(236,72,153,0.3)] whitespace-nowrap"
          >
            I&apos;ll manage the clients!
          </motion.div>

          {/* Head with Bow */}
          <div className="w-28 h-24 bg-card border-[4px] border-pink-400 rounded-[3.5rem] relative flex flex-col items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.2)] z-20 overflow-hidden">
            {/* PERMANENT Blushing Cheeks */}
            <div className="absolute w-full flex justify-around px-6 top-12">
              <div className="w-5 h-2 bg-[#b9ff66]/30 blur-[4px] rounded-full" />
              <div className="w-5 h-2 bg-[#b9ff66]/30 blur-[4px] rounded-full" />
            </div>

            {/* Expressive Eyes (Normal when idle, Hearts when hovered) */}
            <div className="flex gap-5 z-10">
              <motion.div 
                animate={{ scale: isHovered ? 1.2 : 1 }}
                className="w-6 h-6 relative flex items-center justify-center"
              >
                {isHovered ? (
                  <HeartSVG color="#ec4899" className="w-full h-full drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                ) : (
                  <motion.div 
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2.5 }}
                    className="w-4 h-4 bg-pink-400 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)] relative"
                  >
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full opacity-80" />
                  </motion.div>
                )}
              </motion.div>
              <motion.div 
                animate={{ scale: isHovered ? 1.2 : 1 }}
                className="w-6 h-6 relative flex items-center justify-center"
              >
                {isHovered ? (
                  <HeartSVG color="#ec4899" className="w-full h-full drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                ) : (
                  <motion.div 
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2.5 }}
                    className="w-4 h-4 bg-pink-400 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)] relative"
                  >
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full opacity-80" />
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* PERMANENT Smile */}
            <motion.div 
              animate={{ 
                scaleX: isHovered ? 1.5 : 1.1,
                y: isHovered ? 1 : 0
              }}
              className="mt-2 w-4 h-1 border-b-2 border-pink-400 rounded-full z-10" 
            />

            {/* Hair Ribbon */}
            <div className="absolute top-2 right-6 rotate-12 flex flex-col items-center z-30">
               <div className="flex -space-x-1">
                 <div className="w-4 h-4 bg-pink-500 rounded-full" />
                 <div className="w-4 h-4 bg-pink-500 rounded-full" />
               </div>
               <div className="w-2 h-2 bg-white rounded-full -mt-2 z-40" />
            </div>
          </div>

          {/* Squishy Body */}
          <div className="w-20 h-16 bg-card border-[3px] border-pink-400/50 rounded-b-[2.5rem] rounded-t-lg -mt-2 relative shadow-2xl">
             <motion.div 
               animate={{ opacity: [0.2, 0.5, 0.2] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute inset-x-5 top-4 h-1 bg-pink-400/30 rounded-full" 
             />
          </div>

          {/* Arms */}
          <motion.div 
            animate={{ 
              rotate: isHovered ? 0 : [10, 20, 10],
              x: isHovered ? -5 : 0
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute -left-6 top-22 w-12 h-3.5 bg-pink-400 rounded-full origin-right z-10" 
          >
             <div className="absolute -left-2 -top-1 w-7 h-7 border-3 border-pink-400 rounded-full bg-card shadow-sm" />
          </motion.div>
          
          <motion.div 
            animate={{ 
              rotate: isHovered ? [-10, -40, -10] : [-10, -20, -10]
            }}
            transition={{ duration: isHovered ? 0.4 : 3, repeat: Infinity, delay: 0.5 }}
            className="absolute -right-4 top-22 w-8 h-3.5 bg-pink-400 rounded-full origin-left" 
          >
             <div className="absolute -right-1.5 -top-1 w-5 h-5 border-3 border-pink-400 rounded-full bg-card shadow-sm" />
          </motion.div>
        </motion.div>

      </div>

      {/* Ground Glow */}
      <motion.div 
        animate={{ 
          opacity: isHovered ? 0.5 : [0.2, 0.3, 0.2],
          scale: isHovered ? 1.3 : [1, 1.05, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 w-96 h-12 bg-[#b9ff66]/20 blur-3xl rounded-full z-0" 
      />
    </div>
  )
}
