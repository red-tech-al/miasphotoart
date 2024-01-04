import React from "react";
import styles from "./styles/Shop.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";

import { IoBagHandle, IoCaretDown } from "react-icons/io5";

import Eternity from "../assets/images/product_images/eternity.jpeg";
import Coaching from "../assets/images/product_images/photo-coaching.jpeg";
import Elefant from "../assets/images/product_images/elefant.jpeg";
import Trust from "../assets/images/product_images/trust.jpeg";
import Seychellen from "../assets/images/product_images/seychellen.jpeg";
import Muschel from "../assets/images/product_images/muschel.jpeg";
import Packer_Stausse from "../assets/images/product_images/packer-stausse.jpeg";
import Gutschein from "../assets/images/product_images/gutschein.jpeg";
import Weitblick from "../assets/images/product_images/weitblick.jpeg";

import { useNavigate } from "react-router-dom";

export default function Shop() {

  const nav = useNavigate();

  const [isShowImageViewer, setIsShowImageViewer] = React.useState(false);

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
  ] // get values from db

  const Product = (props: any) => {

    return (
      <>
        <div className={styles.product} onClick={() => nav(`/shop/${(props.title).toLowerCase()}`)}>
          <div style={{ backgroundImage: `url(${props.imageUrl})` }} className={styles.productImage}></div>
          <div className={styles.productTextContainer}>
            <text className={styles.productTitle}>{props.title}</text>
            <text className={styles.productPrice}>{props.basePrice === props.maxPrice ? "" : "From"} {props.basePrice}</text>
          </div>
        </div>
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
      title: "Quality",
      basePrice: "€130",
      maxPrice: "€370.00",
      imageUrl: Elefant,
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
      title: "Clarity",
      basePrice: "€130.00",
      maxPrice: "€370.00",
      imageUrl: Packer_Stausse,
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
      title: "Natural Beauty",
      basePrice: "€130.00",
      maxPrice: "€370.00",
      imageUrl: Seychellen,
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
      title: "Trust",
      basePrice: "€130.00",
      maxPrice: "€370.00",
      imageUrl: Trust,
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
    {
      title: "Foresight",
      basePrice: "€130.00",
      maxPrice: "€370.00",
      imageUrl: Weitblick,
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
    {
      title: "Voucher",
      basePrice: "€50.00",
      maxPrice: "€50.00",
      imageUrl: Gutschein,
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
  ] // get values from db

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

  const imageProps = {
    title: `${bestSellers[0].title}`,
    url: `${bestSellers[0].imageUrl}`
  }

  return (
    <Layout isVisible={undefined} message={undefined} action={undefined} isShowImageViewer={isShowImageViewer} isClose={() => setIsShowImageViewer(false)} imageUrl={imageProps.url} imageTitle={imageProps.title}>
      <Fade ssrFadeout duration={460}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <text className={styles.heroText}>Shop</text>
          </section>
          <section className={styles.openProduct}>
            <Fade ssrFadeout left duration={1200}>
              <div className={styles.openProductLeftContainer}>
                <div className={styles.openProductImage} style={{ backgroundImage: `url(${bestSellers[0].imageUrl})` }} onClick={() => setIsShowImageViewer(true)} />
              </div>
            </Fade>
            <Fade ssrFadeout right duration={1200}>
              <div className={styles.openProductRightContainer}>
                <div className={styles.openProductTitleContainer}>
                  <text className={styles.openProductTitle}>Eternity</text>
                  <text className={styles.openProductSubtitle}>{
                    (size === "60x40") ? `${(quantity == 0) ? "€130" : "€" + (130 * quantity)} (VAT Incl., Shipping Costs Excl.)` : (size === "150x100") ? `${(quantity == 0) ? "€370" : "€" + (370 * quantity)} (VAT Incl., Shipping Costs Excl.)` : (size === "Size") && "Starting From €130"
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
                      <text className={styles.toggle} style={{ opacity: (size == "Size") ? 0.5 : 1, cursor: (size == "Size") ? "not-allowed" : "pointer" }} onClick={size == "Size" ? () => { } : quantityDecrease}>-</text>
                      <text className={styles.quantityButtonText}>{quantity || "Quantity"}</text>
                      <text className={styles.toggle} style={{ opacity: (size == "Size") ? 0.5 : 1, cursor: (size == "Size") ? "not-allowed" : "pointer" }} onClick={size == "Size" ? () => { } : quantityIncrease}>+</text>
                    </div>
                    <div className={styles.cartButton} onClick={() => {/* Add this item and respective quantity to database */ }}>
                      <text className={styles.cartButtonText}>Add To Bag <IoBagHandle size={24} /></text>
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
                  <div style={{ width: "33.33333333333333333%" }} key={i}>
                    <Fade bottom duration={600 + (i * 225)} ssrFadeout>
                      <Product key={i} title={bestSeller.title} basePrice={bestSeller.basePrice} imageUrl={bestSeller.imageUrl} maxPrice={bestSeller.maxPrice} categories={bestSeller.categories} maxQuantity={bestSeller.maxQuantity} size={bestSeller.size} />
                    </Fade>
                  </div>
                )
              })}
            </div>
          </section>
          <section className={styles.products}>
            {products.map((product, i) => {
              return (
                <div style={{ width: "21.25%", marginBottom: "5vw" }} key={i}>
                  <Fade ssrFadeout bottom duration={450 + (i * 200)}>
                    <Product key={i} title={product.title} basePrice={product.basePrice} imageUrl={product.imageUrl} maxPrice={product.maxPrice} categories={product.categories} maxQuantity={product.maxQuantity} size={product.size} />
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
