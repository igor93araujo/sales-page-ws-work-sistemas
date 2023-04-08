import Image from 'next/image';
import BannerProducts from './BannerProducts';
import Carrosel from './Carrosel';
import BottomProducts from './BottomProducts';

export default function SalesPage() {
  return (
    <section className='productsContainer'>
      <BannerProducts />
      <Carrosel />
      <BottomProducts />
  </section>
  )
}
