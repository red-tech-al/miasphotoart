import styles from "./styles/Alert.module.scss";
import { Link } from "react-router-dom";

export default function Alert(props: any) {
  return (
    <main className={styles.main} style={{ display: props.isVisible ? "flex" : "none" }}>
      <text className={styles.alertTitle}>{props.message.title}</text>
      <text className={styles.alertText}>{props.message.body}</text>
      <Link to={props.action.link} style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.navigationButton}>
          <text className={styles.navigationButtonText}>{props.action.title}</text>
        </div>
      </Link>
    </main>
  );
}