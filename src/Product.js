import React, { useState } from 'react'
import style from './Product.module.css'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Product = ({ image, name, key }) => {
  const [addCart, setAddCart] = useState(true)
  const [showCart, setShowCart] = useState(false)
  const [count, setCount] = useState(null)

  const clicked = () => {
    setCount(1)
    setAddCart(false)
    setShowCart(true)
  }
  
  const updateCount = (e) => {
    let x = Number(e.target.value)
    setCount(x)
     if (e.target.value === '') {
      setCount(null)
      setAddCart(false)
      setShowCart(true)
    }
    else if (x == 0) {
      setAddCart(true)
      setShowCart(false)
    }
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
        <div className={style.cart}>
          <button className={style.btn} onClick={dec}>
            <FaMinus />
          </button>
          <input
            className={style.inp}
            type='number'
            value={count}
            onChange={updateCount}
          />
          <button className={style.btn} onClick={inc}>
            <FaPlus />
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Product
