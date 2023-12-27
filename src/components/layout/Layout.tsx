import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import styles from "./Layout.module.scss";

import { IoAlbumsOutline, IoClose, IoBagHandle, IoPersonCircle, IoArrowBack } from "react-icons/io5";

import { Fade } from "react-reveal"

export default function Layout({ children }) {
  const location = useLocation().pathname;
  const nav = useNavigate();

  const [isOpenNav, setIsOpenNav] = React.useState("false");

  function toggleNav() {
    setIsOpenNav(isOpenNav === "true" ? "false" : "true");
  }

  const cartItems = 1;
  const loggedIn = false;
  const username = null; // retrieve this data from the database

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        {
          (location.includes("/shop/") || location === "/login")
            ?
            <div className={`${styles.headerContainer} ${styles.backContainer}`} onClick={() => nav(-1)}>
              <IoArrowBack className={styles.headerIcon} />
            </div>
            :
            <div style={{ display: "none" }}></div>
        }
        <div className={`${styles.headerContainer} ${styles.cartContainer}`} onClick={() => { }}>
          <IoBagHandle className={styles.headerIcon} />
          <text className={styles.headerText}>You have {cartItems} {cartItems.toString() == "1" ? "item" : "items"} in your cart.</text> {/* Retrieve this data from the database */}
        </div>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <div className={`${styles.headerContainer} ${styles.loginContainer}`}>
            <IoPersonCircle className={styles.headerIcon} />
            <text className={styles.headerText}>{loggedIn ? username : "Login"}</text>
            {/* Show username when logged in */}
          </div>
        </Link>
      </section>
      {
        (location.includes("/shop/") || location === "/login")
          ?
          <div style={{ display: "none" }}></div>
          :
          <button className={styles.navToggle} onClick={() => toggleNav()} style={{ backgroundColor: `rgb(${(isOpenNav === "false") ? "91, 105, 134" : "225, 213, 189"})` }}>
            {(isOpenNav === "false") ? <IoAlbumsOutline className={styles.icon} style={{ color: "rgb(241, 235, 223)" }} /> : <IoClose className={styles.icon} style={{ color: "rgb(32, 25, 16)" }} />}
          </button>
      }
      <section className={styles.content} style={{ transform: `translateY(${(isOpenNav === "false") ? "0vh" : "-45vh"})` }} onClick={() => setIsOpenNav("false")}>
        {children}
      </section>
      <section className={styles.nav}>
        <div className={styles.navLinksContainer} style={{ transform: `translateY(${(isOpenNav === "false") ? "120%" : "0%"}) scale(${(isOpenNav === "false") ? "0" : "1"})`, height: `${(isOpenNav === "false") ? "0vh" : "45vh"}` }}>
          <Link to="/" className={styles.navLink} onClick={() => toggleNav()}>
            <text className={styles.navLinkText}>Home</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/portfolio" className={styles.navLink} onClick={() => toggleNav()}>
            <text className={styles.navLinkText}>Portfolio</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/pricing" className={styles.navLink} onClick={() => toggleNav()}>
            <text className={styles.navLinkText}>Pricing</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/" className={styles.navLink} onClick={() => toggleNav()}>
            <text className={styles.navLinkText}>Videography</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/shop" className={styles.navLink} onClick={() => toggleNav()}>
            <text className={styles.navLinkText}>Shop</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/about" className={styles.navLink} onClick={() => toggleNav()}>
            <text className={styles.navLinkText}>About Me</text>
            <div className={styles.navImage} />
          </Link>
          <Link to="/contact" className={styles.navLink} onClick={() => toggleNav()}>
            <text className={styles.navLinkText}>Contact</text>
            <div className={styles.navImage} />
          </Link>
        </div>
      </section>
      {
        (location === "/")
          ?
          <div style={{ display: "none" }}></div>
          :
          <section className={styles.footer}>
            <Fade left duration={750}>
              <div className={styles.footerLeftContainer}>
                <text className={styles.copyrightText}>© Copyright Mias Photoart</text>
              </div>
            </Fade>
            <Fade right duration={750}>
              <div className={styles.footerRightContainer}>
                <Link to="/contact" className={styles.footerLink}>
                  <text className={styles.footerLinkText}>Contact</text>
                </Link>
                <Link to="/imprint" className={styles.footerLink}>
                  <text className={styles.footerLinkText}>Imprint</text>
                </Link>
              </div>
            </Fade>
          </section>
      }
    </main>
  );
}