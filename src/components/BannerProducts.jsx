import { AppContext } from '@/context/AppContext';
import Image from 'next/image';
import { useContext, useEffect } from 'react';

export default function BannerProducts() {

  const {products, loading, bannerItem, setBannerItem} = useContext(AppContext);

    const { results } = products;

    const getBannerItem = () => {
      results !== undefined &&
        setBannerItem(results[Math.floor(Math.random() * results.length)]);
    }

    useEffect(() => {
      getBannerItem();
    }, [results]);


  return (
    <section className='bannerProduct'>
      {
        loading ? <p>Loading...</p> :    
    <><Image
            src={
              results !== undefined && bannerItem.thumbnail
            }
            alt='product'
            width="200"
            height="200" /><div>
              <h2>
                {
                  results !== undefined && bannerItem.title
                }
              </h2>
              <h3>
                {
                  results !== undefined && `$ ${bannerItem.price}`
                }
              </h3>
              <button>Comprar</button>
            </div></>
     }
  </section>
  )
}
