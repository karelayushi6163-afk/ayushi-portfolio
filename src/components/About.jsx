import { motion } from 'framer-motion'
import { GraduationCap, Sparkles, Target, Cpu } from 'lucide-react'
import { about, education } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-2xl mb-12"
        >
          <span className="eyebrow">About</span>
          <h2 className="heading-2 mt-3 mb-5">A little about how I got here</h2>
          <p className="body-muted text-lg mb-4">{about.intro}</p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid grid-cols-3 gap-4 mb-12 max-w-xl"
        >
          {about.stats.map((s) => (
            <div key={s.label} className="glass-panel px-3 py-5 text-center">
              <p className="font-display text-xl sm:text-2xl font-semibold leading-tight bg-gradient-to-r from-signal-blue to-signal-violet bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-fg-muted text-xs mt-1.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col gap-5"
          >
            <div className="glass-panel p-6">
              <div className="w-10 h-10 rounded-xl bg-signal-teal/10 flex items-center justify-center mb-4">
                <Sparkles size={18} className="text-signal-teal" />
              </div>
              <h3 className="font-display font-semibold text-fg mb-2">Currently learning</h3>
              <p className="body-muted text-sm">{about.currentlyLearning}</p>
            </div>
            <div className="glass-panel p-6">
              <div className="w-10 h-10 rounded-xl bg-signal-violet/10 flex items-center justify-center mb-4">
                <Target size={18} className="text-signal-violet" />
              </div>
              <h3 className="font-display font-semibold text-fg mb-2">Where I'm headed</h3>
              <p className="body-muted text-sm">{about.aspiration}</p>
            </div>
            <div className="glass-panel p-6">
              <div className="w-10 h-10 rounded-xl bg-signal-blue/10 flex items-center justify-center mb-4">
                <Cpu size={18} className="text-signal-blue" />
              </div>
              <h3 className="font-display font-semibold text-fg mb-3">What I'm into</h3>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="font-mono text-[11px] px-2.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-fg-muted"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education — dot/line rendered in its own flex column so it can
              never overlap the text next to it, on any screen size. */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            id="education"
            className="glass-panel p-7 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-7">
              <GraduationCap size={20} className="text-signal-blue" />
              <h3 className="font-display font-semibold text-fg">Education</h3>
            </div>
            <div className="flex flex-col">
              {education.map((edu, i) => (
                <div key={i} className="flex gap-4 sm:gap-5">
                  {/* Dot + connecting line column */}
                  <div className="flex flex-col items-center shrink-0 w-3">
                    <span className="w-3 h-3 rounded-full bg-signal-blue ring-4 ring-signal-blue/15 shrink-0 mt-1.5" />
                    {i < education.length - 1 && (
                      <span className="w-px flex-1 bg-white/10 my-1.5" aria-hidden="true" />
                    )}
                  </div>

                  {/* Content column */}
                  <div className={i < education.length - 1 ? 'pb-8' : ''}>
                    <p className="font-mono text-xs text-signal-blue/90 mb-1.5 tracking-wide">
                      {edu.period}
                    </p>
                    <h4 className="font-display text-fg font-medium leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="body-muted text-sm mt-0.5">{edu.institution}</p>
                    <p className="text-fg-faint text-xs mt-1.5">{edu.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
