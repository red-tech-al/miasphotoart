// import React from "react";
import styles from "./styles/ShopItem.module.scss";

export default function ShopItem(product: any) {
  return (
    <main className={styles.main}>
      <div>
        <text>{product.title}</text>
      </div>
      <div>
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.basePrice}</p>
      </div>
      <div>
        <button>Add to Cart</button>
      </div>
    </main>
  );
};