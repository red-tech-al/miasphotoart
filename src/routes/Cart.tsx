import styles from "./styles/Cart.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";

import CartView from "../components/CartView";

import Eternity from "../assets/images/product_images/eternity.jpeg";

import validateEmail from "../context/validateEmail";

export default function Cart() {

  const bestSellers = [
    {
      title: "Eternity", /* use title as id for navigation, get data from db */
      basePrice: "€130.00",
      secondPrice: "€370.00",
      description: "Old Alpine House, Austria. Exclusively limited to a collection of 200 meticulously crafted pieces, each one bearing a unique hand-signed signature, adding a touch of individuality and exclusivity to every item.",
      imageUrl: Eternity,
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
      ],
      maxQuantity: 200,
      size: [
        {
          value: "60x40",
          title: "60cm x 40cm",
          price: "€130 (VAT Incl., Shipping Costs Excl.)"
        },
        {
          value: "150x100",
          title: "150cm x 100cm",
          price: "€370 (VAT Incl., Shipping Costs Excl.)"
        },
      ]
    }
  ]

  const email = "davidguri@yahoo.co";
  const valid = JSON.stringify(validateEmail(email));

  return (
    <Layout>
      <Fade duration={450} ssrFadeout>
        <main className={styles.main}>
          <Fade left duration={1000} ssrFadeout>
            <section className={styles.items}>
              <CartView title={bestSellers[0].title} imageUrl={bestSellers[0].imageUrl} description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum." price={bestSellers[0].basePrice} />
              <CartView title={bestSellers[0].title} imageUrl={bestSellers[0].imageUrl} description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum." price={bestSellers[0].basePrice} />
              <CartView title={bestSellers[0].title} imageUrl={bestSellers[0].imageUrl} description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum." price={bestSellers[0].basePrice} />
              <div className={styles.infoContainer}>
                <div className={styles.leftInfoContainer}>
                  <input className={styles.voucherInput} placeholder="Voucher Code" />
                  <div className={styles.voucherButton} onClick={() => { }}>
                    <text className={styles.voucherButtonText}>Apply Voucher</text>
                  </div>
                </div>
                <div className={styles.rightInfoContainer}>
                  <text className={styles.infoText}>Total: <span className={styles.bold}>€390</span></text>
                </div>
              </div>
            </section>
          </Fade>
          <Fade right duration={1000} ssrFadeout>
            <section className={styles.checkout}>
              <text className={styles.checkoutTitle}>Checkout {valid}</text>
            </section>
          </Fade>
        </main>
      </Fade>
    </Layout>
  )
}