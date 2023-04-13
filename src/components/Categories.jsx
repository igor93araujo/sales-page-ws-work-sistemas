import { AppContext } from '@/context/AppContext';
import { getProductsFromCategory } from '@/services/api';
import { useContext } from 'react';


export default function Categories() {

  const { setProducts, setLoading, categories, showCategories, setShowCategories } = useContext(AppContext);
 
  const showProducts = async (id) => {
    setShowCategories(false)
    const products = await getProductsFromCategory(id)
    setProducts(products)
    setLoading(false)
  };
  
  return (
    <aside className={
      showCategories ? 'categories' : 'hiddenCategories'
    }>
          <h2>Categorias</h2>
          <ul>
            {
              categories.map((category) => (
                <li
                  key={category.id}
                  onClick={ () => showProducts(category.id)}
                  className='category'
                >
                  {`- ${category.name}`}
                </li>
              ))
            }
          </ul>
     </aside>
  )
}
