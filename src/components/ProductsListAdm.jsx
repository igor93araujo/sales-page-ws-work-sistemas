import React from 'react'

export default function ProductsListAdm() {
  const [todos, setTodos] = React.useState([])
  const [newTodo, setNewTodo] = React.useState('')
  const [ showAddProduct, setShowAddProduct ] = React.useState(false)
  const [ productName, setProductName ] = React.useState('')
  const [ productPrice, setProductPrice ] = React.useState('')
  const [editingProduct, setEditingProduct] = React.useState(null)


  const addProductToList = () => {
    const newProduct = {
      product: productName,
      price: productPrice
    }
    setTodos([...todos, newProduct])
    setShowAddProduct(false)
  }

  const saveProduct = () => {
    const newTodos = todos.map((todo) => {
      if (todo.product === editingProduct.product) {
        return { ...todo, product: productName, price: productPrice }
      }
      return todo
    })
    setTodos(newTodos)
    setEditingProduct(null)
    setProductName('')
    setProductPrice('')
  }

  const cancelEdit = () => {
    setEditingProduct(null)
    setProductName('')
    setProductPrice('')
  }
  
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
        >List of Products</h1>
        <button 
          type='button'
          onClick={() => setShowAddProduct(!showAddProduct)}
          className='addBtn'
        > + New 
        </button>
      </div>
      <div>
        <table>
          <tbody>
            {
              todos.map((todo) => (
                <tr key={todo.product}>
                  <td className='productName'>{todo.product}</td>
                  <td className='productPrice'>{` $ ${todo.price}`}</td>
                  <td className='productBtns'>
                  <button
                    type="button"
                    onClick={() => setEditingProduct(todo)}
                    className='editBtn'
                  >
                    Edit
                  </button>
                    <button
                      type='button'
                      onClick={
                        () => {
                          const newTodos = todos.filter((item) => item.product !== todo.product)
                          setTodos(newTodos)
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
        showAddProduct &&
      <form >
        <label htmlFor="product">Product</label>
        <input
          type="text"
          name="product"
          id="product"
          onChange={
            (e) => setProductName(e.target.value)
          }
          />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          onChange={
            (e) => setProductPrice(e.target.value)
          }
        />
        <button
          type="button"
          onClick={() => addProductToList()}
        >
        Save
        </button>
      </form>
      }
{
  editingProduct ? (
    <form>
      <label htmlFor="product">Product</label>
      <input
        type="text"
        name="product"
        id="product"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <label htmlFor="price">Price</label>
      <input
        type="text"
        name="price"
        id="price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button type="button" onClick={saveProduct}>
        Save
      </button>
      <button type="button" onClick={cancelEdit}>
        Cancel
      </button>
    </form>
  ) : (
    showAddProduct && (
      <form>
        {/* ... */}
      </form>
    )
  )
}

    </section>
  )
}
