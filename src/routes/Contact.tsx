import React from "react";
import styles from "./styles/Contact.module.scss";
import Layout from "../components/layout/Layout";

import ContactImage from "../assets/images/contact_image.jpeg";

import { Fade } from "react-reveal";

export default function Contact() {

  const [fname, setFname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");

  const contactHandler = () => {
    if (fname && email && subject) {
      setFname("");
      setEmail("");
      setSubject("");
      setBody("");
    }
  }

  const [flipped, setFlipped] = React.useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  }

  return (
    <Layout>
      <main className={styles.main}>
        <Fade ssrFadeout duration={1200} left>
          <div className={styles.leftContainer}>
            <text className={styles.pageTitle}>Contact Me</text>
            <form className={styles.contactForm}>
              <input className={styles.contactFormInput} placeholder="Your Full Name" value={fname} onChange={(e) => setFname(e.target.value)} type="name" />
              <input className={styles.contactFormInput} placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
              <input className={styles.contactFormInput} placeholder="Regarding" value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea className={styles.contactFormTextarea} placeholder="Your Message (optional)" value={body} onChange={(e) => setBody(e.target.value)} />
              <div className={styles.contactSubmitButton} onClick={contactHandler}>
                <text className={styles.contactSubmitButtonText}>Submit.</text>
              </div>
            </form>
          </div>
        </Fade>
        <Fade ssrFadeout duration={1600}>
          <div className={styles.rightContainer}>
            <div className={`${styles.topContainer} ${(flipped ? styles.flipped : "")}`}>
              <div className={styles.innerCard}>
                <img alt='contact' src={ContactImage} className={styles.image} onClick={handleFlip} />
                <div className={styles.backCard} onClick={handleFlip}>
                  <text className={styles.backCardText}><i>Don't shoot what it looks like. Shoot what it feels like.</i></text>
                  <text className={styles.backCardText} style={{ fontWeight: "800" }}>- David Alan Harvey</text>
                </div>
              </div>
            </div>
            <div className={styles.bottomContainer}>
              <Fade ssrFadeout duration={1000} bottom>
                <div className={styles.officeLocation}>
                  <text className={styles.officeLocationText}>Graz - Head Office</text>
                  <text className={styles.contactDetails}><span className={styles.bold}>Email:</span> info@miasphotoart.at</text>
                  <text className={styles.contactDetails}><span className={styles.bold}>Phone:</span> +43 664 2072501</text>
                </div>
              </Fade>
              <Fade ssrFadeout duration={1600} bottom>
                <div className={styles.officeLocation} style={{ textAlign: "right", alignItems: "flex-end" }}>
                  <text className={styles.officeLocationText}>Klagenfurt</text>
                  <text className={styles.contactDetails}><span className={styles.bold}>Email:</span> klagenfurt@miasphotoart.at</text>
                  <text className={styles.contactDetails}><span className={styles.bold}>Phone:</span> +43 664 2072501</text>
                </div>
              </Fade>
            </div>
          </div>
        </Fade>
      </main>
    </Layout>
  );
}