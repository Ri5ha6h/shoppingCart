import React, { useState } from 'react'
import Product from './Product'
import './App.css'
import Data from './data.json'

const App = () => {
  const [product, setProduct] = useState(Data)

  return (
    <div className='App'>
      {product.map((item) => (
        <Product key={item.id} image={item.image} name={item.name} />
      ))}
    </div>
  )
}

export default App
