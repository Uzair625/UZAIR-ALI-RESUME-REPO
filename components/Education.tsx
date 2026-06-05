'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const edu = [
  { icon: '🎓', degree: 'BS Data Science', school: 'University — Pakistan', period: 'Current · Early Semesters' },
  { icon: '☁️', degree: 'AWS Cloud Practitioner (CLF-C02)', school: 'Amazon Web Services', period: 'In Progress · 2026 Target' },
  { icon: '🏗', degree: 'AWS Solutions Architect (SAA-C03)', school: 'Amazon Web Services', period: 'Planned · Post CLF-C02' },
  { icon: '📡', degree: 'AWS Data Analytics Specialty (DAS-C01)', school: 'Amazon Web Services', period: 'Planned · 2026 Target' },
]

const langs = [
  { flag: '🇦🇫', name: 'Pashto', level: 'Native', label: 'Mother Tongue' },
  { flag: '🇬🇧', name: 'English', level: 'C1', label: 'Advanced' },
  { flag: '🇵🇰', name: 'Urdu', level: 'Fluent', label: 'Professional' },
  { flag: '🇩🇪', name: 'German', level: 'A1 → B1/B2', label: 'Learning (Target B2)' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" style={{ background: 'var(--bg2)' }}>
      <div className="container" ref={ref}>
        <div className="section-label">Education &amp; Certifications</div>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-sub">Formal education in data science combined with hands-on AWS and cloud certification path.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {edu.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '1.8rem',
                display: 'flex', gap: '1.2rem',
                transition: 'border-color .2s, transform .2s',
              }}
              whileHover={{ y: -4, borderColor: 'rgba(0,220,180,0.22)' } as any}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(0,220,180,0.1)', border: '1px solid rgba(0,220,180,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, flexShrink: 0,
              }}>
                {e.icon}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--white)', marginBottom: 3 }}>
                  {e.degree}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.06em', marginBottom: 4 }}>
                  {e.school}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>
                  {e.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <div className="section-label" style={{ marginTop: '4rem' }}>Languages</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
          {langs.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '1.4rem', textAlign: 'center',
                transition: 'border-color .2s, transform .2s',
              }}
              whileHover={{ y: -4, borderColor: 'rgba(0,220,180,0.22)' } as any}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>{l.flag}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>
                {l.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em' }}>
                {l.level}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 3 }}>{l.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #education .container > div:nth-child(4) { grid-template-columns: 1fr !important; }
          #education .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #education .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
