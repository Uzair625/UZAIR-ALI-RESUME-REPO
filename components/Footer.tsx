export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)', borderTop: '1px solid var(--border)',
      padding: '2.5rem 0', position: 'relative', zIndex: 1,
    }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--cyan)' }}>
            uzair.ali
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>
            © 2026 Uzair Ali — Python Developer &amp; AI Automation Specialist
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Uzair625' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/uzair-ali' },
              { label: 'Email', href: 'mailto:uziikhan309@gmail.com' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--muted)', transition: 'color .2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
