import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowRight, Mail, FileDown } from 'lucide-react'
import { profile } from '../data/portfolioData'
import profilePhoto from '../assets/profile.jpg'

function useTypewriter(words, speed = 80, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, pause])

  return text
}

export default function Hero() {
  const roleText = useTypewriter(profile.roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
      <div className="absolute inset-0 bg-aurora-glow" />

      <div className="section-shell relative grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-teal animate-pulse" />
            Computer Science Engineering Student
          </span>

          <h1 className="heading-2 !text-4xl sm:!text-5xl lg:!text-6xl leading-[1.08] mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-signal-blue to-signal-violet bg-clip-text text-transparent">
              Ayushi Karel
            </span>
          </h1>

          <p className="text-fg-secondary font-medium text-lg mb-6">{profile.title}</p>

          {/* Signature element: code-line role typer */}
          <div className="font-mono text-base sm:text-lg mb-7 rounded-xl border border-white/10 bg-black/20 px-5 py-4 inline-block max-w-full">
            <span className="text-fg-faint">const</span>{' '}
            <span className="text-signal-teal">role</span>{' '}
            <span className="text-fg-faint">=</span>{' '}
            <span className="text-signal-blue">
              "{roleText}
              <span className="border-r-2 border-signal-blue animate-blink ml-0.5" />"
            </span>
            <span className="text-fg-faint">;</span>
          </div>

          <p className="body-muted text-lg max-w-xl mb-10">{profile.intro}</p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-signal-blue to-signal-indigo text-white font-medium text-sm shadow-glow hover:shadow-[0_0_50px_-8px_rgba(91,141,239,0.65)] transition-shadow"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Ayushi_Karel_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-signal-teal/40 text-signal-teal font-medium text-sm hover:bg-signal-teal/10 hover:border-signal-teal/60 transition-colors"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-fg font-medium text-sm hover:border-signal-blue/50 hover:text-white transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-fg-secondary hover:text-white hover:border-signal-blue/50 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-fg-secondary hover:text-white hover:border-signal-blue/50 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto lg:mx-0"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto animate-float">
            {/* Rotating dashed ring */}
            <div className="absolute -inset-5 rounded-[2.2rem] border border-dashed border-signal-blue/25 animate-spin-slow" />
            {/* Glow */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-signal-blue/30 to-signal-violet/30 blur-2xl" />
            {/* Frame */}
            <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden border border-white/15 shadow-glow-violet">
              <img
                src={profilePhoto}
                alt="Ayushi Karel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
