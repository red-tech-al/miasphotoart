import styles from "./styles/About.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";
import { HashLink } from "react-router-hash-link"

import Michaela from "../assets/images/michaela.jpeg";

import { IoArrowDown } from "react-icons/io5";

export default function About() {
  return (
    <Layout>
      <Fade ssrFadeout duration={420}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            {/* TODO: Make this a carousel like in the original website */}
            <img src={Michaela} alt={"image"} className={styles.heroImage} />
            <div className={styles.heroTextContainer}>
              <text className={styles.heroTitle}>Hi! I'm<br />Michaela Maria Pfleger</text>
              <HashLink smooth to="/about#bio" style={{ color: "inherit", textDecoration: "none" }}>
                <IoArrowDown className={styles.downArrow} />
              </HashLink>
            </div>
          </section>
          <section id="bio" className={styles.bioSection}>
            Bio
          </section>
        </main>
      </Fade>
    </Layout>
  )
}