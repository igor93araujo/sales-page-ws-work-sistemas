import { AppContext } from '@/context/AppContext';
import { getProductsFromCategory } from '@/services/api';
import { useContext } from 'react';


export default function Categories() {

  const { setProducts, setLoading, categories } = useContext(AppContext);
 
  const showProducts = async (id) => {
    const products = await getProductsFromCategory(id)
    setProducts(products)
    setLoading(false)
  };
  
  return (
    <aside>
          <h2>Categorias</h2>
          <ul>
            {
              categories.map((category) => (
                <li
                  key={category.id}
                  onClick={ () => showProducts(category.id)}
                  className='category'
                >
                  {category.name}
                </li>
              ))
            }
          </ul>
     </aside>
  )
}
