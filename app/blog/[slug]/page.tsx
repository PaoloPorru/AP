
import { getPost } from '@/lib/data';
import Image from 'next/image';

export default async function BlogPost({params}:{params:{slug:string}}){
  const post = await getPost(params.slug);
  if(!post) return <div className="container section">Post non trovato.</div>;
  return (
    <article className="container section prose max-w-3xl">
      <Image src={post.cover} alt={post.title} width={1200} height={800} className="w-full h-80 object-cover rounded-2xl"/>
      <h1>{post.title}</h1>
      <div className="opacity-60">{new Date(post.date).toLocaleDateString('it-IT')}</div>
      <div dangerouslySetInnerHTML={{__html: post.content}} />
    </article>
  )
}

export async function generateStaticParams(){
  return [{slug:'dietro-le-quinte-1'}];
}
