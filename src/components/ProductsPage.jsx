import Image from 'next/image';
import Footer from './Footer';
import Categories from './Categories';
import SalesPage from './SalesPage';

export default function ProductsPage() {
  return (
    <section className='mainPage'>
        <Categories />
        <div className='centerContainer'>
          <SalesPage />
          <Footer />
        </div>
   </section>
  )
}

