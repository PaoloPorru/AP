# Sito "LOGO STILISTA" — Fashion & Luxury (Node + Express + EJS)

## Requisiti
- Node 18+

## Avvio
```bash
npm install
npm start
# poi apri http://localhost:3000
```

## Struttura
- `server.js`: server Express con EJS, rotte Home / Su di me / Contatti
- `views/`: layout e pagine
- `public/`: CSS, JS, immagini e video
- `public/video/hero-test.mp4`: **sostituisci** con il tuo video di presentazione
- `views/home.ejs`: sezione "Ultimi post da Instagram" (placeholder)
- `views/contacts.ejs`: form "Contact us" a destra; dettagli contatto a sinistra

## Instagram (placeholder)
Attualmente la griglia mostra immagini fittizie. Per integrare i post reali puoi:
- usare l'**Instagram Basic Display API** per ottenere gli ultimi media e popolare `instaPosts` nella route `/`,
- oppure usare gli **embed** ufficiali di singoli post.
Ricorda che le policy di Instagram richiedono un token/accesso; per una demo pubblica potresti cache-are i risultati lato server.

## Stile
- Mobile-first
- Palette scura con accenti gold
- Tipografia: Playfair Display + Poppins
- Navbar con "LOGO STILISTA" + voci Home, Su di me, Contatti e icone Locator/Instagram (placeholder)

Buon lavoro!
