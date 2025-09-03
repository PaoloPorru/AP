
import CollectionHero from '@/components/CollectionHero';
import ShopTheFeed from '@/components/ShopTheFeed';
import { getCollections, getProducts, getFeed } from '@/lib/data';

export default async function HomePage(){
  const collections = await getCollections();
  const products = await getProducts();
  const feed = await getFeed();
  return (
    <>
      <CollectionHero initial={collections}/>
      <ShopTheFeed items={feed} products={products}/>
    </>
  )
}
