import React from "react";
import styles from "./styles/Contact.module.scss";
import Layout from "../components/layout/Layout";

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

  return (
    <Layout>
      <main className={styles.main}>
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
        <div className={styles.rightContainer}></div>
      </main>
    </Layout>
  );
}