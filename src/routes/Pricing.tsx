import styles from "./styles/Pricing.module.scss";
import Layout from "../components/layout/Layout";

import { Link } from "react-router-dom";

import { Fade } from "react-reveal";

export default function Pricing() {
  return (
    <Layout isVisible={undefined} message={undefined} action={undefined} isShowImageViewer={undefined} isClose={undefined} imageTitle={undefined} imageUrl={undefined}>
      <Fade ssrFadeout duration={420}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <div className={`${styles.column}`}>
              <text className={styles.imageTitle}>Families &<br />Couples</text>
            </div>
            <div className={`${styles.column}`}>
              <text className={styles.imageTitle}>Weddings</text>
            </div>
            <div className={`${styles.column}`}>
              <text className={styles.imageTitle}>Personal<br />Coaching</text>
            </div>
          </section>
          <section className={styles.section} id="families">
            <Fade ssrFadeout duration={1200} left>
              <div className={styles.leftContainer}>
                <div className={styles.titleContainer}>
                  <text className={styles.title}>Families<br />& Couples</text>
                  <text className={styles.subtitle}>Starting from €149</text>
                </div>
                <text className={styles.body}>
                  I specialize in capturing cherished moments, crafting lasting joy through relaxed shoots that are perfect for any occasion or as heartfelt gifts, ensuring they resonate deeply with you and your loved ones.<br /><br />
                  Outdoor portrait sessions with diverse individual image looks, providing a USB containing images in web and print resolutions, and ensuring private image rights for a versatile and personalized collection.
                </text>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.ctaButton}>
                    <text className={styles.ctaButtonText}>Inquire</text>
                  </div>
                </Link>
              </div>
            </Fade>
            <Fade ssrFadeout duration={1400}>
              <div className={styles.rightContainer}>
                <div className={styles.sectionImage}></div>
                <div className={styles.sectionImage}></div>
                <div className={styles.sectionImage}></div>
              </div>
            </Fade>
          </section>
          <section className={styles.section} id="weddings">
            <Fade ssrFadeout duration={1400}>
              <div className={`${styles.leftContainer} ${styles.reverseLeftContainer}`}>
                <div className={styles.sectionImage}></div>
                <div className={styles.sectionImage}></div>
                <div className={styles.sectionImage}></div>
              </div>
            </Fade>
            <Fade ssrFadeout duration={1200} right>
              <div className={styles.reverseRightContainer}>
                <div className={styles.titleContainer}>
                  <text className={styles.title}>FIX THIS SECTION TO INCLUDE PACKAGES</text>
                  <text className={styles.subtitle}>Starting from €149</text>
                </div>
                <text className={styles.body}>
                  As a wedding photographer, I specialize in capturing those fleeting, invaluable moments that define your special day. Discreetly blending into your celebration, I immortalize the emotions, laughter, and tender touches that weave your story. Available year-round for 4-hour wedding reports in Styria, Carinthia, and Europe, I welcome an introductory meeting to create a personalized offer, ensuring YOUR DAY becomes an unforgettable memory.<br /><br />My services are available year-round for wedding coverage starting at 4 hours in Styria, Carinthia, and across Europe. In our initial meeting, share your wishes and ideas, and I'll craft a personalized offer just for you. Send a non-binding request, and let me make your day truly unforgettable.
                </text>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.ctaButton}>
                    <text className={styles.ctaButtonText}>Inquire</text>
                  </div>
                </Link>
              </div>
            </Fade>
          </section>
          <section className={styles.section} id="families">
            <Fade ssrFadeout duration={1200} left>
              <div className={styles.leftContainer}>
                <div className={styles.titleContainer}>
                  <text className={styles.title}>FIX THIS SECTION TO INCLUDE PACKAGES</text>
                  <text className={styles.subtitle}>Starting from €149</text>
                </div>
                <text className={styles.body}>
                  Outdoor and indoor photo-shoots. Portraits including individual image look. USB data stick with images in web and print resolution. Private image rights.
                </text>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.ctaButton}>
                    <text className={styles.ctaButtonText}>Inquire</text>
                  </div>
                </Link>
              </div>
            </Fade>
            <Fade ssrFadeout duration={1400}>
              <div className={styles.rightContainer}>
                <div className={styles.sectionImage}></div>
                <div className={styles.sectionImage}></div>
                <div className={styles.sectionImage}></div>
              </div>
            </Fade>
          </section>
        </main>
      </Fade>
    </Layout>
  )
}