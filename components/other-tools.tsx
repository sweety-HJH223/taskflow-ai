'use client'

import { motion } from 'framer-motion'

const tools = [
  {
    name: 'Vibe Weather 🌦️',
    description: 'Real-time bilingual weather app with EN/KO language switching',
    tag: 'Live Project',
    url: 'https://korean-weather-app.vercel.app'
  },
  {
    name: 'K-Trust 🏢',
    description: 'AI-powered Korean market compliance portal using Gemini 2.5',
    tag: 'AI Powered',
    url: 'https://project-4xzgu-blush.vercel.app/'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const

export function OtherTools() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-black tracking-[0.3em] text-[#b9ff66] uppercase mb-6"
        >
          More from the Lab
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white mb-20 tracking-tighter leading-[0.9]"
        >
          Real tools. Real AI. <br/> <span className="text-muted italic">Already live.</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.a 
              key={index} 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group flex flex-col p-10 bg-card border-2 border-border/50 rounded-[2.5rem] hover:border-[#b9ff66]/40 transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b9ff66]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-black bg-[#b9ff66]/10 text-[#b9ff66] px-4 py-1.5 rounded-full border border-[#b9ff66]/20 tracking-widest uppercase">
                  {tool.tag}
                </span>
                <div className="text-[#b9ff66] text-4xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">↗</div>
              </div>

              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">{tool.name}</h3>
              <p className="text-muted text-lg font-medium leading-relaxed mb-8">{tool.description}</p>
              
              <div className="mt-auto">
                <span className="text-[#b9ff66] text-sm font-black uppercase tracking-widest group-hover:underline decoration-2 underline-offset-8 transition-all">
                  Launch Application
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
