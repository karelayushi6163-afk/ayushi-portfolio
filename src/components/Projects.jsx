import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects, moreProjects, profile } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: (i % 3) * 0.08 },
  }),
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8 }}
      className="group relative glass-panel p-7 flex flex-col overflow-hidden transition-shadow hover:shadow-glow"
    >
      {/* subtle corner glow on hover */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-signal-blue/0 group-hover:bg-signal-blue/10 blur-3xl transition-colors duration-500" />

      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-signal-blue/20 to-signal-violet/20 flex items-center justify-center font-mono text-signal-blue text-sm font-semibold">
          {project.title.charAt(0)}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} GitHub repository`}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-fg-muted hover:text-white hover:border-signal-blue/50 transition-colors"
        >
          <Github size={15} />
        </a>
      </div>

      <h3 className="font-display font-semibold text-lg text-fg mb-2.5">
        {project.title}
      </h3>
      <p className="body-muted text-sm mb-5 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-fg-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-signal-blue hover:text-signal-indigo transition-colors"
        >
          View Project
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-fg transition-colors"
          >
            Live Demo
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow">Projects</span>
          <h2 className="heading-2 mt-3 mb-4">Featured Projects</h2>
          <p className="body-muted text-lg">
            A selection of projects spanning AI agents, applied machine learning, and core programming fundamentals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {moreProjects.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
            className="mt-16 glass-panel p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-display font-semibold text-lg text-fg mb-2">
                More Projects
              </h3>
              <p className="body-muted text-sm">
                {moreProjects.map((p) => p.title).join(', ')} — and more, all on GitHub.
              </p>
            </div>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 text-fg font-medium text-sm hover:border-signal-blue/50 hover:bg-white/[0.03] transition-colors whitespace-nowrap"
            >
              <Github size={16} />
              View GitHub Profile
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
