import { TREATMENT_PREVIEW } from '../data/site'
import { Monogram } from './Monogram'
import styles from './MainTreatments.module.css'

export function MainTreatments() {
  return (
    <section className={`section ${styles.section}`} id="treatments">
      <h2 className="section-title">Trattamenti principali</h2>
      <p className="section-subtitle">
        Mani, piedi e beauty con cura, velocità e attenzione.
      </p>

      <div className={styles.grid}>
        {TREATMENT_PREVIEW.map((t) => (
          <article key={t.id} className={styles.card}>
            <Monogram letter={t.monogram} size="md" />
            <h3 className={styles.name}>{t.name}</h3>
            <div className={styles.line} aria-hidden />
          </article>
        ))}
      </div>
    </section>
  )
}
