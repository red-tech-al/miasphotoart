import styles from "./styles/About.module.scss";
import Layout from "../components/layout/Layout";

import { Fade } from "react-reveal";

export default function About() {
  return (
    <Layout>
      <Fade ssrFadeout duration={420}>
        <main className={styles.main}>
          About Page
        </main>
      </Fade>
    </Layout>
  )
}