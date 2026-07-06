import { LOCATION } from '../data/site'
import { GOOGLE_MAPS_URL, WHATSAPP_URL } from '../utils'
import { WhatsAppIcon } from './WhatsAppIcon'
import styles from './Location.module.css'

export function Location() {
  return (
    <section className="section" id="location">
      <h2 className="section-title">{LOCATION.title}</h2>
      <p className="section-subtitle">{LOCATION.copy}</p>

      <div className={styles.mapCard}>
        <div className={styles.mapGrid} aria-hidden />
        <div className={styles.mapContent}>
          <div className={styles.pin} aria-hidden />
          <p className={styles.address}>{LOCATION.label}</p>
          <div className={styles.chips}>
            {LOCATION.areas.map((area) => (
              <span key={area} className={styles.chip}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-block"
        >
          Apri su Google Maps
        </a>
        <a href={WHATSAPP_URL} className="btn btn-secondary btn-block">
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </section>
  )
}
