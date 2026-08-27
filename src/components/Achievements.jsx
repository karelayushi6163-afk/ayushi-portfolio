import { motion } from 'framer-motion'
import { Medal, Award, Wrench } from 'lucide-react'
import { achievementGroups } from '../data/portfolioData'

const ICONS = { medal: Medal, award: Award, workshop: Wrench }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: (i % 3) * 0.07 },
  }),
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 bg-surface/40">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow">Achievements</span>
          <h2 className="heading-2 mt-3 mb-4">Recognition & certifications</h2>
          <p className="body-muted text-lg">
            Organized highlights from competitions, certifications, and workshops.
          </p>
        </motion.div>

        <div className="flex flex-col gap-14">
          {achievementGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-6">
                {group.heading}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((a, i) => {
                  const Icon = ICONS[a.icon] ?? Award
                  const isMedal = a.icon === 'medal'
                  return (
                    <motion.div
                      key={a.title}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeUp}
                      custom={i}
                      whileHover={{ y: -5 }}
                      className={`glass-panel p-5 flex items-start gap-4 transition-shadow hover:shadow-glow ${
                        isMedal ? 'ring-1 ring-signal-teal/30' : ''
                      }`}
                    >
                      <div
                        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                          isMedal ? 'bg-signal-teal/15' : 'bg-signal-blue/10'
                        }`}
                      >
                        <Icon size={17} className={isMedal ? 'text-signal-teal' : 'text-signal-blue'} />
                      </div>
                      <div>
                        <h4 className="font-display font-medium text-fg leading-snug mb-1 text-sm">
                          {a.title}
                        </h4>
                        <p className="text-fg-faint text-xs font-mono">{a.issuer}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
