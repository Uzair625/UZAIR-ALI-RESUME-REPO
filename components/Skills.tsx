'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCards = [
  {
    icon: '🐍', title: 'Python & Backend',
    tags: [
      { label: 'Python', hot: true }, { label: 'FastAPI' }, { label: 'Django' },
      { label: 'Flask' }, { label: 'REST APIs' }, { label: 'Streamlit' },
      { label: 'pandas' }, { label: 'NumPy' },
    ],
  },
  {
    icon: '📱', title: 'Mobile & Frontend',
    tags: [
      { label: 'Flutter', hot: true }, { label: 'Dart' }, { label: 'GetX' },
      { label: 'Firebase' }, { label: 'HTML/CSS' }, { label: 'JavaScript' },
      { label: 'React (learning)' },
    ],
  },
  {
    icon: '🤖', title: 'AI & LLM Integration',
    tags: [
      { label: 'Claude API', hot: true }, { label: 'GPT-4o-mini', hot: true },
      { label: 'Groq API' }, { label: 'Gemini' }, { label: 'LLM Prompting' }, { label: 'AI Agents' },
    ],
  },
  {
    icon: '⚡', title: 'Automation & Workflows',
    tags: [
      { label: 'n8n', hot: true }, { label: 'Zapier' }, { label: 'WhatsApp API' },
      { label: 'Green API' }, { label: 'Google Sheets API' }, { label: 'Gmail API' },
      { label: 'Selenium' },
    ],
  },
  {
    icon: '🗄', title: 'Databases & Cloud',
    tags: [
      { label: 'MongoDB' }, { label: 'PostgreSQL' }, { label: 'MySQL' },
      { label: 'Firebase' }, { label: 'AWS (learning)', hot: true },
      { label: 'S3' }, { label: 'Supabase' },
    ],
  },
  {
    icon: '📊', title: 'Data & ML',
    tags: [
      { label: 'scikit-learn', hot: true }, { label: 'matplotlib' }, { label: 'seaborn' },
      { label: 'Looker Studio' }, { label: 'GA4' }, { label: 'Jupyter' }, { label: 'Excel' },
    ],
  },
]

function Tag({ label, hot }: { label: string; hot?: boolean }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 10.5,
      padding: '3px 9px', borderRadius: 4,
      background: hot ? 'rgba(255,183,0,0.08)' : 'rgba(0,220,180,0.07)',
      border: `1px solid ${hot ? 'rgba(255,183,0,0.2)' : 'rgba(0,220,180,0.12)'}`,
      color: hot ? 'var(--gold)' : 'var(--text2)',
    }}>
      {label}
    </span>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-label">Technical Skills</div>
        <h2 className="section-title">What I Work With</h2>
        <p className="section-sub">Full-stack technical breadth across Python, mobile, AI/ML, automation, and data engineering.</p>

        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem',
        }}>
          {skillCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '1.6rem',
                transition: 'border-color .2s, transform .2s',
                cursor: 'default',
              }}
              whileHover={{ y: -4, borderColor: 'rgba(0,220,180,0.22)' } as any}
            >
              <div style={{ fontSize: 22, marginBottom: '0.8rem' }}>{card.icon}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
                color: 'var(--white)', marginBottom: '1rem',
              }}>
                {card.title}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {card.tags.map((t) => <Tag key={t.label} {...t} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #skills .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
