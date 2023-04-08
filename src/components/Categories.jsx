import { useEffect, useState } from 'react';


export default function Categories() {

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(endPoint);
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <aside>
          <p>Categorias</p>
          <ul>
            {
              categories.map((category) => (
                <li
                  key={category.id}
                  onClick={ () => { console.log(category.id) } }
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
