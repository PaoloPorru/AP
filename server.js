const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

// Security & perf
app.use(helmet({
  contentSecurityPolicy: false // relaxed to ease local dev and external embeds (e.g. Instagram)
}));
app.use(compression());
app.use(morgan('tiny'));

// Templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static assets
app.use('/static', express.static(path.join(__dirname, 'public')));

// Body parsing for contact form
app.use(express.urlencoded({ extended: true }));

// Global locals
app.locals.nav = [
  { href: '/', label: 'Home' },
  { href: '/su-di-me', label: 'Su di me' },
  { href: '/contatti', label: 'Contatti' },
];

// Routes
app.get('/', (req, res) => {
  const instaPosts = [
    // Placeholder images; replace with real Instagram media fetch when you add an API/token
    { img: '/static/img/insta1.jpg', link: '#', alt: 'Post 1' },
    { img: '/static/img/insta2.jpg', link: '#', alt: 'Post 2' },
    { img: '/static/img/insta3.jpg', link: '#', alt: 'Post 3' },
    { img: '/static/img/insta4.jpg', link: '#', alt: 'Post 4' },
    { img: '/static/img/insta5.jpg', link: '#', alt: 'Post 5' },
    { img: '/static/img/insta6.jpg', link: '#', alt: 'Post 6' },
  ];
  res.render('home', { title: 'Home', instaPosts, currentPath: req.path });
});

app.get('/su-di-me', (req, res) => {
  res.render('about', { title: 'Su di me', currentPath: req.path});
});

app.get('/contatti', (req, res) => {
  res.render('contacts', { title: 'Contatti', sent: false, currentPath: req.path });
});

app.post('/contatti', (req, res) => {
  // In produzione, invia l'email con un provider (es. Nodemailer/Sendgrid).
  // Per ora, mostriamo solo un messaggio di successo.
  const { name, email, message } = req.body || {};
  console.log('Nuovo messaggio:', { name, email, message });
  res.render('contacts', { title: 'Contatti', sent: true, name, currentPath: req.path });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Pagina non trovata' });
});

app.listen(PORT, () => {
  console.log(`Sito stilista in ascolto su http://localhost:${PORT}`);
});
