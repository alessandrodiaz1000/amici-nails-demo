import { WHY_CHOOSE } from '../data/site'
import styles from './WhyChoose.module.css'

export function WhyChoose() {
  return (
    <section className="section">
      <h2 className="section-title">Perché scegliere Amici Nails</h2>
      <p className="section-subtitle">
        Un salone di zona per chi cerca praticità, cura e un risultato ordinato.
      </p>

      <div className={styles.grid}>
        {WHY_CHOOSE.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
