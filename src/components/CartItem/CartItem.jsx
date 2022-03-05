import React, { useContext, useEffect, useState } from 'react';

import styles from './CartItem.module.css';

import { storeContext } from '../../context';
//
const CartItem = ({ product: { id, img, title, price, count } }) => {
  const { updateCart, removeCartItem } = useContext(storeContext);
  const [qty, setQty] = useState(count);

  useEffect(() => setQty(count), [count]);

  useEffect(() => updateCart(parseInt(id), parseInt(qty)), [qty]);

  const handleChange = (event) => {
    const val = event.target.value;
    if (val >= 1) setQty(val);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.product}>
        <img className={styles.productImg} src={img} alt="products" />
        <div className={styles.productText}>
          <h2>{title}</h2>
          <div className={styles.productPrice}>$ {price} USD</div>
          <p onClick={() => removeCartItem(parseInt(id))}>remove</p>
        </div>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={qty}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CartItem;
