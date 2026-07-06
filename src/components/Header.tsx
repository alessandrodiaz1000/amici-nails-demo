import { useState } from 'react'
import { BRAND } from '../data/site'
import { scrollTo } from '../utils'
import styles from './Header.module.css'

const NAV = [
  { label: 'Trattamenti', id: 'treatments' },
  { label: 'Prenota', id: 'booking' },
  { label: 'Dove siamo', id: 'location' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  const go = (id: string) => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button type="button" className={styles.wordmark} onClick={() => scrollTo('top')}>
          <span className={styles.brand}>{BRAND.name}</span>
          <span className={styles.tagline}>{BRAND.tagline}</span>
        </button>

        <nav className={styles.desktopNav} aria-label="Principale">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.navLink}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.location}>{BRAND.city}</span>
          <button
            type="button"
            className={`btn btn-primary btn-sm ${styles.cta}`}
            onClick={() => go('booking')}
          >
            Prenota
          </button>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={styles.menuIcon} data-open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className={styles.mobileNav} aria-label="Mobile">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.mobileLink}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
