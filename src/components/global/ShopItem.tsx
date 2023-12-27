// import React from "react";
import styles from "./styles/ShopItem.module.scss";
import { useLocation } from "react-router-dom";

export default function ShopItem() {

  const location = useLocation().pathname;
  const itemId = location.split("shop/")[2];
  const itemId_normalized = itemId.replace("%20", " ");

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
      }
    );
  }

  return (
    <main className={styles.main}>
      <div>
        <text>{toTitleCase(itemId_normalized)}</text>
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