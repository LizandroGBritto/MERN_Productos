import {Route, Routes} from 'react-router-dom'
import ProductForm from './components/ProductForm'
import List from './components/List'
import Detalle from './components/Detalle'
import UpdateProduct from './components/UpdateProduct'
import {useState} from 'react'

function App() {
  const [products, setProducts] = useState([])

  const updateProduct = (product) => {
    setProducts([...products, product])
  }


  return (
    <>
    <div className="container">
      <Routes>
        <Route path="/" element={<List products={products} setProducts={setProducts} />} />
        <Route path="/new" element={<ProductForm updateProduct={updateProduct} />} />
        <Route path="/products/:id" element={<Detalle />} />
        <Route path='/products/:id/update' element={<UpdateProduct updateProduct={updateProduct} />} />
      </Routes>

    </div>
    </>
  )
}

export default App
