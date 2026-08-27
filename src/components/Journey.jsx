import { motion } from 'framer-motion'
import { journey } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.06 },
  }),
}

export default function Journey() {
  return (
    <section id="journey" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="eyebrow">Journey</span>
          <h2 className="heading-2 mt-3 mb-4">How I got here</h2>
          <p className="body-muted text-lg">
            A timeline of milestones — from finishing school to building my first AI agents.
          </p>
        </motion.div>

        {/* Left-aligned dot/line timeline. The dot+connector live in their own
            fixed-width column so they can never sit under the year or text,
            on any screen size. */}
        <div className="max-w-2xl">
          {journey.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={i}
              className="flex gap-5 sm:gap-6"
            >
              {/* Dot + connecting line column */}
              <div className="flex flex-col items-center shrink-0 w-3">
                <span className="w-3 h-3 rounded-full bg-signal-blue ring-4 ring-signal-blue/15 shrink-0 mt-1.5" />
                {i < journey.length - 1 && (
                  <span className="w-px flex-1 bg-white/10 my-1.5" aria-hidden="true" />
                )}
              </div>

              {/* Content column */}
              <div className={`glass-panel p-5 sm:p-6 mb-8 w-full ${i < journey.length - 1 ? '' : ''}`}>
                <p className="font-mono text-xs text-signal-blue/90 mb-1.5 tracking-wide">
                  {item.period}
                </p>
                <h3 className="font-display font-semibold text-fg mb-1.5">{item.title}</h3>
                <p className="body-muted text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
