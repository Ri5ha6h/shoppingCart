import React, { useState } from 'react'
import style from './Product.module.css'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Product = ({ image, name, key }) => {
  const [addCart, setAddCart] = useState(true)
  const [showCart, setShowCart] = useState(false)
  const [count, setCount] = useState(0)

  const clicked = () => {
    setCount(1)
    setAddCart(false)
    setShowCart(true)
  }

  const inc = () => {
    setCount(count + 1)
  }

  const dec = () => {
    setCount(count - 1)
    if (count <= 1) {
      setAddCart(true)
      setShowCart(false)
    }
  }

  return (
    <div className={style.list}>
      <img className={style.image} src={image} alt='' />
      <h1>{name}</h1>
      {addCart ? (
        <button className={style.cartbtn} onClick={clicked}>
          Add to cart
        </button>
      ) : null}
      {showCart ? (
        <div>
          <button className={style.btn} onClick={dec}>
            <FaMinus />
          </button>
          <span className={style.spn}>{count}</span>
          <button className={style.btn} onClick={inc}>
            <FaPlus />
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Product
