import styles from "./styles/Dashboard.module.scss";
import AdminLayout from "../components/layout/AdminLayout";

import { Fade } from "react-reveal";

export default function Dashboard() {
  return (
    <AdminLayout>
      <Fade ssrFadeout duration={450}>
        <main className={styles.main}>
          Dashboard
        </main>
      </Fade>
    </AdminLayout>
  );
}