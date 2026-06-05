'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const contacts = [
  { icon: '✉', type: 'Email', val: 'uziikhan309@gmail.com', href: 'mailto:uziikhan309@gmail.com' },
  { icon: '💼', type: 'LinkedIn', val: 'linkedin.com/in/uzair-ali', href: 'https://linkedin.com/in/uzair-ali' },
  { icon: '🌐', type: 'Portfolio', val: 'geniflyai.xyz', href: 'https://www.geniflyai.xyz/' },
  { icon: '⌨', type: 'GitHub', val: 'github.com/Uzair625', href: 'https://github.com/Uzair625' },
  { icon: '🔧', type: 'Freelance', val: 'Upwork · Fiverr · Open to projects' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" style={{ background: 'var(--bg)' }}>
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
            <div className="section-label">Get In Touch</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800, color: 'var(--white)',
              lineHeight: 1.15, marginBottom: '1.2rem',
            }}>
              Let&apos;s build<br />something <span style={{ color: 'var(--cyan)' }}>great</span><br />together.
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: 15, lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Open to remote roles as AI Automation Engineer, Python Developer, Flutter Developer, or Generative AI Engineer. Also available for freelance projects on Upwork and Fiverr.
              <br /><br />
              Target markets: 🇺🇸 US · 🇨🇦 Canada · 🇦🇪 UAE · 🇩🇪 Germany
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,220,180,0.08)', border: '1px solid rgba(0,220,180,0.25)',
              padding: '6px 14px', borderRadius: 20,
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.08em', color: 'var(--cyan)',
              marginBottom: '1.5rem',
            }}>
              <span className="avail-dot" />
              Available Now — Immediate Start
            </div>
            <br />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <a
                href="mailto:uziikhan309@gmail.com"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em',
                  fontWeight: 700, padding: '13px 28px', background: 'var(--cyan)',
                  color: 'var(--bg)', borderRadius: 8, display: 'inline-flex',
                  alignItems: 'center', gap: 8, transition: 'all .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--cyan2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--cyan)'; e.currentTarget.style.transform = 'none' }}
              >
                ✉ Email Me
              </a>
              <a
                href="https://linkedin.com/in/uzair-ali"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em',
                  fontWeight: 700, padding: '13px 28px', border: '1px solid var(--border2)',
                  color: 'var(--text)', borderRadius: 8, display: 'inline-flex',
                  alignItems: 'center', gap: 8, transition: 'all .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'none' }}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 1 }}
          >
            {contacts.map((c) => (
              <div
                key={c.type}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1.2rem',
                  padding: '1rem 0', borderBottom: '1px solid var(--border)',
                  transition: 'border-color .2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border2)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: 'rgba(0,220,180,0.08)', border: '1px solid var(--border2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)',
                  }}>
                    {c.type}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--white)' }}>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        style={{ color: 'var(--text)', transition: 'color .2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
                      >
                        {c.val}
                      </a>
                    ) : c.val}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
