// import React from "react";
import styles from "./styles/ShopItem.module.scss";
import { useLocation } from "react-router-dom";

export default function ShopItem() {

  const location = useLocation().pathname;
  const itemId = location.split("shop/")[2];
  const itemId_normalized = itemId.replace("%20", " ");

  return (
    <main className={styles.main}>
      <div>
        <text>{itemId_normalized}</text>
      </div>
      <div>
        <p>{itemId_normalized}</p>
      </div>
      <div>
        <button>Add to Cart</button>
      </div>
    </main>
  );
};