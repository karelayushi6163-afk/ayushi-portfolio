import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { profile, projects, moreProjects } from '../data/portfolioData'

export default function GithubCTA() {
  const totalShown = projects.length + moreProjects.length

  return (
    <section className="relative py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass-panel relative overflow-hidden p-10 sm:p-14 text-center"
        >
          <div className="absolute inset-0 bg-aurora-glow opacity-60" />
          <div className="relative">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-6">
              <Github size={24} className="text-fg" />
            </div>
            <h2 className="heading-2 mb-4">Explore more on GitHub</h2>
            <p className="body-muted max-w-lg mx-auto mb-8">
              {totalShown} projects featured here, with more experiments and works-in-progress
              on my profile — from AI agents to core programming exercises.
            </p>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-signal-blue to-signal-indigo text-white font-medium text-sm shadow-glow hover:shadow-[0_0_50px_-8px_rgba(91,141,239,0.65)] transition-shadow"
            >
              @karelayushi6163-afk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
