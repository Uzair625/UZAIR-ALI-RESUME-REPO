'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#ai-tools', label: 'AI Tools' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      let curr = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 90) curr = s.id
      })
      setActive(curr)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
        height: 60,
        background: scrolled ? 'rgba(8,12,18,0.92)' : 'rgba(8,12,18,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s',
      }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--cyan)', letterSpacing: '0.05em' }}>
        uzair<span style={{ color: 'var(--text2)' }}>.ali</span>
      </div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="nav-links-desktop">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: active === l.href.slice(1) ? 'var(--cyan)' : 'var(--text2)',
                transition: 'color .2s',
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:uziikhan309@gmail.com"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.1em',
          color: 'var(--bg)',
          background: 'var(--cyan)',
          padding: '7px 18px',
          borderRadius: 6,
          fontWeight: 700,
          transition: 'background .2s, transform .15s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--cyan2)'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--cyan)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        HIRE ME →
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text)', display: 'none', flexDirection: 'column', gap: 5,
        }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ display: 'block', width: 22, height: 2, background: 'var(--cyan)' }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 60, left: 0, right: 0,
          background: 'rgba(8,12,18,0.98)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)', padding: '1rem 0',
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '0.8rem 2rem',
                fontFamily: 'var(--font-mono)', fontSize: 12,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: active === l.href.slice(1) ? 'var(--cyan)' : 'var(--text2)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
