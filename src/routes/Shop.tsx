import React from "react";
import styles from "./styles/Shop.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";
import config from 'react-reveal/globals';

import { IoCart, IoCaretDown } from "react-icons/io5";

export default function Shop() {

  config({ ssrFadeout: true });

  const bestSellers = [
    {
      title: "Eternity",
      basePrice: "€130.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
      categories: [
        {
          title: "Landscape",
        },
        {
          title: "Nature",
        },
        {
          title: "Canvas",
        },
      ]
    },
    {
      title: "Mindful Photo Coaching",
      basePrice: "€130.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
      categories: [
        {
          title: "Landscape",
        },
        {
          title: "Nature",
        },
        {
          title: "Canvas",
        },
      ]
    },
    {
      title: "Eternity",
      basePrice: "€130.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
      categories: [
        {
          title: "Landscape",
        },
        {
          title: "Nature",
        },
        {
          title: "Canvas",
        },
      ]
    },
  ]

  const Product = (props: any) => {
    return (
      <div className={styles.product}>
        <img src={props.imageUrl} alt={props.title} className={styles.productImage} />
        <div className={styles.productTextContainer}>
          <text className={styles.productTitle}>{props.title}</text>
          <text className={styles.productPrice}>From {props.basePrice}</text>
        </div>
      </div>
    );
  }

  const Category = (props: any) => {
    return (
      <div className={styles.category}>
        <text className={styles.categoryText}>{props.title}</text>
      </div>
    );
  }

  const products = [
    {
      title: "Eternity",
      basePrice: "€130.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
    },
    {
      title: "Mindful Photo Coaching",
      basePrice: "€130.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
    },
    {
      title: "Eternity",
      basePrice: "€130.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
    },
    {
      title: "Eternity",
      basePrice: "€130.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
    },
    {
      title: "Mindful Photo Coaching",
      basePrice: "€130.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
    },
    {
      title: "Eternity",
      basePrice: "€130.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
    },
  ]

  const [quantity, setQuantity] = React.useState(0);

  const quantityDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const quantityIncrease = () => {
    if (quantity < 200) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <Layout>
      <Fade ssrFadeout duration={420}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <text className={styles.heroText}>Shop</text>
          </section>
          <section className={styles.openProduct}>
            <div className={styles.openProductLeftContainer}>
              <img src={"https://source.unsplash.com/1441x1441"} className={styles.openProductImage} alt={"leftImage"} />
            </div>
            <div className={styles.openProductRightContainer}>
              <div className={styles.openProductTitleContainer}>
                <text className={styles.openProductTitle}>Eternity</text>
                <text className={styles.openProductSubtitle}>€130 (VAT Incl., Shipping Costs Excl.)</text>
                <div className={styles.openProductDescriptionContainer}>
                  <text className={styles.openProductDescription}>Old Alpine House, Austria. Exclusively limited to a collection of 200 meticulously crafted pieces, each one bearing a unique hand-signed signature, adding a touch of individuality and exclusivity to every item.</text>
                </div>
              </div>
              <div className={styles.openProductButtonsContainer}>
                <div className={styles.sizeButton}>
                  <select className={styles.sizeSelect}>
                    <option value="0">Size</option>
                    <option value="150">150</option>
                    <option value="150">150</option>
                  </select>
                  <IoCaretDown size={25} />
                </div>
                <div className={styles.twoButtonContainer}>
                  <div className={styles.quantityButton}>
                    <text className={styles.toggle} onClick={quantityDecrease}>-</text>
                    <text className={styles.quantityButtonText}>{quantity || "Quantity"}</text>
                    <text className={styles.toggle} onClick={quantityIncrease}>+</text>
                  </div>
                  <div className={styles.cartButton}>
                    <text className={styles.cartButtonText}>Add To Cart <IoCart size={24} /></text>
                  </div>
                </div>
              </div>
              <div className={styles.openProductCategoriesContainer}>
                {bestSellers[0].categories.map((openProduct, i) => {
                  return (
                    <Category title={openProduct.title} key={i} />
                  )
                })}
              </div>
            </div>
          </section>
          <section className={styles.bestSellersSection}>
            <text className={styles.sectionTitle}>Best Sellers</text>
            <div className={styles.bestSellersContainer}>
              {bestSellers.map((bestSeller, i) => {
                return (
                  <Product key={i} title={bestSeller.title} basePrice={bestSeller.basePrice} imageUrl={bestSeller.imageUrl} />
                )
              })}
            </div>
          </section>
          <section className={styles.products}>
            {products.map((product, i) => {
              return (
                <div style={{ width: "21.25%", marginBottom: "5vw" }} key={i}>
                  <Product key={i} title={product.title} basePrice={product.basePrice} imageUrl={product.imageUrl} />
                </div>
              )
            })}
          </section>
        </main>
      </Fade>
    </Layout>
  );
}