import React from "react";
import styles from "./styles/Shop.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";

import { IoCart, IoCaretDown } from "react-icons/io5";

// import ShopItemModal from "../components/global/ShopModal";
import viewImageHandler from "../context/viewImageHandler";

export default function Shop() {

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
    // const [show, setShow] = React.useState(false);

    // const handleClick = () => {
    //   setShow(!show);
    // }

    return (
      <>
        <div className={styles.product} onClick={() => { }}>
          <img src={props.imageUrl} alt={props.title} className={styles.productImage} />
          <div className={styles.productTextContainer}>
            <text className={styles.productTitle}>{props.title}</text>
            <text className={styles.productPrice}>From {props.basePrice}</text>
          </div>
        </div>
        {/* <ShopItemModal title={props.title} basePrice={props.basePrice} imageUrl={props.imageUrl} show={show} /> */}
      </>

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
    {
      title: "The Golden Gate Bridge",
      basePrice: "€200.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
      categories: [
        {
          title: "Landscape",
        },
        {
          title: "City",
        },
        {
          title: "Bridge",
        },
      ],
      maxQuantity: 100,
      size: [
        {
          value: "60x40",
          title: "60cm x 40cm",
          price: "€200 (VAT Incl., Shipping Costs Excl.)"
        },
        {
          value: "150x100",
          title: "150cm x 100cm",
          price: "€400 (VAT Incl., Shipping Costs Excl.)"
        },
      ]
    },
    {
      title: "The Statue of Liberty",
      basePrice: "€175.00",
      imageUrl: "https://source.unsplash.com/1440x1440",
      categories: [
        {
          title: "Landscape",
        },
        {
          title: "City",
        },
        {
          title: "Landmark",
        },
      ],
      maxQuantity: 200,
      size: [
        {
          value: "60x40",
          title: "60cm x 40cm",
          price: "€175 (VAT Incl., Shipping Costs Excl.)"
        },
        {
          value: "150x100",
          title: "150cm x 100cm",
          price: "€350 (VAT Incl., Shipping Costs Excl.)"
        },
      ]
    },
  ]



  const [quantity, setQuantity] = React.useState(0);
  const [size, setSize] = React.useState("Size");

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

  const handleSizeSelection = (e: any) => {
    setSize(e.target.value);
  }


  return (
    <Layout>
      <Fade ssrFadeout duration={420}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <text className={styles.heroText}>Shop</text>
          </section>
          <section className={styles.openProduct}>
            <Fade ssrFadeout left duration={1200}>
              <div className={styles.openProductLeftContainer} onClick={() => viewImageHandler(bestSellers[0].imageUrl, bestSellers[0].title)}>
                <img className={styles.openProductImage} src={bestSellers[0].imageUrl} alt={bestSellers[0].title} />
              </div>
            </Fade>
            <Fade ssrFadeout right duration={1200}>
              <div className={styles.openProductRightContainer}>
                <div className={styles.openProductTitleContainer}>
                  <text className={styles.openProductTitle}>Eternity</text>
                  <text className={styles.openProductSubtitle}>{
                    (size === "60x40") ? `${(quantity == 0) ? "€130" : "€" + (130 * quantity)} (VAT Incl., Shipping Costs Excl.)` : (size === "150x100") ? `${(quantity == 0) ? "€130" : "€" + (130 * quantity)} (VAT Incl., Shipping Costs Excl.)` : (size === "Size") && "Starting From €130"
                  }
                  </text>
                  <div className={styles.openProductDescriptionContainer}>
                    <text className={styles.openProductDescription}>Old Alpine House, Austria. Exclusively limited to a collection of 200 meticulously crafted pieces, each one bearing a unique hand-signed signature, adding a touch of individuality and exclusivity to every item.</text>
                  </div>
                </div>
                <div className={styles.openProductButtonsContainer}>
                  <div className={styles.sizeButton}>
                    <select className={styles.sizeSelect} onChange={handleSizeSelection} id="sizeSelect" value={size}>
                      <option value="Size">Size</option>
                      <option value="60x40">60cm x 40cm</option>
                      <option value="150x100">150cm x 100cm</option>
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
            </Fade>
          </section>
          <section className={styles.bestSellersSection}>
            <Fade left ssrFadeout duration={800}>
              <text className={styles.sectionTitle}>Best Sellers</text>
            </Fade>
            <div className={styles.bestSellersContainer}>
              {bestSellers.map((bestSeller, i) => {
                return (
                  <Fade bottom duration={750 + (i * 150)} ssrFadeout>
                    <Product key={i} title={bestSeller.title} basePrice={bestSeller.basePrice} imageUrl={bestSeller.imageUrl} />
                  </Fade>
                )
              })}
            </div>
          </section>
          <section className={styles.products}>
            {products.map((product, i) => {
              return (
                <div style={{ width: "21.25%", marginBottom: "5vw" }} key={i}>
                  <Fade ssrFadeout duration={420}>
                    <Product key={i} title={product.title} basePrice={product.basePrice} imageUrl={product.imageUrl} />
                  </Fade>
                </div>
              )
            })}
          </section>
        </main>
      </Fade>
    </Layout>
  );
}
