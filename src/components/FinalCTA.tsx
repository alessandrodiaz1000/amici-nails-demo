import { scrollTo, WHATSAPP_URL } from '../utils'
import { WhatsAppIcon } from './WhatsAppIcon'
import styles from './FinalCTA.module.css'

export function FinalCTA() {
  return (
    <section className={`section ${styles.cta}`}>
      <div className={`card ${styles.card}`}>
        <div className={styles.glow} aria-hidden />
        <h2 className={styles.headline}>Pronta per il tuo prossimo appuntamento?</h2>
        <p className={styles.subcopy}>
          Scegli il trattamento e prenota il tuo orario in pochi secondi.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => scrollTo('booking')}
          >
            Prenota appuntamento
          </button>
          <a href={WHATSAPP_URL} className="btn btn-secondary">
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
