import { PRICE_CLARITY } from '../data/site'
import styles from './PriceClarity.module.css'

export function PriceClarity() {
  return (
    <section className="section">
      <h2 className="section-title">{PRICE_CLARITY.title}</h2>
      <p className="section-subtitle">{PRICE_CLARITY.copy}</p>

      <div className={styles.grid}>
        {PRICE_CLARITY.cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <div className={styles.marker} aria-hidden />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
