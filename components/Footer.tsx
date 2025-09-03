
export default function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} ΛNNΛ — Tutti i diritti riservati.</p>
        <div className="flex gap-4">
          <a href="/privacy">Privacy</a>
          <a href="/termini">Termini</a>
          <a href="/admin">Admin</a>
        </div>
      </div>
    </footer>
  );
}
