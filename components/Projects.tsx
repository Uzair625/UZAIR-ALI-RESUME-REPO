'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    emoji: '🍔', title: 'Hunger Point',
    desc: 'Full-featured Flutter food delivery app for a real restaurant client at Taj Plaza, Shewa Adda. Firebase Phone OTP (Pakistani +92 numbers), GetX state management, Cheezious-inspired yellow/white design. 75+ menu items across 6 categories. COD + Bank Transfer payments. 144 files shipped.',
    tags: ['Flutter', 'Firebase', 'GetX', 'Python/Pillow', 'Dart'],
    links: [{ label: 'Flutter' }, { label: 'Firebase' }],
  },
  {
    emoji: '🤖', title: 'El10:AI — Attendance System',
    desc: 'AI-powered school attendance system. Students scan barcodes → n8n 12-node workflow → Groq AI classifies attendance → Google Sheets logging → Gmail parent alerts. Dark-themed frontend. Fully deployed and live.',
    tags: ['n8n', 'Groq API', 'Google Sheets', 'Gmail API', 'HTML/CSS/JS'],
    links: [{ label: 'GitHub', href: 'https://github.com/Uzair625' }],
  },
  {
    emoji: '📦', title: 'WhatsApp Ordering Bot',
    desc: 'End-to-end WhatsApp ordering automation for Hunger Point restaurant. Customers order via WhatsApp — Claude API reads the message, extracts items, confirms the order, and logs to Google Sheets. Zero human intervention. Built on n8n with Green API.',
    tags: ['n8n', 'Claude API', 'WhatsApp Cloud API', 'Green API', 'Google Sheets'],
    links: [{ label: 'Automation' }],
  },
  {
    emoji: '📊', title: 'Supply Chain Analytics',
    desc: 'End-to-end ML pipeline on DataCo Kaggle dataset (180K rows). Cleaned data, built KPI pipeline, trained Logistic Regression, Random Forest, and Gradient Boosting classifiers. Word report + PowerPoint deck. 87% model accuracy.',
    tags: ['Python', 'pandas', 'scikit-learn', 'matplotlib', 'Jupyter'],
    links: [{ label: 'GitHub', href: 'https://github.com/Uzair625/DATA-ANALYSIS-PROJECTS' }],
  },
  {
    emoji: '🏢', title: 'HR Analytics Dashboard',
    desc: 'Dark-themed Streamlit app with MongoDB backend delivering KPI cards for headcount, attrition, and salary. Full CRUD operations, interactive filters, and chart visualizations. Portfolio-ready production dashboard.',
    tags: ['Python', 'Streamlit', 'MongoDB', 'pandas', 'seaborn'],
    links: [{ label: 'Streamlit' }, { label: 'MongoDB' }],
  },
  {
    emoji: '💬', title: 'WhatsApp AI Chatbot',
    desc: 'Production Flask app with GPT-4o-mini integration for intelligent WhatsApp replies. Intent classification, full conversation history in MongoDB, button and list message support. Template-ready for client deployments.',
    tags: ['Flask', 'OpenAI GPT-4o-mini', 'MongoDB', 'WhatsApp Cloud API'],
    links: [{ label: 'Flask' }, { label: 'OpenAI' }],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-label">Projects</div>
        <h2 className="section-title">Things I&apos;ve Built</h2>
        <p className="section-sub">Real-world projects across mobile, AI automation, data analytics, and machine learning.</p>

        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem',
        }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'border-color .25s, transform .25s, box-shadow .25s',
                position: 'relative', cursor: 'default',
              }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(0,220,180,0.22)',
                boxShadow: '0 20px 48px rgba(0,0,0,0.4)',
              } as any}
            >
              {/* Top gradient bar on hover — via CSS */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
              }} />

              <div style={{ padding: '1.6rem 1.6rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 28, lineHeight: 1 }}>{p.emoji}</span>
                <div style={{ display: 'flex', gap: 10 }}>
                  {p.links.map((l: { label: string; href?: string }) => (
                    l.href ? (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-mono)', fontSize: 10,
                          letterSpacing: '0.1em', color: 'var(--muted)',
                          padding: '4px 10px', border: '1px solid var(--border)',
                          borderRadius: 4, transition: 'all .2s', textTransform: 'uppercase',
                        }}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <span key={l.label} style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: '0.1em', color: 'var(--muted)',
                        padding: '4px 10px', border: '1px solid var(--border)',
                        borderRadius: 4, textTransform: 'uppercase',
                      }}>
                        {l.label}
                      </span>
                    )
                  ))}
                </div>
              </div>

              <div style={{ padding: '1.2rem 1.6rem', flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700,
                  color: 'var(--white)', marginBottom: '0.5rem',
                }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--text2)', lineHeight: 1.65 }}>
                  {p.desc}
                </div>
              </div>

              <div style={{ padding: '1rem 1.6rem 1.6rem', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    letterSpacing: '0.05em', padding: '3px 8px', borderRadius: 3,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                    color: 'var(--text2)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Genifly upcoming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            marginTop: '2rem', padding: '1.8rem',
            background: 'var(--card)',
            border: '1px dashed rgba(0,220,180,0.22)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: 32 }}>🚀</span>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700,
              color: 'var(--white)', marginBottom: 4,
            }}>
              Genifly — AI SaaS Platform{' '}
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gold)',
                background: 'rgba(255,183,0,0.1)', border: '1px solid rgba(255,183,0,0.2)',
                padding: '2px 10px', borderRadius: 20, marginLeft: 8,
              }}>
                In Development
              </span>
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--text2)', lineHeight: 1.6 }}>
              Freemium AI-powered web tools SaaS platform with dark gold/purple brand identity. React frontend + FastAPI backend + Supabase database. Hosted on Vercel + Railway.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['React', 'FastAPI', 'Supabase', 'Vercel', 'Railway'].map((t) => (
              <span key={t} style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                padding: '3px 8px', borderRadius: 3,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                color: 'var(--text2)',
              }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects .container > div:nth-child(4) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #projects .container > div:nth-child(4) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
