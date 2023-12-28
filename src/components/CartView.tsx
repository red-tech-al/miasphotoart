import styles from "./styles/CartView.module.scss";

export default function CartView(props: any) {
  return (
    <main className={styles.main}>
      <div className={styles.leftContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} alt={props.title} src={props.imageUrl} />
        </div>
        <div className={styles.textContainer}>
          <text className={styles.title}>{props.title}</text>
          <text className={styles.description}>{props.description}</text>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <text className={styles.price}>{props.price}</text>
        <div className={styles.quantitySelector}></div>
      </div>
    </main>
  );
}