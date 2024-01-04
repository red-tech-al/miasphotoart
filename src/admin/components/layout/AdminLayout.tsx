import styles from "./AdminLayout.module.scss";
import { Link } from "react-router-dom";

import { Fade } from "react-reveal";

import { IoHome } from "react-icons/io5";

export default function AdminLayout({ children }) {

  return (
    <main className={styles.main}>

      <section className={styles.navbar}>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Fade top duration={700} ssrFadeout>
            <div className={`${styles.headerContainer} ${styles.backContainer}`}>
              <IoHome className={styles.headerIcon} />
            </div>
          </Fade>
        </Link>

      </section>
      <section className={styles.content}>
        {children}
      </section>
      <section className={styles.footer}></section>
    </main>
  );
}