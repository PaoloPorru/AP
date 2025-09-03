
import { getCollections, getProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default async function CollectionsPage(){
  const cols = await getCollections();
  const products = await getProducts();
  return (
    <section className="section container">
      <h1 className="h1 mb-6">Collezioni</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {cols.map(c => (
          <div key={c.slug} className="space-y-3">
            <Link href={`/collections/${c.slug}`} className="h2 hover:underline">{c.name}</Link>
            <p className="opacity-80">{c.description}</p>
          </div>
        ))}
      </div>
      <h2 className="h2 mt-12 mb-6">Tutti i prodotti</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(p=> <ProductCard key={p.slug} product={p} />)}
      </div>
    </section>
  )
}
