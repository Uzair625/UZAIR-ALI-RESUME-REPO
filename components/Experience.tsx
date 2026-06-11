'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const jobs = [
  {
    role: 'AI Automation Developer',
    company: 'Freelance — Upwork / Fiverr',
    period: '2024 — 2025',
    bullets: [
      'Delivering end-to-end AI automation systems for international clients using n8n, Claude API, GPT-4o-mini, and WhatsApp Business API.',
      'Built WhatsApp ordering bots, AI attendance systems, and LLM-powered workflow automation pipelines.',
      'Integrating multiple AI platforms (Claude, Groq, Gemini) into production-grade n8n workflows for real business clients.',
      'Building Flutter mobile apps with Firebase backend for local and international clients.',
      'Targeting remote roles in US, Canada, UAE, and Germany via job boards and LinkedIn.',
    ],
  },
  {
    role: 'Business Analyst / Backend Developer',
    company: 'Sarhad Cigarette Industries',
    period: 'Sep 2022 — Oct 2025',
    bullets: [
      'Built Python automation pipelines (pandas, Selenium, BeautifulSoup) eliminating manual reporting cycles across departments.',
      'Designed and maintained KPI dashboards using Looker Studio and GA4 for cross-functional stakeholders.',
      'Delivered end-to-end HR analytics dashboard with MongoDB-backed KPIs covering headcount, salary, and attrition.',
      'Developed REST API backends and MongoDB-based data systems for operational reporting.',
      'Built supply chain analytics pipeline on 180K-row dataset with ML classifiers achieving 87% accuracy.',
    ],
  },
  {
    role: 'Warehouse Operative',
    company: 'Previous Role',
    period: '2021 — 2022',
    bullets: [
      'Early professional experience in warehouse and logistics operations — foundation for later supply chain analytics focus.',
      'Developed operational understanding of inventory, logistics, and process management.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label">Work Experience</div>
        <h2 className="section-title">Professional History</h2>
        <p className="section-sub">3+ years of professional experience across data analytics, backend development, and AI automation.</p>

        <div ref={ref} className="timeline">
          {jobs.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ position: 'relative', marginBottom: '3.5rem' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: -38, top: 7,
                width: 12, height: 12, borderRadius: '50%',
                background: 'var(--bg)', border: '2px solid var(--cyan)',
                boxShadow: '0 0 12px rgba(0,220,180,0.4)',
              }} />

              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem',
                marginBottom: '0.5rem',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 18,
                    fontWeight: 700, color: 'var(--white)',
                  }}>
                    {job.role}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    color: 'var(--cyan)', letterSpacing: '0.06em',
                  }}>
                    {job.company}
                  </div>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--muted)', letterSpacing: '0.06em',
                  background: 'rgba(0,220,180,0.06)', border: '1px solid var(--border)',
                  padding: '3px 12px', borderRadius: 20, whiteSpace: 'nowrap',
                }}>
                  {job.period}
                </span>
              </div>

              <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontSize: 14, color: 'var(--text2)',
                    paddingLeft: '1.2rem', position: 'relative', lineHeight: 1.6,
                  }}>
                    <span style={{
                      position: 'absolute', left: 0, color: 'var(--cyan)',
                      fontSize: 12, top: 2,
                    }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
