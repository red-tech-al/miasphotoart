import React from "react";
import styles from "./styles/ShopItem.module.scss";
import Layout from "./layout/Layout";

import { IoBagHandle, IoCaretDown } from "react-icons/io5";
import { Fade } from "react-reveal";
import { useParams } from "react-router-dom";

import Eternity from "../assets/images/product_images/eternity.jpeg";

export default function ShopItem() {

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
  // this value will be retrieved from the database

  function toTitleCase(str: string) {
    return str = str.toLowerCase().split(' ').map((word) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(" ");
  }

  const params = useParams();
  const itemId = params.id;
  const itemId_normalized = toTitleCase(itemId);

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

  const Category = (props: any) => {
    return (
      <div className={styles.category}>
        <text className={styles.categoryText}>{props.title}</text>
      </div>
    );
  }

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 8500)
  }

  return (
    <Layout isVisible={isVisible} message={{ title: `${itemId_normalized} Successfully Added To Cart!`, body: "You can check out your cart by clicking the button below." }} action={{ title: "Go To Cart", link: "/cart" }} isShowImageViewer={undefined} isClose={undefined} image={undefined}>
      <Fade duration={450} ssrFadeout>
        <main className={styles.main}>
          <section className={styles.productSection}>
            <Fade ssrFadeout left duration={1200}>
              <div className={styles.openProductLeftContainer}>
                <div className={styles.openProductImage} style={{ backgroundImage: `url(${Eternity})` }} onClick={() => { }} />
              </div>
            </Fade>
            <Fade ssrFadeout right duration={1200}>
              <div className={styles.openProductRightContainer}>
                <div className={styles.openProductTitleContainer}>
                  <text className={styles.openProductTitle}>{itemId_normalized}</text>
                  <text className={styles.openProductSubtitle}>{
                    (size === bestSellers[0].size[0].value) ? `${(quantity == 0) ? bestSellers[0].basePrice : "€" + (130 * quantity)} (VAT Incl., Shipping Costs Excl.)` : (size === bestSellers[0].size[1].value) ? `${(quantity == 0) ? bestSellers[0].secondPrice : "€" + (370 * quantity)} (VAT Incl., Shipping Costs Excl.)` : (size === "Size") && `Starting From ${bestSellers[0].basePrice}`
                  }
                  </text>
                  <div className={styles.openProductDescriptionContainer}>
                    <text className={styles.openProductDescription}>{bestSellers[0].description}</text>
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
                    <div className={styles.cartButton} onClick={toggleVisibility}>
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
        </main>
      </Fade>
    </Layout>
  );
};