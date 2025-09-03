
'use client';
import Link from 'next/link';
import { ShoppingBag, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Header(){
  const [open,setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-widest text-lg">ΛNNΛ</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/collections" className="hover:underline">Collezioni</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contatti" className="hover:underline">Contatti</Link>
          <a href="https://instagram.com" className="hover:underline flex items-center gap-2"><Instagram className="w-4 h-4"/> Instagram</a>
        </nav>
        <button className="md:hidden btn" onClick={()=>setOpen(!open)}>Menu</button>
        <button className="btn hidden md:inline-flex"><ShoppingBag className="w-4 h-4 mr-2"/>Shop</button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/collections" onClick={()=>setOpen(false)}>Collezioni</Link>
            <Link href="/blog" onClick={()=>setOpen(false)}>Blog</Link>
            <Link href="/contatti" onClick={()=>setOpen(false)}>Contatti</Link>
            <a href="https://instagram.com" onClick={()=>setOpen(false)}>Instagram</a>
          </div>
        </div>
      )}
    </header>
  );
}
