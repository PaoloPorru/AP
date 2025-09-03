
import Image from 'next/image';
import ProductCard from './ProductCard';

export default function ShopTheFeed({items, products}:{items:any[];products:any[]}){
  const productBySlug = Object.fromEntries(products.map((p:any)=>[p.slug,p]));
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 mb-6">Ultimi post da Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it:any)=>{
            const p = productBySlug[it.productSlug];
            return p ? <ProductCard key={it.id} product={p}/> : (
              <div key={it.id} className="card">
                <Image src={it.image} alt={it.caption} width={600} height={600} className="w-full aspect-square object-cover"/>
                <div className="p-4"><div className="font-medium">{it.caption}</div></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
