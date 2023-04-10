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

  const getCategoriesList = async() => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const getProductsList = async() => {
    const products = await getProductsFromCategory(productId);
    setProducts(products);
    console.log(products);
    setLoading(false);
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
      setShowLogin
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
      setShowLogin
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
