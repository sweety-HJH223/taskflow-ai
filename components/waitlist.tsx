'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const FORMSPREE_ID = 'mnjylgjw'
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setSuccess(true)
        setEmail('')
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="py-40 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#b9ff66]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-black tracking-[0.4em] text-[#b9ff66] uppercase mb-8"
        >
          Limited Early Access
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
        >
          JOIN THE <br/> <span className="text-accent italic">WAITLIST.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/70 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium"
        >
          Over <span className="text-white font-bold">2,400+ freelancers</span> are already automating their futures.
        </motion.p>

        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-accent text-black px-10 py-6 rounded-3xl font-black text-xl inline-block shadow-[0_0_50px_rgba(185,255,102,0.3)]"
          >
            🎉 YOU&apos;RE ON THE LIST!
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-8 py-5 bg-white/5 text-white placeholder-white/20 border-2 border-white/10 rounded-2xl focus:outline-none focus:border-accent transition-all w-full text-lg font-bold"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-5 bg-accent text-black font-black text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(185,255,102,0.2)] whitespace-nowrap disabled:opacity-50"
            >
              {loading ? 'SECURE ACCESS...' : 'JOIN NOW →'}
            </button>
          </motion.form>
        )}

        {error && (
          <p className="text-red-400 text-sm mt-6 font-bold uppercase tracking-widest">{error}</p>
        )}
      </div>
    </section>
  )
}
