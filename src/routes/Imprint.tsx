import styles from "./styles/Imprint.module.scss";
import Layout from "../components/layout/Layout";

import { Link } from "react-router-dom";

import { Fade } from "react-reveal";

export default function Imprint() {
  return (
    <Layout>
      <Fade ssrFadeout duration={420}>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <text className={styles.heroText}>Imprint</text>
          </section>
          <section className={styles.content}>
            <div className={styles.informationContainer}>
              <div className={styles.locationContainer}>
                <text className={styles.text}>Neubaugasse 130, 8020 Graz</text>
                <text className={styles.text}><b>Mobile:</b> +43 664 2072501</text>
                <text className={styles.text}><b>Mail:</b> info@miasphotoart.at</text>
              </div>
              <div className={styles.bankDetails}>
                <text className={styles.informationSectionTitle}>Bank Details:</text>
                <text className={styles.text}><b>IBAN:</b> AT64 3848 7000 0111 7498</text>
                <text className={styles.text}><b>BIC:</b> RZSTAT2G487</text>
                <text className={styles.text}><b>UID:</b> ATU65473659</text>
              </div>
            </div>
            <div className={styles.textContainer}>
              <text className={styles.sectionTitle}>Copyright</text>
              <text className={styles.text}>All photos, texts and graphics are subject to the copyright of Mag. Michaela Pfleger. The use of photos, texts and graphics is not permitted without the consent of the rights holder and will be prosecuted.</text>
              <text className={styles.sectionTitle}>Data protection declaration</text>
              <text className={styles.text}>The protection of your personal data is of particular concern to me. I therefore process your data exclusively on the basis of the legal provisions (GDPR, TKG 2003). In this data protection information we inform you about the most important aspects of data processing on our website.<br /><br />If you commission me, you agree to the statutory GDPR regulations.</text>
              <text className={styles.sectionTitle}>Contact</text>
              <text className={styles.text}>If you contact me using the form on the website or by email, the data you provide will be stored by us for six months in order to process the request and in case of follow-up questions. I will not pass on this data without consent.</text>
              <text className={styles.sectionTitle}>Cookies</text>
              <text className={styles.text}>This website does not use cookies or Google Analytics.</text>
              <text className={styles.sectionTitle}>Your Rights</text>
              <text className={styles.text}>Customer data is used exclusively to run the company correctly and to carry out the order requested by the customer.<br /><br />In principle, you have the rights to information, correction, deletion, restriction, data portability, revocation and objection. If you believe that the processing of your data violates data protection law or your data protection rights have been violated in any other way, you can complain to the supervisory authority. In Austria this is the data protection authority.</text>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                <i><text className={styles.text}>More Terms & Conditions</text></i>
              </Link>
            </div>
          </section>
        </main>
      </Fade>
    </Layout>
  );
}