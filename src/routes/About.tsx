import styles from "./styles/About.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";

import Michaela from "../assets/images/michaela.jpeg"

export default function About() {
  return (
    <Layout>
      <Fade ssrFadeout duration={420}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <img src={Michaela} alt={"image"} className={styles.heroImage} />
            <text className={styles.heroTitle}>Michaela Maria Pfleger</text>
          </section>
        </main>
      </Fade>
    </Layout>
  )
}