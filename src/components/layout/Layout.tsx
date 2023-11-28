import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.scss";

import { IoAlbumsOutline, IoClose } from "react-icons/io5";

export default function Layout({ children }) {

  const [isOpenNav, setIsOpenNav] = React.useState("false");

  function toggleNav() {
    setIsOpenNav(isOpenNav === "true" ? "false" : "true");
  }

  return (
    <main className={styles.main}>
      <button className={styles.navToggle} onClick={() => toggleNav()} style={{ backgroundColor: `rgb(${(isOpenNav === "false") ? "91, 105, 134" : "225, 213, 189"})` }}>
        {(isOpenNav === "false") ? <IoAlbumsOutline className={styles.icon} style={{ color: "rgb(241, 235, 223)" }} /> : <IoClose className={styles.icon} style={{ color: "rgb(32, 25, 16)" }} />}
      </button>
      <section className={styles.content} style={{ transform: `translateY(${(isOpenNav === "false") ? "0%" : "-45%"})` }}>
        {children}
      </section>
      <section className={styles.nav}>
        <div className={styles.navLinksContainer} style={{ transform: `translateY(${(isOpenNav === "false") ? "120%" : "0%"}) scale(${(isOpenNav === "false") ? "0" : "1"})`, height: `${(isOpenNav === "false") ? "0vh" : "45vh"}` }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Home</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Portfolio</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Pricing</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Videography</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>Shop</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} className={styles.navLink}>
            <text className={styles.navLinkText}>About</text>
            <div className={styles.navImage} />
          </Link>
        </div>
      </section>
      <section className={styles.footer}></section>
    </main>
  );
}