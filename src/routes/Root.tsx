import styles from "./styles/Root.module.scss";
import Layout from "../components/layout/Layout";

export default function Root() {

  const images = document.getElementsByClassName("image");

  let globalIndex = 0;

  const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    // figure out how to get these styles to the correct image.

    image.dataset.status = "active";
  }

  window.onmousemove = e => {
    const lead = images[globalIndex];

    activate(lead, e.clientX, e.clientY);
  }

  return (
    <>
      <Layout>
        <main className={styles.main}>
          <style>
            {
              `
                .image[data-status="active"] {
                  display: block;
                }

                .image[data-status="inactive"] {
                  display: none;
                }
              `
            }
          </style>
          <section className={styles.heroSection}>
            <img src="https://source.unsplash.com/random" alt="gallery_image" className={styles.image} data-index="0" data-status="inactive" />
            <img src="https://source.unsplash.com/random" alt="gallery_image" className={styles.image} data-index="1" data-status="inactive" />
            <img src="https://source.unsplash.com/random" alt="gallery_image" className={styles.image} data-index="2" data-status="inactive" />
            <img src="https://source.unsplash.com/random" alt="gallery_image" className={styles.image} data-index="3" data-status="inactive" />
            <img src="https://source.unsplash.com/random" alt="gallery_image" className={styles.image} data-index="4" data-status="inactive" />
            <img src="https://source.unsplash.com/random" alt="gallery_image" className={styles.image} data-index="5" data-status="inactive" />
            <img src="https://source.unsplash.com/random" alt="gallery_image" className={styles.image} data-index="6" data-status="inactive" />
            <img src="https://source.unsplash.com/random" alt="gallery_image" className={styles.image} data-index="7" data-status="inactive" />
            <img src="https://source.unsplash.com/random" alt="gallery_image" className={styles.image} data-index="8" data-status="inactive" />
          </section>
        </main>
      </Layout>
    </>
  );
}