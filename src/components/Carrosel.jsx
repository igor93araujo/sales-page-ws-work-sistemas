import { AppContext } from '@/context/AppContext';
import { getProductById } from '@/services/api';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


export default function Carrosel() {

  const { carrosselProducts, setCarrosselProducts, products, setBannerItem} = useContext(AppContext);

  const { results } = products;

  const handleLeftArrow = () => {
    const firstItem = carrosselProducts[0];
    const newCarrosselProducts = carrosselProducts.slice(1);
    newCarrosselProducts.push(firstItem);
    setCarrosselProducts(newCarrosselProducts);
  }

  const handleRightArrow = () => {
    const lastItem = carrosselProducts[carrosselProducts.length - 1];
    const newCarrosselProducts = carrosselProducts.slice(0, -1);
    newCarrosselProducts.unshift(lastItem);
    setCarrosselProducts(newCarrosselProducts);
  }

  const handleItemDetails = async(id) => {
    const product = await getProductById(id);
    setBannerItem(product)
    }
  

  useEffect(() => {
    if(results !== undefined) {
      const newCarrosselProducts = results.slice(0, 10);
      setCarrosselProducts(newCarrosselProducts);
    }
  }, [results]);
    

  return (
      <div className="outerCarrossel">
        <BsChevronCompactLeft className="leftArrow" onClick={ handleLeftArrow } style={{fontSize: 50}} />
        <div className='innerCarrosel'>
      {
          carrosselProducts.map((product) => (
            <div
              key={ product.id }
              className='carrosselItem'
              onClick={ () => handleItemDetails(product.id) }
            >
              <Image
                src={ product.thumbnail }
                alt={ product.title }
                width={ 100 }
                height={ 100 }
              />
              <p>
                {
                  product.price !== null ? `$ ${product.price}` : 'Aguardando adição de preço'
                }
              </p>
            </div>
          ))
        }
        </div>
        <BsChevronCompactRight className="rightArrow" onClick={ handleRightArrow } style={{fontSize: 50}} />
      </div>
  
  )
}

