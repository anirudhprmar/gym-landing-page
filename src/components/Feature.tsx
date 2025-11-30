"use client"
import React, { RefObject } from 'react'
import { Dumbbell, Users, HeartPulse, Trophy } from 'lucide-react'
import { motion } from 'motion/react'

interface refInfo {
  featureRef?: RefObject<HTMLDivElement | null>
}

const programs = [
  {
    title: "Strength Training",
    description: "Build raw power and muscle mass with our expert-led strength programs designed for all levels.",
    icon: Dumbbell,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    title: "Yoga & Flexibility",
    description: "Enhance your mobility, balance, and mental clarity with our comprehensive yoga sessions.",
    icon: Users, // Using Users as a placeholder for Yoga/Group
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20"
  },
  {
    title: "Body Building",
    description: "Sculpt your physique with targeted hypertrophy training and nutritional guidance.",
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20"
  },
  {
    title: "Weight Loss",
    description: "Achieve your ideal weight through high-intensity interval training and cardio circuits.",
    icon: HeartPulse,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20"
  }
]

export default function Feature({ featureRef }: refInfo) {
  return (
    <section ref={featureRef} id="programs" className='py-24 bg-zinc-950 relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-50 pointer-events-none"></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight'
          >
            ELITE <span className='text-primary'>PROGRAMS</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-zinc-400 max-w-2xl mx-auto text-lg'
          >
            Choose the path that fits your goals. Our specialized programs are designed to push you to your limits and beyond.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-2xl border ${program.border} bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-900 transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${program.bg} to-transparent pointer-events-none`}></div>

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${program.bg} ${program.color} group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-8 h-8" />
              </div>

              <h4 className='text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors'>{program.title}</h4>
              <p className='text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors'>
                {program.description}
              </p>

              <div className='mt-6 flex items-center text-sm font-medium text-zinc-500 group-hover:text-white transition-colors'>
                Learn more <span className='ml-2 group-hover:translate-x-1 transition-transform'>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
