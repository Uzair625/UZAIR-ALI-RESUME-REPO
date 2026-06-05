'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

const badges = [
  { label: '🐍 Python', active: true },
  { label: '📱 Flutter', active: true },
  { label: '🤖 Generative AI', active: true },
  { label: '⚡ n8n Automation', active: true },
  { label: '🔗 LLM APIs', active: true },
  { label: '📊 Data Analytics', active: true },
  { label: '🎯 AWS Data Engineer (Target 2026)', gold: true },
]

const stats = [
  { num: '3+', label: 'Years Exp.' },
  { num: '6+', label: 'Projects' },
  { num: '11+', label: 'AI Tools' },
  { num: '4', label: 'Target Markets' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 60,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0,220,180,0.04) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,184,255,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,220,180,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,220,180,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }} />
      </div>

      {/* 3D Scene — right half */}
      <div style={{
        position: 'absolute', right: 0, top: 0,
        width: '50%', height: '100%',
        zIndex: 0, opacity: 0.85,
      }}>
        <ThreeScene />
      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center', width: '100%' }}>
        {/* Left: Text */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.18em', color: 'var(--cyan)',
              textTransform: 'uppercase', marginBottom: '1.2rem',
              display: 'flex', alignItems: 'center', gap: 10,
            }}
          >
            <span style={{ color: 'var(--muted)' }}>{'//'}</span>
            Open to Work — Remote / UAE / Germany
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
              fontWeight: 800, color: 'var(--white)',
              lineHeight: 0.95, marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ display: 'block' }}>Uzair</span>
            <span style={{
              display: 'block', color: 'transparent',
              WebkitTextStroke: '2px var(--cyan)',
            }}>Ali</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(13px, 1.6vw, 16px)',
              color: 'var(--text2)', marginBottom: '1.6rem', lineHeight: 1.8,
            }}
          >
            <span style={{ color: 'var(--cyan)' }}>Python Developer</span> · AI Automation Specialist
            <br />Flutter Dev · Data Analyst · LLM Integrations
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2.5rem' }}
          >
            {badges.map((b) => (
              <span
                key={b.label}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '0.06em', padding: '4px 12px',
                  borderRadius: 20, border: '1px solid',
                  borderColor: b.gold ? 'rgba(255,183,0,0.4)' : 'var(--border2)',
                  color: b.gold ? 'var(--gold)' : (b.active ? 'var(--cyan)' : 'var(--text2)'),
                  background: b.gold ? 'rgba(255,183,0,0.06)' : (b.active ? 'rgba(0,220,180,0.1)' : 'rgba(0,220,180,0.05)'),
                }}
              >
                {b.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,220,180,0.08)',
              border: '1px solid rgba(0,220,180,0.25)',
              padding: '6px 14px', borderRadius: 20,
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.08em', color: 'var(--cyan)',
              marginBottom: '2rem',
            }}
          >
            <span className="avail-dot" />
            Available for remote roles &amp; freelance projects
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="mailto:uziikhan309@gmail.com"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                letterSpacing: '0.1em', fontWeight: 700,
                padding: '13px 28px', background: 'var(--cyan)',
                color: 'var(--bg)', borderRadius: 8,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'all .2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--cyan2)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,220,180,0.25)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--cyan)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              ✉ Get In Touch
            </a>
            <a
              href="https://github.com/Uzair625"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                letterSpacing: '0.1em', fontWeight: 700,
                padding: '13px 28px', border: '1px solid var(--border2)',
                color: 'var(--text)', borderRadius: 8,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'all .2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'none' }}
            >
              ⌨ GitHub
            </a>
          </motion.div>
        </div>

        {/* Right: Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)', padding: '2rem 1.6rem',
            minWidth: 220, display: 'flex', flexDirection: 'column', gap: '2rem',
            position: 'relative', zIndex: 2,
          }}
        >
          {stats.map((s, i) => (
            <div key={s.label}>
              {i > 0 && <div style={{ height: 1, background: 'var(--border)', marginBottom: '2rem' }} />}
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: '2.4rem',
                  fontWeight: 800, color: 'var(--white)', lineHeight: 1, display: 'block',
                }}>
                  {s.num.replace('+', '')}<span style={{ fontSize: '1.4rem', color: 'var(--cyan)' }}>{s.num.includes('+') ? '+' : ''}</span>
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--muted)', display: 'block', marginTop: 4,
                }}>
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
