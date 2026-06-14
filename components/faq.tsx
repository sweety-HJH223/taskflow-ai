'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Is this free?',
      answer: 'TaskFlow offers a free tier for solo freelancers with essential features. Premium plans for agencies start at $49/month.'
    },
    {
      question: 'What tools does it connect to?',
      answer: 'We integrate with Stripe, PayPal, Slack, Gmail, Google Calendar, Asana, Monday.com, and more. New integrations are added monthly.'
    },
    {
      question: 'Is my data private?',
      answer: 'Yes. We use end-to-end encryption, never sell your data, and comply with GDPR and SOC 2 standards.'
    },
    {
      question: 'When does it launch?',
      answer: 'Early access is available now for the first 500 users. General availability is planned for Q3 2026.'
    },
    {
      question: 'Who is this for?',
      answer: 'TaskFlow is designed for independent freelancers, digital agencies, contractors, and small service businesses managing multiple clients.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  } as const

  return (
    <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-black tracking-[0.3em] text-[#b9ff66] uppercase mb-6 text-center"
        >
          Got Questions?
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter leading-[1]"
        >
          Frequently Asked <br/> <span className="text-white/60 italic font-medium">Questions.</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-border/50 rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm hover:border-[#b9ff66]/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 bg-transparent hover:bg-white/[0.02] transition-colors text-left"
              >
                <span className="text-lg md:text-xl font-bold text-white tracking-tight">{faq.question}</span>
                <div className={`p-1.5 rounded-full bg-white/5 transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-[#b9ff66]/10' : ''}`}>
                  <ChevronDown
                    size={20}
                    className={openIndex === index ? 'text-[#b9ff66]' : 'text-white/40'}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-0 text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
