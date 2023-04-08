import Image from 'next/image';

export default function BannerProducts() {
  return (
    <section className='bannerProduct'>
    <Image
      src='https://picsum.photos/200/300'
      alt='product'
      width="800"
      height="300"
    />
    <div>
      <p>Product name</p>
      <p>Product price</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus soluta quidem aliquid laborum amet impedit similique veritatis hic sed esse! Quidem sint aperiam libero error assumenda exercitationem voluptates molestias cumque?</p>
      <button>Buy</button>
    </div>
  </section>
  )
}
