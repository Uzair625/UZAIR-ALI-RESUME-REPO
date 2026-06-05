'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const facts = [
  { key: 'Location', val: 'Pakistan 🇵🇰' },
  { key: 'Email', val: 'uziikhan309@gmail.com', href: 'mailto:uziikhan309@gmail.com' },
  { key: 'LinkedIn', val: 'linkedin.com/in/uzair-ali', href: 'https://linkedin.com/in/uzair-ali' },
  { key: 'Portfolio', val: 'geniflyai.xyz', href: 'https://www.geniflyai.xyz/' },
  { key: 'GitHub', val: 'github.com/Uzair625', href: 'https://github.com/Uzair625' },
  { key: 'Education', val: 'BS Data Science (ongoing)' },
  { key: 'Target', val: '🇺🇸 US  🇨🇦 CA  🇦🇪 UAE  🇩🇪 DE' },
  { key: 'Freelance', val: 'Upwork · Fiverr · Open' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ paddingTop: 0 }}>
      <div className="container">
        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '5rem', alignItems: 'start',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">About Me</div>
            <h2 className="section-title">Builder. Automator.<br />Problem Solver.</h2>
            <div style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: 15 }}>
              I&apos;m a <strong style={{ color: 'var(--white)', fontWeight: 500 }}>Python Developer and AI Automation Specialist</strong> with 3+ years of hands-on experience building real products — not just scripts. My work spans Python REST APIs, Flutter mobile apps, LLM integrations, n8n workflow automation, and full-stack data analytics.
            </div>
            <div style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: 15 }}>
              At <strong style={{ color: 'var(--white)', fontWeight: 500 }}>Sarhad Cigarette Industries</strong>, I built Python automation pipelines, KPI dashboards, and MongoDB-backed analytics systems that eliminated manual reporting cycles. I currently freelance on Upwork, delivering AI automation solutions for international clients.
            </div>
            <div style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: 15 }}>
              I&apos;m also a <strong style={{ color: 'var(--white)', fontWeight: 500 }}>BS Data Science</strong> student actively transitioning into <strong style={{ color: 'var(--white)', fontWeight: 500 }}>AWS Data Engineering</strong>, with Amazon as my 2026 target employer. Alongside, I&apos;m building <strong style={{ color: 'var(--cyan)' }}>Genifly</strong> — a freemium AI-powered SaaS platform.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {facts.map((f) => (
                <div
                  key={f.key}
                  style={{
                    display: 'flex', alignItems: 'baseline', gap: '1rem',
                    padding: '14px 0', borderBottom: '1px solid var(--border)',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--muted)', minWidth: 110, flexShrink: 0,
                  }}>
                    {f.key}
                  </span>
                  <span style={{ fontSize: 14, color: 'var(--text)' }}>
                    {f.href ? (
                      <a href={f.href} target={f.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ color: 'var(--cyan)' }}>
                        {f.val}
                      </a>
                    ) : f.val}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
