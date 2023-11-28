import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.scss";

import { IoAlbumsOutline, IoCloseOutline } from "react-icons/io5";

export default function Layout({ children }) {

  const [isOpenNav, setIsOpenNav] = React.useState("false");

  function toggleNav() {
    setIsOpenNav(isOpenNav === "true" ? "false" : "true");
  }

  return (
    <body className={styles.main}>
      <section className={styles.content} style={{ transform: `translateY(${(isOpenNav === "false") ? "0%" : "-35%"})` }}>
        {children}
      </section>
      <section className={styles.nav}>
        <div className={styles.navLinksContainer} style={{ transform: `translateY(${(isOpenNav === "false") ? "120%" : "0%"}) scale(${(isOpenNav === "false") ? "0.9" : "1"})` }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Home</text>
            <img className={styles.navImage} src="https://source.unsplash.com/1440x2560" />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Portfolio</text>
            <img className={styles.navImage} src="https://source.unsplash.com/1440x2560" />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Pricing</text>
            <img className={styles.navImage} src="https://source.unsplash.com/1440x2560" />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Videography</text>
            <img className={styles.navImage} src="https://source.unsplash.com/1440x2560" />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Shop</text>
            <img className={styles.navImage} src="https://source.unsplash.com/1440x2560" />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>About</text>
            <img className={styles.navImage} src="https://source.unsplash.com/1440x2560" />
          </Link>
        </div>
        <button className={styles.navToggle} onClick={() => toggleNav()}>
          {(isOpenNav === "false") ? <IoAlbumsOutline className={`${styles.icon} ${styles.openIcon}`} /> : <IoCloseOutline className={`${styles.icon} ${styles.closeIcon}`} />}
        </button>
      </section>
      <section className={styles.footer}></section>
    </body>
  );
}