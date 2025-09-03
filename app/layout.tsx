
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ΛNNΛ — Collezioni Moda',
  description: 'Moda contemporanea tra sartoriale e ricerca.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="it">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
