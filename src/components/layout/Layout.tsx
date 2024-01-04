import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Layout.module.scss";

import {
  IoAlbumsOutline,
  IoClose,
  IoBagHandle,
  IoPersonCircle,
  IoArrowBack,
  IoLockClosed
} from "react-icons/io5";

import { Fade } from "react-reveal";
import Alert from "../global/Alert";
import ImageView from "../global/ImageView";

export default function Layout({
  children,
  isVisible,
  message,
  action,
  isShowImageViewer,
  isClose,
  imageUrl,
  imageTitle,
}) {

  const location = useLocation().pathname;
  const nav = useNavigate();

  const [isOpenNav, setIsOpenNav] = React.useState("false");

  function toggleNav() {
    setIsOpenNav(isOpenNav === "true" ? "false" : "true");
  }

  const email: string = "davidguri@yahoo.com";
  const cartItems = 3;
  const loggedIn = false;
  const username = null; // retrieve this data from the database

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        {
          (location.includes("/shop/") || location === "/terms" || location === "/login" || location === "/cart")
            ?
            <div className={`${styles.headerContainer} ${styles.backContainer}`} onClick={() => nav(-1)}>
              <IoArrowBack className={styles.headerIcon} />
            </div>
            :
            <div style={{ display: "none" }}></div>
        }
        <Alert isVisible={isVisible || false} message={message || { title: "", body: "" }} action={action || { title: "", link: "" }} />
        <ImageView show={isShowImageViewer || false} close={isClose || null} image={{ url: imageUrl || "", title: imageTitle || "" }} />
        <Fade top duration={1000} ssrFadeout>
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`${styles.headerContainer} ${styles.cartContainer}`}>
              <IoBagHandle className={styles.headerIcon} />
              <text className={styles.headerText}>You have {cartItems} {cartItems.toString() == "1" ? "item" : "items"} in your cart.</text> {/* Retrieve this data from the database */}
            </div>
          </Link>
        </Fade>
        <Fade top duration={850} ssrFadeout>
          <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={`${styles.headerContainer} ${styles.loginContainer}`}>
              <IoPersonCircle className={styles.headerIcon} />
              <text className={styles.headerText}>{loggedIn ? username : "Login"}</text>
              {/* Show username when logged in */}
            </div>
          </Link>
        </Fade>
        {
          (email == "davidguri@yahoo.com")
            ?
            <Fade top duration={700} ssrFadeout>
              <Link to="admin/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={`${styles.headerContainer} ${styles.loginContainer}`}>
                  <IoLockClosed className={styles.headerIcon} />
                  <text className={styles.headerText}>Admin Panel</text>
                </div>
              </Link>
            </Fade>
            :
            <div style={{ display: "none" }}></div>
        }
      </section>
      {
        (location.includes("/shop/") || location === "/terms" || location === "/login" || location === "/cart")
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