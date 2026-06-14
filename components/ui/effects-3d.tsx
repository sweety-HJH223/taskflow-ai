'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const FloatingNode = ({ color, size, top, left, delay, duration }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        y: [0, -40, 0],
        rotate: [0, 180, 360],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut" 
      }}
      className="absolute rounded-lg border border-white/10 pointer-events-none z-0"
      style={{
        width: size,
        height: size,
        top,
        left,
        backgroundColor: `${color}10`,
        backdropFilter: 'blur(4px)',
      }}
    />
  )
}

export const Background3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <FloatingNode color="#b9ff66" size={100} top="15%" left="10%" delay={0} duration={8} />
      <FloatingNode color="#ec4899" size={60} top="40%" left="85%" delay={2} duration={10} />
      <FloatingNode color="#b9ff66" size={120} top="70%" left="15%" delay={1} duration={12} />
      <FloatingNode color="#ffffff" size={40} top="20%" left="70%" delay={3} duration={7} />
      <FloatingNode color="#ec4899" size={80} top="85%" left="80%" delay={4} duration={9} />
    </div>
  )
}

export const MouseLight = () => {
  const mouseRef = useRef({ x: 0, y: 0 })
  
  const handleMouseMove = (e: any) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
    const spotlight = document.getElementById('mouse-spotlight')
    if (spotlight) {
      spotlight.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(185, 255, 102, 0.08), transparent 40%)`
    }
  }

  return (
    <div 
      onMouseMove={handleMouseMove}
      id="mouse-spotlight"
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
    />
  )
}

export const PerspectiveSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      style={{
        perspective: "1000px",
        rotateX: springRotateX,
        scale: springScale,
        opacity
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
