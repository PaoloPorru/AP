
# Sito Stilista – Next.js + Tailwind + Sanity (opzionale)

Questo progetto include:
- **Hero "collection preview"** a tutta larghezza con immagini/video e CTA ispirate a PatBo & Meshki.
- **Shop the Feed**: griglia con i tuoi post (o prodotti) stile shop: nome capo, prezzo, varianti colore.
- **Collezioni** con varianti, filtri base e pagine dettaglio.
- **Blog** con lista articoli e pagina post.
- **/admin** con Sanity Studio integrato per gestire post, prodotti e collezioni (opzionale). Se non configuri Sanity, il sito usa i dati di fallback in `/data/*.json`.

## Avvio
```bash
npm install
npm run dev
```

## Configurazione Sanity (opzionale ma consigliata)
1) Crea un progetto su https://www.sanity.io/ , prendi `projectId` e dataset.
2) Copia `.env.example` in `.env.local` e imposta:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
```
3) Da Sanity, crea un token in **Manage Project → API → Tokens** e mettilo in `SANITY_API_WRITE_TOKEN` (per scrittura) e `SANITY_API_READ_TOKEN` (per lettura lato server).
4) Avvia lo Studio: `npm run dev` e apri `/admin`.

## Dati di fallback
- Modifica i file in `/data` per cambiare prodotti, collezioni e post senza CMS.

## Deploy su Vercel
- Imposta le stesse variabili d'ambiente in Project Settings → Environment Variables.
- `npm run build` e deploy.

## Licenza
Libera per uso commerciale del cliente.
