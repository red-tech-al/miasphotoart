import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <section className={styles.nav}></section>
      <section className={styles.content}>
        {children}
      </section>
      <section className={styles.footer}></section>
    </main>
  );
}