import styles from './Monogram.module.css'

type MonogramProps = {
  letter: string
  size?: 'sm' | 'md' | 'lg'
}

export function Monogram({ letter, size = 'md' }: MonogramProps) {
  return (
    <span className={`${styles.mono} ${styles[size]}`} aria-hidden>
      {letter}
    </span>
  )
}
