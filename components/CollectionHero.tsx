
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Collection } from '@/lib/data';

export default function CollectionHero({ initial }: { initial: Collection[] }){
  const [items, setItems] = useState(initial);
  useEffect(()=>{},[]);
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 mb-6">Collezioni Moda</h1>
      </div>
      <div className="container grid md:grid-cols-2 gap-4">
        {items.map((c)=> (
          <Link key={c.slug} href={`/collections/${c.slug}`} className="group card relative">
            {"video"===c.hero.type ? (
              <video className="w-full h-[420px] object-cover" poster={c.hero.poster} autoPlay muted loop playsInline>
                <source src={c.hero.src} />
              </video>
            ) : (
              <Image src={c.hero.src} alt={c.name} width={1200} height={800} className="w-full h-[420px] object-cover" />
            )}
            <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-2xl shadow">
              <div className="text-xs uppercase tracking-wide">Nuova Collezione</div>
              <div className="font-semibold">{c.name}</div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/20"></div>
            <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition">
              <div className="p-4 flex gap-2">
                <span className="btn">Scopri</span>
                <span className="btn">Shop Now</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
