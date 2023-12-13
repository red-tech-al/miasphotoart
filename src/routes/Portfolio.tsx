import styles from "./styles/Portfolio.module.scss";
import Layout from "../components/layout/Layout";

export default function Portfolio() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={`${styles.row} ${styles.leftRow}`}>
            <text className={styles.rowTitle}>Tourism & Travel</text>
          </div>
          <div className={`${styles.row} ${styles.rightRow}`}>
            <text className={styles.rowTitle}>Culinary</text>
          </div>
          <div className={`${styles.row} ${styles.leftRow}`}>
            <text className={styles.rowTitle}>Advertising</text>
          </div>
          <div className={`${styles.row} ${styles.rightRow}`}>
            <text className={styles.rowTitle}>Wedding</text>
          </div>
          <div className={`${styles.row} ${styles.leftRow}`}>
            <text className={styles.rowTitle}>Portrait</text>
          </div>
          <div className={`${styles.row} ${styles.rightRow}`}>
            <text className={styles.rowTitle}>Sports</text>
          </div>
        </section>
      </main>
    </Layout>
  );
}