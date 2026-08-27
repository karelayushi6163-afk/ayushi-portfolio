import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolioData'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="section-shell py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-fg">Ayushi Karel</p>
          <p className="text-fg-faint text-xs mt-1">
            Designed and built with curiosity and code.
          </p>
        </div>

        <nav className="flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-fg-muted hover:text-signal-blue transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-fg-muted hover:text-white hover:border-signal-blue/50 transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-fg-muted hover:text-white hover:border-signal-blue/50 transition-colors"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>
      <div className="section-shell pb-8">
        <p className="text-center text-fg-faint text-xs">
          © {year} Ayushi Karel. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
