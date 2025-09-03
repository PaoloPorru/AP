
import products from '@/data/products.json';
import collections from '@/data/collections.json';
import posts from '@/data/posts.json';
import feed from '@/data/shop_the_feed.json';

export type Product = { slug:string; name:string; price:number; images:string[]; colors:{name:string;hex:string}[]; sizes:string[]; collection:string; tags:string[]; }
export type Collection = { slug:string; name:string; description:string; hero:{type:'image'|'video';src:string;poster?:string}; products:string[]; }
export type BlogPost = { slug:string; title:string; excerpt:string; cover:string; date:string; content:string };
export type FeedItem = { id:string; caption:string; image:string; productSlug:string; price:number; colors:{name:string;hex:string}[] };

export async function getCollections(): Promise<Collection[]> { return collections as any; }
export async function getCollection(slug:string){ return (collections as any).find((c:any)=>c.slug===slug)||null; }
export async function getProducts(): Promise<Product[]> { return products as any; }
export async function getProduct(slug:string){ return (products as any).find((p:any)=>p.slug===slug)||null; }
export async function getPosts(): Promise<BlogPost[]> { return posts as any; }
export async function getPost(slug:string){ return (posts as any).find((p:any)=>p.slug===slug)||null; }
export async function getFeed(): Promise<FeedItem[]> { return feed as any; }
