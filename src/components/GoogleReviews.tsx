import { REPUTATION } from '../data/site'
import { GOOGLE_REVIEWS_URL } from '../utils'
import styles from './GoogleReviews.module.css'

export function GoogleReviews() {
  return (
    <section className="section">
      <div className={`card ${styles.block}`}>
        <div className={styles.icon}>G</div>
        <div className={styles.content}>
          <h2 className={styles.title}>Recensioni Google</h2>
          <p className={styles.rating}>{REPUTATION.reviewsShort}</p>
          <p className={styles.copy}>{REPUTATION.reviewsCopy}</p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-secondary btn-sm ${styles.btn}`}
          >
            Apri recensioni
          </a>
        </div>
      </div>
    </section>
  )
}
