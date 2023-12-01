import styles from "./splashscreen.module.scss";
import Logo from "./assets/react.svg";

export default function SplashScreen() {
  return (
    <main className={styles.main}>
      <img src={Logo} alt="logo-splash" className={styles.logo} />
    </main>
  );
}
