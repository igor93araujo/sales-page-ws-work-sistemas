import Image from 'next/image';

export default function Carrosel() {
  return (
    <div className='Carrossel'>
      <div className='carrosselContainer'>
        <div className='carrosselItem'>
          <Image
            src='https://picsum.photos/200/300'
            alt='product'
            width="100"
            height="100"
          />
          <p>Product price</p>
          <p>Product name</p>
        </div>
        <div className='carrosselItem'>
          <Image
            src='https://picsum.photos/200/300'
            alt='product'
            width="100"
            height="100"
          />
          <p>Product price</p>
          <p>Product name</p>
        </div>
      </div>
  </div>
  )
}
