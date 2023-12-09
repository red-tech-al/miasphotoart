import styles from "./styles/Portfolio.module.scss";
import Layout from "../components/layout/Layout";

export default function Portfolio() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={`${styles.row} ${styles.leftRow}`}>
            <text className={styles.rowTitle}>Tourism</text>
          </div>
          <div className={`${styles.row} ${styles.rightRow}`}>
            <text className={styles.rowTitle}>Tourism</text>
          </div>
          <div className={`${styles.row} ${styles.leftRow}`}>
            <text className={styles.rowTitle}>Tourism</text>
          </div>
          <div className={`${styles.row} ${styles.rightRow}`}>
            <text className={styles.rowTitle}>Tourism</text>
          </div>
          <div className={`${styles.row} ${styles.leftRow}`}>
            <text className={styles.rowTitle}>Tourism</text>
          </div>
        </section>
      </main>
    </Layout>
  );
}