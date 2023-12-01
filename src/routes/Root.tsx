import styles from "./styles/Root.module.scss";
import Layout from "../components/layout/Layout";

export default function Root() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            Root
          </section>
        </main>
      </Layout>
    </>
  );
}