import React from 'react'

export function Marquee() {
  const items = [
    'SMART INVOICING',
    'CLIENT TRACKING',
    'AI TASK BREAKDOWN',
    'AUTO REMINDERS',
    'TIME TRACKING',
    'PROJECT TEMPLATES'
  ]

  return (
    <div className="w-full bg-secondary py-6 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .marquee {
          display: flex;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-8 whitespace-nowrap">
            <span className="text-white text-sm font-semibold tracking-wide">{item}</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
          </div>
        ))}
      </div>
    </div>
  )
}
