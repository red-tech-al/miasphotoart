import styles from "./AdminLayout.module.scss";

export default function AdminLayout({ children }) {
  return (
    <main className={styles.main}>
      <section className={styles.navbar}></section>
      <section className={styles.content}>
        {children}
      </section>
      <section className={styles.footer}></section>
    </main>
  );
}