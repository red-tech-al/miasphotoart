import styles from "./styles/Root.module.scss";
import Layout from "../components/layout/Layout";

export default function Root() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <style>
            {
              `
                .image[data-status="active"] {
                  display: block;
                }

                .image[data-status="inactive"] {
                  display: none;
                }
              `
            }
          </style>
          <section className={styles.heroSection}></section>
        </main>
      </Layout>
    </>
  );
}