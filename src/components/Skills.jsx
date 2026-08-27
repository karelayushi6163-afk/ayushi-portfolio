import { motion } from 'framer-motion'
import {
  Code2,
  Globe,
  Wrench,
  Compass,
  ChevronRight,
} from 'lucide-react'
import { skills } from '../data/portfolioData'

const CATEGORY_META = {
  'Programming Languages': { icon: Code2, color: 'text-signal-blue', bg: 'bg-signal-blue/10' },
  'Web Technologies': { icon: Globe, color: 'text-signal-teal', bg: 'bg-signal-teal/10' },
  'Tools & Platforms': { icon: Wrench, color: 'text-signal-violet', bg: 'bg-signal-violet/10' },
  'Exploring / Interests': { icon: Compass, color: 'text-signal-indigo', bg: 'bg-signal-indigo/10' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 },
  }),
}

export default function Skills() {
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="relative py-28 bg-surface/40">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow">Skills</span>
          <h2 className="heading-2 mt-3 mb-4">What I work with</h2>
          <p className="body-muted text-lg">
            Grouped by how I actually use them — not arbitrary percentages.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map(([category, list], i) => {
            const meta = CATEGORY_META[category] ?? CATEGORY_META.Tools
            const Icon = meta.icon
            return (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -6 }}
                className="glass-panel p-7 group transition-shadow hover:shadow-glow"
              >
                <div className={`w-11 h-11 rounded-xl ${meta.bg} flex items-center justify-center mb-5`}>
                  <Icon size={20} className={meta.color} />
                </div>
                <h3 className="font-display font-semibold text-lg text-fg mb-4">
                  {category}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {list.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-fg-secondary group-hover:text-fg transition-colors"
                    >
                      <ChevronRight size={14} className={meta.color} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
