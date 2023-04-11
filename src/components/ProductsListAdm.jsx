import React, { useEffect } from 'react'

export default function ProductsListAdm() {

  let savedProducts = [];
  typeof window !== 'undefined' && (savedProducts = JSON.parse(localStorage.getItem('products')) )
  const [products, setProducts] = React.useState(
    savedProducts|| []
  ) 

  const [ showAddProduct, setShowAddProduct ] = React.useState(false)
  const [ productName, setProductName ] = React.useState('')
  const [ productPrice, setProductPrice ] = React.useState('')
  const [editingProduct, setEditingProduct] = React.useState(null)


  const addProductToList = () => {
    const newProduct = {
      product: productName,
      price: productPrice
    }
    setProducts([...products, newProduct])
    setShowAddProduct(false)
  }

  const saveProduct = () => {
    const newProducts = products.map((item) => {
      if (item.product === editingProduct.product) {
        return { ...item, product: productName, price: productPrice }
      }
      return item
    })
    setProducts(newProducts)
    setEditingProduct(null)
    setProductName('')
    setProductPrice('')
  }

  const cancelEdit = () => {
    setEditingProduct(null)
    setProductName('')
    setProductPrice('')
  }

  useEffect(() => {
   localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    products && setProducts(products)
  }, [])
   
  
   return (
    <section style={
      { width: '80%',
        height: '100%',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
      <div style={
          {display: 'flex', gap: '1rem', alignItems: 'center'}
        }>
        <h1 
          style={
            {textDecoration: 'underline', fontSize: '1.5rem'}
          }
        >Lista de produtos</h1>
        <button 
          type='button'
          onClick={() => setShowAddProduct(!showAddProduct)}
          className='addBtn'
        > + Novo 
        </button>
        
      </div>
        
      {
        showAddProduct &&
      <form className='addProductForm' >
        <label htmlFor="product">Produto</label>
        <input
          type="text"
          name="product"
          id="product"
          onChange={
            (e) => setProductName(e.target.value)
          }
          />
        <label htmlFor="price">Preço</label>
        <input
          type="text"
          name="price"
          id="price"
          onChange={
            (e) => setProductPrice(e.target.value)
          }
          disabled={!productName}
        />
        <button
          type="button"
          onClick={() => addProductToList()}
        >
        Salvar
        </button        >
      </form>
      }
      <div>
        <table>
          <tbody>
            {
              products.map((product) => (
                <tr key={product.product}>
                  <td className='productName'>{product.product}</td>
                  <td className='productPrice'>{` $ ${product.price}`}</td>
                  <td className='productBtns'>
                  <button
                    type="button"
                    onClick={() => setEditingProduct(product)}
                    className='editBtn'
                  >
                    Editar
                  </button>
                    <button
                      type='button'
                      onClick={
                        () => {
                          const newProducts = products.filter((item) => item.product !== product.product)
                          setProducts(newProducts)
                        }
                      }
                      className='deleteBtn'
                    >X</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      
{
  editingProduct ? (
    <form className='addProductForm'>
      <label htmlFor="product">Produto</label>
      <input
        type="text"
        name="product"
        id="product"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <label htmlFor="price">Preço</label>
      <input
        type="text"
        name="price"
        id="price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button
        type="button"
        onClick={saveProduct}
        disabled={!productName && !productPrice}
      >
        Salvar
      </button>
      <button type="button" onClick={cancelEdit}>
        Cancelar
      </button>
    </form>
  ) : null
}
    </section>
  )
}
