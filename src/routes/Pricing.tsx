import styles from "./styles/Pricing.module.scss";
import Layout from "../components/layout/Layout";

import { Link } from "react-router-dom";

import { Fade } from "react-reveal";

export default function Pricing() {
  return (
    <Layout isVisible={undefined} message={undefined} action={undefined}>
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
                  I specialize in crafting captivating portraits, be it outdoors or indoors, each capturing your unique essence. Offering individual image looks, every portrait reflects your distinctive personality. Included with your session is a USB data stick with curated images in web and print resolutions, along with private image rights for your exclusive enjoyment and sharing.
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
                  <text className={styles.title}>Weddings</text>
                  <text className={styles.subtitle}>Starting from €149</text>
                </div>
                <text className={styles.body}>
                  As a wedding photographer, I specialize in capturing precious, fleeting moments that celebrate love and life. I'm there, discreet yet fully immersed, seizing emotions, laughter, and tender touches that weave the story of your special day. These timeless moments are captured for eternity, residing forever in your heart.<br /><br />My services are available year-round for wedding coverage starting at 4 hours in Styria, Carinthia, and across Europe. In our initial meeting, share your wishes and ideas, and I'll craft a personalized offer just for you. Send a non-binding request, and let me make your day truly unforgettable.
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
                  <text className={styles.title}>Personal<br />Coaching</text>
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