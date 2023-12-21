import styles from "./styles/About.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";
import { HashLink } from "react-router-hash-link"

import Michaela from "../assets/images/michaela.jpeg";
import Michaela2 from "../assets/images/michaela_2.jpeg";
import Michaela3 from "../assets/images/michaela_3.jpeg";

import { Fade as SlideshowFade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { IoArrowDown } from "react-icons/io5";

export default function About() {

  const images = [
    {
      url: Michaela,
    },
    {
      url: Michaela2,
    },
    {
      url: Michaela3,
    },
  ]

  const bioQuestions = [
    {
      title: "Why are you so drawn to photography?",
      desc: "Because I love telling life through the language of images and in doing so I create a connection between fleeting snapshots and eternity - either in color or in black and white."
    },
    {
      title: "What do you enjoy doing most thematically?",
      desc: "Exciting tourism and landscape photography, individual image shoots for small and medium-sized businesses and soulful, emotional wedding reports. I prefer to document authentically and then add that certain something during editing. As a trained tourism manager and coach with international professional experience and a qualified photographer, my focus is the narrative perspective."
    },
    {
      title: "What makes you special as a photographer?",
      desc: `I see myself as an empathetic content designer of a bigger picture. My customers can rely on me and I always do everything I can to achieve the desired effect of individuality. It is important to me to have a good relationship and to guarantee a professional, timely process. I also offer photos in combination with print materials and the production of image videos. Corporate identity orders with selected cooperation partners from the areas of texting and public relations as well as web design and graphics are also possible.`
    },
    {
      title: "What do you do when you're not taking photos?",
      desc: "That happens too ;-). Then I'm either researching my next trip or I'm traveling. In winter you can find me on the ski slopes in every free moment and in between I enjoy good food and good conversations with friends."
    },
  ]

  const BioText = (props: any) => {
    return (
      <Fade bottom ssrFadeout duration={props.duration}>
        <div className={styles.bioSectionTextContainer}>
          <text className={styles.bioTitle}>{props.title}</text>
          <text className={styles.bioText}>{props.desc}</text>
        </div>
      </Fade>
    );
  }

  return (
    <Layout>
      <Fade ssrFadeout duration={420}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <Fade ssrFadeout duration={1600}>
              <div style={{ width: "50vw", height: "100vh" }}>
                <SlideshowFade arrows={false} duration={4000} transitionDuration={1400}>
                  {images.map((image, i) => (
                    <img className={styles.heroImage} src={image.url} key={i} />
                  ))}
                </SlideshowFade>
              </div>
            </Fade>
            <Fade ssrFadeout duration={1600}>
              <div className={styles.heroTextContainer}>
                <text className={styles.heroTitle}>Michaela Maria Pfleger</text>
                <text className={styles.heroSubtitle}>PHOTO & VIDEOGRAPHER</text>
                <HashLink smooth to="/about#bio" style={{ color: "inherit", textDecoration: "none" }}>
                  <IoArrowDown className={styles.downArrow} />
                </HashLink>
              </div>
            </Fade>
          </section>
          <section id="bio" className={styles.bioSection}>
            {bioQuestions.map((bioQuestion, i) => {
              return (
                <BioText key={i} duration={1000 + i * 150} title={bioQuestion.title} desc={bioQuestion.desc} />
              )
            })}
            <Fade bottom duration={1750} ssrFadeout>
              <text className={`${styles.bioText} ${styles.sourceText}`}>
                © Question: Mag. Nora Edelsbacher <a href="http://www.pr-architextur.at" style={{ color: "rgb(91, 105, 134)", textDecoration: "none" }}>( PR Architextur )</a>
              </text>
            </Fade>
          </section>
        </main>
      </Fade>
    </Layout>
  )
}