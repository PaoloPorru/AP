
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/data';

export default async function BlogList(){
  const posts = await getPosts();
  return (
    <section className="container section">
      <h1 className="h1 mb-6">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
            <Image src={p.cover} alt={p.title} width={1200} height={800} className="w-full h-60 object-cover"/>
            <div className="p-4">
              <div className="text-xs opacity-70">{new Date(p.date).toLocaleDateString('it-IT')}</div>
              <div className="font-semibold">{p.title}</div>
              <p className="opacity-80">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
