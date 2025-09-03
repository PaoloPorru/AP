
import { getProduct } from '@/lib/data';
import Image from 'next/image';

export default async function ProductPage({params}:{params:{slug:string}}){
  const p = await getProduct(params.slug);
  if(!p) return <div className="container section">Prodotto non trovato.</div>;
  return (
    <div className="container section grid md:grid-cols-2 gap-8">
      <div className="card">
        <Image src={p.images[0]} alt={p.name} width={1200} height={1600} className="w-full object-cover"/>
      </div>
      <div>
        <h1 className="h1">{p.name}</h1>
        <div className="mt-4 font-semibold text-lg">€ {p.price}</div>
        <div className="mt-4">
          <div className="text-sm mb-1">Colori</div>
          <div className="flex gap-2">
            {p.colors.map((c:any)=>(<span key={c.name} className="swatch" style={{background:c.hex}} title={c.name}></span>))}
          </div>
        </div>
        <div className="mt-6">
          <button className="btn">Aggiungi al carrello</button>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams(){
  return [{slug:'abito-sera-aurora'},{slug:'tailleur-lino-luce'}];
}
