'use client'

import { motion } from 'framer-motion'

export function Problem() {
  const stats = [
    { value: '47%', label: 'of freelancers miss invoices' },
    { value: '3.2hrs', label: 'lost daily to context switching' },
    { value: '68%', label: 'forget to follow up with clients' }
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
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:sticky md:top-32"
          >
            <h2 className="text-5xl md:text-6xl font-black leading-[1] tracking-tighter text-white">
              You&apos;re losing <span className="text-[#b9ff66] italic">12 hours</span> a week to admin work.
            </h2>
            <p className="text-lg text-white/70 mt-6 max-w-md font-medium">
              Manual tasks are killing your creative flow and limiting your agency&apos;s growth potential.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-card border border-border/50 rounded-3xl p-8 hover:border-[#b9ff66]/30 hover:bg-card/80 transition-all group"
              >
                <div className="text-5xl font-black text-[#b9ff66] mb-3 tracking-tighter group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-white/90 text-lg font-bold leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
