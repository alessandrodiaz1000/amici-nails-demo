export const BRAND = {
  name: 'AMICI NAILS',
  tagline: 'dal 2010',
  city: 'Milano',
  year: '2010',
} as const

export const REPUTATION = {
  googleRating: '4,4',
  googleRatingLabel: '4,4 su Google',
  reviewsLabel: 'Recensioni pubbliche',
  reviewsShort: '4,4 ★ · recensioni Google',
  reviewsCopy:
    'Le recensioni pubbliche raccontano un salone apprezzato per velocità, disponibilità, pulizia e manicure/pedicure curate.',
} as const

export type ServiceDef = {
  id: string
  name: string
  monogram: string
  duration: string
  description: string
}

export const TREATMENT_PREVIEW: ServiceDef[] = [
  { id: 'manicure', name: 'Manicure', monogram: 'M', duration: '30 min', description: '' },
  { id: 'pedicure', name: 'Pedicure', monogram: 'P', duration: '45 min', description: '' },
  {
    id: 'semipermanente',
    name: 'Semipermanente',
    monogram: 'S',
    duration: '60 min',
    description: '',
  },
  { id: 'ceretta', name: 'Ceretta', monogram: 'C', duration: '30 min', description: '' },
]

export const SERVICES: ServiceDef[] = [
  {
    id: 'manicure',
    name: 'Manicure',
    monogram: 'M',
    duration: '30 min',
    description: 'Cura precisa per mani ordinate e smalto pulito.',
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    monogram: 'P',
    duration: '45 min',
    description: 'Trattamento curato per piedi leggeri e in ordine.',
  },
  {
    id: 'semipermanente-mani',
    name: 'Semipermanente mani',
    monogram: 'S',
    duration: '60 min',
    description: 'Colore duraturo e finitura sottile.',
  },
  {
    id: 'gel-ricostruzione',
    name: 'Gel / Ricostruzione',
    monogram: 'G',
    duration: '90 min',
    description: 'Ricostruzione e refill con attenzione alla forma.',
  },
  {
    id: 'mani-piedi',
    name: 'Mani + piedi',
    monogram: 'M+P',
    duration: '90 min',
    description: 'Pacchetto completo per un risultato coordinato.',
  },
  {
    id: 'ceretta',
    name: 'Ceretta',
    monogram: 'C',
    duration: '30 min',
    description: 'Servizio rapido e attento.',
  },
  {
    id: 'massaggio-mani',
    name: 'Massaggio mani',
    monogram: 'MM',
    duration: '20 min',
    description: 'Un momento di relax per mani leggere e curate.',
  },
  {
    id: 'massaggio-piedi',
    name: 'Massaggio piedi',
    monogram: 'MP',
    duration: '20 min',
    description: 'Ideale dopo una giornata intensa o una lunga camminata.',
  },
]

export type ServiceName = (typeof SERVICES)[number]['name']

export const BOOKING_DAYS = [
  { id: 'oggi', label: 'Oggi' },
  { id: 'domani', label: 'Domani' },
  { id: 'ven', label: 'Ven' },
  { id: 'sab', label: 'Sab' },
  { id: 'lun', label: 'Lun' },
] as const

export type DayId = (typeof BOOKING_DAYS)[number]['id']

export const TIME_SLOTS = [
  { time: '10:00', available: true },
  { time: '10:30', available: true },
  { time: '11:30', available: true },
  { time: '12:00', available: false },
  { time: '13:00', available: true },
  { time: '14:30', available: true },
  { time: '15:30', available: true },
  { time: '16:00', available: false },
  { time: '17:00', available: true },
  { time: '18:30', available: true },
] as const

export const WHY_CHOOSE = [
  {
    title: 'Dal 2010',
    text: 'Un riferimento di zona per manicure, pedicure e trattamenti beauty.',
  },
  {
    title: 'Servizio rapido',
    text: 'Ideale anche per chi vuole prenotare durante la pausa o con poco anticipo.',
  },
  {
    title: 'Pulizia',
    text: 'Ambiente ordinato e attenzione agli strumenti.',
  },
  {
    title: 'Prezzi chiari',
    text: 'Servizi descritti in modo semplice prima della prenotazione.',
  },
  {
    title: 'Cura del risultato',
    text: 'Attenzione alla forma, allo smalto e alla durata del trattamento.',
  },
] as const

export const PRICE_CLARITY = {
  title: 'Prezzi chiari prima del trattamento',
  copy: 'Prima di iniziare, il trattamento viene confermato in base al servizio scelto e al lavoro necessario, così hai sempre chiarezza su tempi e prezzo.',
  cards: [
    { title: 'Servizio scelto', text: 'Sai cosa prenoti prima di arrivare in salone.' },
    { title: 'Durata indicativa', text: 'Ogni trattamento ha un tempo previsto chiaro.' },
    { title: 'Conferma prima di iniziare', text: 'Il prezzo viene concordato prima di iniziare il lavoro.' },
  ],
} as const

export const LOCATION = {
  title: 'Ci trovi a Milano',
  copy: 'Amici Nails si trova in una zona comoda per chi lavora o vive nei dintorni.',
  label: 'Amici Nails · Milano',
  areas: ['Porta Romana', 'Centro', 'Pausa pranzo'],
} as const

export const HERO_LABELS = ['Dal 2010', 'Manicure & Pedicure', 'Prenotazione online'] as const
