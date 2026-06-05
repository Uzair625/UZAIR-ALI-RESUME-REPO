'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const tools = [
  { name: 'Claude', provider: 'Anthropic', desc: 'Primary LLM for API integrations, n8n workflows, coding assistance, and AI agent development.' },
  { name: 'ChatGPT / GPT-4o', provider: 'OpenAI', desc: 'GPT-4o-mini integration in Flask apps, WhatsApp bots, intent classification systems.' },
  { name: 'Groq API', provider: 'Groq', desc: 'Ultra-fast LLM inference using llama-3.1-8b-instant for real-time n8n workflow automation.' },
  { name: 'Grok', provider: 'xAI', desc: 'Research, real-time data queries, and alternative AI perspective for technical problem solving.' },
  { name: 'n8n & Zapier', provider: 'Automation', desc: 'Core workflow automation platform for connecting APIs, building AI pipelines, and no-code integrations.' },
  { name: 'Perplexity AI', provider: 'Perplexity', desc: 'AI-powered search for real-time research, technical documentation, and competitive analysis.' },
  { name: 'NotebookLM', provider: 'Google', desc: 'Document analysis, research synthesis, and study material generation from uploaded sources.' },
  { name: 'Google AI Studio', provider: 'Google', desc: 'Gemini API access, prompt engineering, and multimodal AI development and testing.' },
  { name: 'ElevenLabs', provider: 'ElevenLabs', desc: 'Text-to-speech voice cloning and audio generation for content creation and automation.' },
  { name: 'Stitch AI', provider: 'Stitch', desc: 'AI-powered content and workflow generation integrated into automation pipelines.' },
  { name: 'GetMulti AI', provider: 'GetMulti', desc: 'Multi-model AI comparisons and parallel generation tasks for efficient content workflows.' },
  { name: 'Numerous AI', provider: 'Numerous', desc: 'AI-powered spreadsheet automation and bulk data processing for analytics workflows.' },
]

export default function AITools() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="ai-tools" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label">AI Ecosystem</div>
        <h2 className="section-title">AI Tools I Use Daily</h2>
        <p className="section-sub">Proficient across 11+ AI platforms — from LLM APIs to workflow automation to research tools.</p>

        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem',
        }}>
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '1.4rem',
                display: 'flex', flexDirection: 'column', gap: '0.7rem',
                transition: 'border-color .2s, transform .2s', cursor: 'default',
              }}
              whileHover={{ y: -4, borderColor: 'rgba(0,220,180,0.22)' } as any}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--white)' }}>
                {t.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cyan)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {t.provider}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.55 }}>
                {t.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #ai-tools .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #ai-tools .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
