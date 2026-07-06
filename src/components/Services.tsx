import { SERVICES } from '../data/site'
import { scrollTo } from '../utils'
import { Monogram } from './Monogram'
import styles from './Services.module.css'

export function Services() {
  return (
    <section className="section" id="services">
      <h2 className="section-title">I nostri trattamenti</h2>
      <p className="section-subtitle">
        Scegli il servizio che preferisci e prenota il tuo appuntamento.
      </p>

      <div className={styles.grid}>
        {SERVICES.map((service) => (
          <article key={service.id} className={styles.card}>
            <div className={styles.top}>
              <Monogram letter={service.monogram} size="lg" />
              <div className={styles.meta}>
                <h3 className={styles.name}>{service.name}</h3>
                <span className={styles.duration}>{service.duration}</span>
              </div>
            </div>
            <p className={styles.description}>{service.description}</p>
            <button
              type="button"
              className={`btn btn-primary btn-sm ${styles.bookBtn}`}
              onClick={() => scrollTo('booking')}
            >
              Prenota
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
