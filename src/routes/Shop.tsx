import styles from "./styles/Shop.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";
import config from 'react-reveal/globals';

export default function Shop() {

  config({ ssrFadeout: true });

  const bestSellers = [
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

  const Product = (props) => {
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
  ]

  return (
    <Layout>
      <Fade ssrFadeout duration={420}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <text className={styles.heroText}>Shop</text>
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
          {/* <section className={styles.products}>
            {products.map((product, i) => {
              return (
                <Product key={i} title={product.title} basePrice={product.basePrice} imageUrl={product.imageUrl} />
              )
            })}
          </section> */}
        </main>
      </Fade>
    </Layout>
  );
}