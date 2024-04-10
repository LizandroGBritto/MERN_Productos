import {Route, Routes} from 'react-router-dom'
import ProductForm from './components/ProductForm'
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
        <Route path="/" element={<ProductForm updateProduct={updateProduct} />} />
      </Routes>

    </div>
    </>
  )
}

export default App
