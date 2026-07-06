# Amici Nails

Sito web per **Amici Nails**, salone unghie e beauty a Milano dal 2010.

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Pubblicazione su GitHub Pages

1. Crea il repository GitHub `amici-nails-demo`
2. Pusha il codice sul repository
3. Esegui il deploy:

```bash
npm run deploy
```

4. Apri il sito:

**https://alessandrodiaz1000.github.io/amici-nails-demo/**

## Personalizzazione

I contenuti principali sono in `src/data/site.ts`:

- servizi e trattamenti
- valutazione Google e recensioni
- opzioni di prenotazione (giorni e orari)
- testi sezioni

## Asset opzionali

Il sito funziona senza immagini. Se aggiungi file in `public/assets/`, verranno usati automaticamente:

- `logo.png`
- `hero-texture.jpg`
- `storefront.jpg`
