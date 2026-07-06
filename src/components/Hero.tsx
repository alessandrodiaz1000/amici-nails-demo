import { BRAND, HERO_LABELS, REPUTATION } from '../data/site'
import { scrollTo, WHATSAPP_URL } from '../utils'
import { WhatsAppIcon } from './WhatsAppIcon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.bgShapeOne} aria-hidden />
      <div className={styles.bgShapeTwo} aria-hidden />
      <div className={styles.lineArtOne} aria-hidden />
      <div className={styles.lineArtTwo} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>{BRAND.name}</h1>
          <p className={styles.subtitle}>Dal {BRAND.year}</p>
          <p className={styles.description}>
            Centro unghie e trattamenti beauty a Milano per manicure, pedicure, semipermanente,
            gel e ceretta.
          </p>
          <p className={styles.secondary}>
            Servizio rapido, ambiente pulito e prenotazione semplice dal telefono.
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              className={`btn btn-primary ${styles.primaryBtn}`}
              onClick={() => scrollTo('booking')}
            >
              Prenota appuntamento
            </button>
            <a href={WHATSAPP_URL} className={`btn btn-secondary ${styles.secondaryBtn}`}>
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          <p className={styles.trust}>
            <span>{REPUTATION.googleRatingLabel}</span>
            <span className={styles.dot} aria-hidden>
              ·
            </span>
            <span>{REPUTATION.reviewsLabel}</span>
            <span className={styles.dot} aria-hidden>
              ·
            </span>
            <span>{BRAND.city}</span>
          </p>
        </div>

        <div className={styles.visual} aria-hidden>
          <div className={styles.visualFrame}>
            <div className={styles.visualRing} />
            <div className={styles.visualArc} />
            <p className={styles.visualBrand}>{BRAND.name}</p>
            <p className={styles.visualYear}>Dal {BRAND.year}</p>
            <div className={styles.visualLabels}>
              {HERO_LABELS.map((label) => (
                <span key={label} className={styles.visualLabel}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
