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
            <div className={styles.bioSectionTextContainer}>
              <text className={styles.bioTitle}>Why are you so drawn to photography?</text>
              <text className={styles.bioText}>Because I love telling life through the language of images and in doing so I create a connection between fleeting snapshots and eternity - either in color or in black and white.</text>
            </div>
            <div className={styles.bioSectionTextContainer}>
              <text className={styles.bioTitle}>What do you enjoy doing most thematically?</text>
              <text className={styles.bioText}>Exciting tourism and landscape photography, individual image shoots for small and medium-sized businesses and soulful, emotional wedding reports. I prefer to document authentically and then add that certain something during editing. As a trained tourism manager and coach with international professional experience and a qualified photographer, my focus is the narrative perspective.</text>
            </div>
            <div className={styles.bioSectionTextContainer}>
              <text className={styles.bioTitle}>What makes you special as a photographer?</text>
              <text className={styles.bioText}>I see myself as an empathetic content designer of a bigger picture.<br />My customers can rely on me and I always do everything I can to achieve the desired effect of individuality. It is important to me to have a good relationship and to guarantee a professional, timely process.<br />I also offer photos in combination with print materials and the production of image videos. Corporate identity orders with selected cooperation partners from the areas of texting and public relations as well as web design and graphics are also possible.
              </text>
            </div>
            <div className={styles.bioSectionTextContainer}>
              <text className={styles.bioTitle}>What do you do when you're not taking photos?</text>
              <text className={styles.bioText}>That happens too ;-). Then I'm either researching my next trip or I'm traveling. In winter you can find me on the ski slopes in every free moment and in between I enjoy good food and good conversations with friends.</text>
              <text className={styles.bioText} style={{ fontWeight: "700", paddingTop: "2.75vh" }}>© Question: Mag. Nora Edelsbacher <a href="http://www.pr-architextur.at" style={{ color: "rgb(91, 105, 134)", textDecoration: "none" }}>( PR Architextur )</a></text>
            </div>
          </section>
        </main>
      </Fade>
    </Layout>
  )
}