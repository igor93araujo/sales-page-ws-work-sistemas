import AsideAdm from './AsideAdm';
import ProductsListAdm from './ProductsListAdm';

export default function HeaderAdm() {
  return (
    <><header>
      <h2>Administração de produtos</h2>
    </header>
    <section className='mainPage'>
        <AsideAdm />
        <div className='centerContainer'>
          <section className='productsContainer'>
            <ProductsListAdm />
          </section>
        </div>
      </section></>
  )
}