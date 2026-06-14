'use client'

import { motion } from 'framer-motion'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect your workspace',
      description: 'Link TaskFlow to your existing tools and services'
    },
    {
      number: '02',
      title: 'AI maps your workflow',
      description: 'Our AI learns your patterns and optimizes your processes'
    },
    {
      number: '03',
      title: 'Everything runs itself',
      description: 'Sit back and watch automation handle your admin work'
    }
  ]

  return (
    <section id="howitworks" className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-black tracking-[0.3em] text-[#b9ff66] uppercase mb-6"
        >
          The Process
        </motion.p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-20 tracking-tighter leading-[1]">
          Simple steps to <br/> <span className="text-white/60 italic font-medium">full automation.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 perspective-[2000px]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: index % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 50
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -20,
                rotateY: 0,
                z: 50,
                boxShadow: "0 30px 60px rgba(185, 255, 102, 0.15)"
              }}
              className="relative p-10 bg-card border-2 border-border/50 rounded-[3rem] shadow-2xl group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Number Background */}
              <div className="absolute -top-10 -left-6 text-[10rem] font-black text-white/[0.03] pointer-events-none select-none">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#b9ff66]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#b9ff66]/20">
                   <span className="text-2xl font-black text-[#b9ff66]">{step.number}</span>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted text-lg font-medium leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-10 flex items-center gap-2 text-[10px] font-black text-[#b9ff66] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-2 h-2 bg-[#b9ff66] rounded-full animate-pulse" />
                   Processing Engine
                </div>
              </div>

              {/* Reflection Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
