
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({product}:{product:any}){
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image src={product.images[0]} alt={product.name} width={800} height={1000} className="w-full h-80 object-cover" />
      </Link>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {product.colors?.slice(0,5).map((c:any)=>(
            <span key={c.name} className="swatch" style={{background:c.hex}} title={c.name}></span>
          ))}
        </div>
        <div className="font-medium">{product.name}</div>
        <div className="text-sm opacity-70">{product.collection}</div>
        <div className="mt-2 font-semibold">€ {product.price}</div>
      </div>
    </div>
  )
}
