import { BRAND } from '../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>{BRAND.name}</p>
      <p className={styles.year}>Dal {BRAND.year}</p>
      <p className={styles.services}>
        Manicure · Pedicure · Semipermanente · Gel · Ceretta
      </p>
    </footer>
  )
}
