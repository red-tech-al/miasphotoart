import styles from "./styles/Cart.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";

import CartView from "../components/CartView";

import { IoCloseCircle } from "react-icons/io5";

import Eternity from "../assets/images/product_images/eternity.jpeg";
import Coaching from "../assets/images/product_images/photo-coaching.jpeg";
import Muschel from "../assets/images/product_images/muschel.jpeg";

// import validateEmail from "../context/validateEmail";
// import validatePhone from "../context/validatePhone";
// import validateFname from "../context/validateFname";
// import filterWords from "../context/wordFilter";

export default function Cart() {

  const bestSellers = [
    {
      title: "Eternity", /* use title as id for navigation, get data from db */
      basePrice: "€130",
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
    },
    {
      title: "Mindful Photo Coaching",
      basePrice: "€288",
      maxPrice: "€288",
      imageUrl: Coaching,
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
      title: "Present",
      basePrice: "€130",
      maxPrice: "€370",
      imageUrl: Muschel,
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
  ] // get these values from db

  return (
    <Layout isVisible={undefined} message={undefined} action={undefined} isShowImageViewer={undefined} isClose={undefined} imageTitle={undefined} imageUrl={undefined}>
      <Fade duration={450} ssrFadeout>
        <main className={styles.main}>
          <Fade left duration={1000} ssrFadeout>
            <section className={styles.items}>
              {bestSellers.map((bestSeller, i) => {
                return (
                  <div className={styles.cartRow}>
                    <div className={styles.removeContainer}>
                      <IoCloseCircle className={styles.removeIcon} onClick={() => { }} />
                    </div>
                    <CartView key={i} title={bestSeller.title} imageUrl={bestSeller.imageUrl} description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum." price={bestSeller.basePrice} />
                  </div>
                )
              })}
              <div className={styles.infoContainer}>
                <div className={styles.leftInfoContainer}>
                  <input className={styles.voucherInput} placeholder="Voucher Code" />
                  <div className={styles.voucherButton} onClick={() => { }}>
                    <text className={styles.voucherButtonText}>Apply Voucher</text>
                  </div>
                </div>
                <div className={styles.rightInfoContainer}>
                  <text className={styles.infoText}>Total: <span className={styles.bold}>€548</span></text>
                </div>
              </div>
            </section>
          </Fade>
          <Fade right duration={1000} ssrFadeout>
            <section className={styles.checkout}>
              <text className={styles.checkoutTitle}>Checkout</text>
              {/* Add form here */}
            </section>
          </Fade>
        </main>
      </Fade>
    </Layout>
  )
}