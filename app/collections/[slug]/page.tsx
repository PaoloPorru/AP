
import { getCollection, getProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

export default async function CollectionPage({params}:{params:{slug:string}}){
  const col = await getCollection(params.slug);
  const all = await getProducts();
  if(!col) return <div className="container section">Collezione non trovata.</div>;
  const prods = all.filter(p => col.products.includes(p.slug));
  return (
    <section>
      <div className="relative h-[60vh]">
        {col.hero.type === 'image' ? (
          <Image src={col.hero.src} alt={col.name} fill className="object-cover"/>
        ) : (
          <video className="w-full h-full object-cover" poster={col.hero.poster} autoPlay muted loop playsInline>
            <source src={col.hero.src} />
          </video>
        )}
        <div className="absolute bottom-8 left-8 bg-white/90 px-4 py-2 rounded-2xl shadow">
          <div className="text-xs uppercase tracking-wide">Collezione</div>
          <div className="font-semibold text-xl">{col.name}</div>
        </div>
      </div>
      <div className="container section">
        <p className="opacity-80 mb-6">{col.description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {prods.map(p=> <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>
    </section>
  )
}

export async function generateStaticParams(){
  return [{slug:'runway-25'},{slug:'atelier-icons'}];
}
