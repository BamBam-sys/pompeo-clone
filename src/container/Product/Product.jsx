import React, { useContext, useState } from 'react';
import { GrFacebookOption, GrGooglePlus, GrTwitter } from 'react-icons/gr';
import { useParams } from 'react-router-dom';
import { GoToTop, Hero2, RelatedItem, SubHeading } from '../../components';
import { storeContext } from '../../context';

import styles from './Product.module.css';

const Product = () => {
  const [qty, setQty] = useState(1);
  // const { qty, setQty } = useContext(storeContext);

  const { id } = useParams();

  const { addToCart, find } = useContext(storeContext);

  const [productItem] = find(parseInt(id), 'id');

  const handleChange = (event) => {
    const val = event.target.value;

    if (val >= 1) setQty(val);
  };

  const productProps = {
    headingText: `product page`,
    bodyText: `The attractions of ceramics lie partly in its contradictions. 
    It is both difficult and easy, with an element beyond our control. 
    It is both extremely fragile and durable. Like 'Sumi' ink painting,
     it does not lend itself to erasures and indecision.`,
  };

  return (
    <div className="content">
      <section className={styles.product}>
        <Hero2 {...productProps} />
      </section>

      <section className="p-TopBottom">
        <div className={`${styles.item} container`}>
          <div className={styles.itemImg}>
            <img src={productItem.img} alt="product item" />
          </div>
          <div className={styles.itemDetails}>
            <SubHeading text={'product detaiil'} />
            <h2>{productItem.title}</h2>
            <div className={styles.productPrice}>$ {productItem.price} USD</div>
            <p>{productItem.info}</p>
            <div className={styles.productP}>
              category: <span>{productItem.category}</span>
            </div>
            <div className={styles.productP}>
              track number: <span> {productItem.trackNumber} </span>
            </div>
            <div className={styles.productP}>
              share on:
              <span>
                <span className={styles.socialIcon}>
                  <GrFacebookOption className={styles.icon} />
                </span>
                <span className={styles.socialIcon}>
                  <GrTwitter className={styles.icon} />
                </span>
                <span className={styles.socialIcon}>
                  <GrGooglePlus className={styles.icon} />
                </span>
              </span>
            </div>
            <div className={styles.productP}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={qty}
                onChange={handleChange}
              />
            </div>
            <button
              className={styles.btn}
              onClick={() => {
                addToCart(parseInt(id), parseInt(qty));
                setQty(1);
              }}
            >
              add to cart
            </button>
          </div>
        </div>
      </section>

      <section className="p-TopBottom borderTop">
        <RelatedItem />
      </section>
      <GoToTop />
    </div>
  );
};

export default Product;
