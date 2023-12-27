import styles from "./styles/ImageView.module.scss"

export default function ImageView(props: any) {
  return (
    <main className={styles.main} style={{ display: `${(props.show) ? "flex" : "none"}`, left: "0", top: `0` }}>
      <div className={styles.overlayBackground} onClick={props.close}>
        <img src={props.imageUrl} alt={props.imageTitle} className={styles.image} />
      </div>
    </main>
  );
}