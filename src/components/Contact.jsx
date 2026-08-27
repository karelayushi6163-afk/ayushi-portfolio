import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { profile } from '../data/portfolioData'

// ── Formspree setup ──────────────────────────────────────────
// 1. Create a free form at https://formspree.io
// 2. Copy your form endpoint (looks like https://formspree.io/f/xxxxabcd)
// 3. Paste it below, replacing the placeholder.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      // Honest failure state — never fake a successful submission.
      setStatus('error')
      return
    }

    setStatus('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const contactTiles = [
    {
      icon: Phone,
      label: 'Phone',
      value: profile.links.phone,
      href: `tel:${profile.links.phoneRaw}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: profile.links.email,
      href: `mailto:${profile.links.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'karelayushi6163-afk',
      href: profile.links.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ayushi Karel',
      href: profile.links.linkedin,
      external: true,
    },
  ]

  return (
    <section id="contact" className="relative py-28 bg-surface/40">
      <div className="section-shell">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Contact</span>
            <h2 className="heading-2 mt-3 mb-5">Let's connect</h2>
            <p className="body-muted text-lg mb-9 max-w-md">
              Open to internship opportunities, collaboration, or just a conversation about
              tech. Reach out directly or through the form.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactTiles.map((tile) => (
                <a
                  key={tile.label}
                  href={tile.href}
                  target={tile.external ? '_blank' : undefined}
                  rel={tile.external ? 'noopener noreferrer' : undefined}
                  className="glass-panel flex items-center gap-4 p-4 hover:border-signal-blue/40 transition-colors group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-signal-blue/10 transition-colors">
                    <tile.icon size={17} className="text-signal-blue" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-fg">{tile.label}</p>
                    <p className="text-xs text-fg-faint truncate">{tile.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-fg-muted mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:border-signal-blue/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-fg-muted mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:border-signal-blue/50 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="block text-xs font-mono text-fg-muted mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:border-signal-blue/50 focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-mono text-fg-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:border-signal-blue/50 focus:outline-none transition-colors resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-signal-blue to-signal-indigo text-white font-medium text-sm shadow-glow hover:shadow-[0_0_50px_-8px_rgba(91,141,239,0.65)] transition-shadow disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
              <Send size={15} />
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-signal-teal text-sm mt-4">
                <CheckCircle2 size={16} /> Message sent — thank you! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-red-400 text-sm mt-4">
                <AlertCircle size={16} />
                {FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')
                  ? "Form not connected yet — add your Formspree endpoint in Contact.jsx. Nothing was sent."
                  : 'Something went wrong — please try again or reach out via phone/email above.'}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
