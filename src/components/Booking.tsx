import { useState, type FormEvent } from 'react'
import {
  BOOKING_DAYS,
  SERVICES,
  TIME_SLOTS,
  type DayId,
  type ServiceName,
} from '../data/site'
import styles from './Booking.module.css'

const DEFAULT_TIME =
  TIME_SLOTS.find((s) => s.available)?.time ?? '10:00'

export function Booking() {
  const [service, setService] = useState<ServiceName>(SERVICES[0].name)
  const [day, setDay] = useState<DayId>(BOOKING_DAYS[0].id)
  const [time, setTime] = useState(DEFAULT_TIME)
  const [nome, setNome] = useState('')
  const [telefono, setTelefono] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <section className="section" id="booking">
        <h2 className="section-title">Prenota il tuo appuntamento</h2>
        <div className={`card ${styles.success}`}>
          <div className={styles.successBadge} aria-hidden />
          <h3 className={styles.successTitle}>Prenotazione confermata</h3>
          <p className={styles.successText}>
            Ti aspettiamo da Amici Nails. Riceverai conferma sul telefono.
          </p>
          <div className={styles.summary}>
            <span>{service}</span>
            <span>{BOOKING_DAYS.find((d) => d.id === day)?.label ?? day}</span>
            <span>{time}</span>
          </div>
          <button
            type="button"
            className={`btn btn-secondary btn-sm ${styles.resetBtn}`}
            onClick={() => {
              setConfirmed(false)
              setNome('')
              setTelefono('')
            }}
          >
            Prenota un altro appuntamento
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="section" id="booking">
      <h2 className="section-title">Prenota il tuo appuntamento</h2>
      <p className="section-subtitle">
        Scegli trattamento, giorno e orario disponibile.
      </p>

      <form className={`card ${styles.widget}`} onSubmit={handleSubmit}>
        <div className={styles.step}>
          <div className={styles.stepHead}>
            <span className={styles.stepNum}>1</span>
            <h3 className={styles.stepTitle}>Scegli trattamento</h3>
          </div>
          <div className={styles.serviceGrid}>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`${styles.serviceCard} ${service === s.name ? styles.selected : ''}`}
                onClick={() => setService(s.name)}
              >
                <span className={styles.serviceMono}>{s.monogram}</span>
                <span className={styles.serviceName}>{s.name}</span>
                <span className={styles.serviceDur}>{s.duration}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.step}>
          <div className={styles.stepHead}>
            <span className={styles.stepNum}>2</span>
            <h3 className={styles.stepTitle}>Scegli il giorno</h3>
          </div>
          <div className={styles.dayRow}>
            {BOOKING_DAYS.map((d) => (
              <button
                key={d.id}
                type="button"
                className={`${styles.dayChip} ${day === d.id ? styles.selected : ''}`}
                onClick={() => setDay(d.id)}
              >
                <span className={styles.dayLabel}>{d.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.step}>
          <div className={styles.stepHead}>
            <span className={styles.stepNum}>3</span>
            <h3 className={styles.stepTitle}>Scegli l&apos;orario</h3>
          </div>
          <div className={styles.timeGrid}>
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot.time}
                type="button"
                disabled={!slot.available}
                className={`${styles.timeChip} ${time === slot.time ? styles.selected : ''} ${!slot.available ? styles.unavailable : ''}`}
                onClick={() => slot.available && setTime(slot.time)}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.step}>
          <div className={styles.stepHead}>
            <span className={styles.stepNum}>4</span>
            <h3 className={styles.stepTitle}>I tuoi dati</h3>
          </div>
          <div className={styles.fields}>
            <label className={styles.field}>
              <span className={styles.label}>Nome</span>
              <input
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Il tuo nome"
                className={styles.input}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Telefono</span>
              <input
                type="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Es. 333 123 4567"
                className={styles.input}
              />
            </label>
          </div>
        </div>

        <button type="submit" className={`btn btn-primary btn-block ${styles.submit}`}>
          Conferma prenotazione
        </button>
      </form>
    </section>
  )
}
