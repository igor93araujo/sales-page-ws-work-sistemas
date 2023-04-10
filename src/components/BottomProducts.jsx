import { AppContext } from '@/context/AppContext';
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'

export default function BottomProducts() {


  const { products } = useContext(AppContext);

  const { results } = products;

  const getRandomId = () => {
    if(results !== undefined) {
      const randomId = Math.floor(Math.random() * results.length);
    return randomId;
    }
  }

  useEffect(() => {
    getRandomId();
  }, []);

  return (
    <div className='bottom-section'>
    <div className='bottom-product'>
      {
      results !== undefined &&
      <div className='left-item'>
          <Image
            src={
              results[0].thumbnail
            }
            alt='product'
            width="200"
            height="300"
          />
        <div>
          <p>{`Apenas ${results[0].price}`}</p>
          <p>
            {
              results[0].title
            }
            </p>
        </div>
      </div>
      }
        <button>Comprar</button>
    </div>
    <div className='middleLine'></div>
    <div className='bottom-product'>
      {
      results !== undefined &&
      <div className='left-item'>
          <Image
            src={
              results[5].thumbnail
            }
            alt='product'
            width="200"
            height="300"
          />
        <div>
          <p>{`Apenas ${results[5].price}`}</p>
          <p>
            {
              results[5].title
            }
            </p>
        </div>
      </div>
      }
        <button>Comprar</button>
    </div>
  </div>
  )
}
