import { AppContext } from '@/context/AppContext';
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'

export default function BottomProducts() {


  const { products, loading } = useContext(AppContext);

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
          loading ? <p>Loading...</p> :
        results !== undefined &&
        <div className='left-item'>
            <Image
              src={
                results[0].thumbnail
              }
              alt='product'
              width="200"
              height="200"
            />
          <div>
            <h2>{`Apenas $ ${results[0].price}`}</h2>
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
        loading ? <p>Loading...</p> :
      results !== undefined &&
      <div className='left-item'>
          <Image
            src={
              results[5].thumbnail
            }
            alt='product'
            width="200"
            height="200"
          />
        <div>
          <h2>{`Apenas $ ${results[5].price}`}</h2>
          <p>
            {
              results[5].title
            }
            </p>
            <p>
              Clique <a href={
                results[5].permalink
              }>aqui</a> para ver mais detalhes.
            </p>
        </div>
      </div>
      }
        <button style={
          { color: 'red'}
        }>Comprar</button>
    </div>
  </div>
  )
}
