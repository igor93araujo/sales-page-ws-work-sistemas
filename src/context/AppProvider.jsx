import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { AppContext } from './AppContext';
import { getCategories, getProductsFromCategory } from '@/services/api';

export function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomProduct, setRandomProduct] = useState(0);
  const [carrosselProducts, setCarrosselProducts] = useState([]);
  const [bannerItem, setBannerItem] = useState({});
  const [categories, setCategories] = useState([]);
  const [productId, setProductId] = useState('MLB5672');
  const [showLogin, setShowLogin] = useState(false);

  const [ showAddProduct, setShowAddProduct ] = useState(false)
/*   const [ productName, setProductName ] = useState('')
  const [ productPrice, setProductPrice ] = useState('')
  const [editingProduct, setEditingProduct] = useState(null) */
  const [showCategories, setShowCategories] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const getCategoriesList = async() => {
    try {
      const categoriesList = await getCategories();
      setCategories(categoriesList);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsList = async() => {
    try {
      const productsList = await getProductsFromCategory(productId);
      setProducts(productsList);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getCategoriesList();
    getProductsList();
  }, []);

  const context = useMemo(
    () => ({
      products,
      setProducts,
      loading,
      setLoading,  
      randomProduct,
      setRandomProduct,
      carrosselProducts,
      setCarrosselProducts,
      categories,
      productId,
      setProductId,
      bannerItem, 
      setBannerItem,
      showLogin,
      setShowLogin,
      setShowCategories,
      showCategories,
      showMenu,
      setShowMenu,
    }),
    [
      products,
      setProducts,
      loading,
      setLoading,
      randomProduct,
      setRandomProduct,
      carrosselProducts,
      setCarrosselProducts,
      categories,
      productId,
      setProductId,
      bannerItem, 
      setBannerItem,
      showLogin,
      setShowLogin,
      setShowCategories,
      showCategories,
      showMenu,
      setShowMenu,
    ],
  );

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
