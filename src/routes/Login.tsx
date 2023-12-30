import React from "react";
import styles from "./styles/Login.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";

export default function Login() {

  const [fname, setFname] = React.useState("");
  const [email, setEmail] = React.useState("");

  const contactHandler = () => {
    if (fname && email) {
      setFname("");
      setEmail("");
    }
    // upload this data to the database, and save for later use.
  }

  return (
    <Layout isVisible={undefined} message={undefined} action={undefined}>
      <Fade duration={450} ssrFadeout>
        <main className={styles.main}>
          <form className={styles.contactForm}>
            <text className={styles.pageTitle}>Log In</text>
            <input className={styles.contactFormInput} placeholder="Your Full Name" value={fname} onChange={(e) => setFname(e.target.value)} type="name" />
            <input className={styles.contactFormInput} placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <div className={styles.contactSubmitButton} onClick={contactHandler}>
              <text className={styles.contactSubmitButtonText}>Submit.</text>
            </div>
          </form>
        </main>
      </Fade>
    </Layout>
  )
}