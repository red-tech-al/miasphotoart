import styles from "./styles/ImageView.module.scss"

export default function ImageView(props: any) {
  return (
    <main className={styles.main} style={{ display: props.show ? "flex" : "none" }} onClick={props.toggleView}>
      <img src={props.imageUrl} alt={props.imageTitle} className={styles.image} />
    </main>
  );
}