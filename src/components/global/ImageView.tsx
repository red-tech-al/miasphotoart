import React from "react";
import styles from "./styles/ImageView.module.scss"

export default function ImageView(props: any) {
  const [offsetY, setOffsetY] = React.useState(0);

  console.log(JSON.stringify(props.clickCoordinates))

  React.useEffect(() => {
    if (props.show && props.clickCoordinates) {

      const { clientX, clientY } = props.clickCoordinates;
      console.log(clientX, clientY);
      const offsetY = parseInt(clientY) + screen.height / 2;

      setOffsetY(offsetY);
    }
  }, [props.show, props.clickCoordinates]);

  return (
    <main className={styles.main} style={{ display: `${(props.show) ? "flex" : "none"}`, left: "0", top: `${offsetY}px` }}>
      <div className={styles.overlayBackground} onClick={props.close}>
        {offsetY}
        <img src={props.imageUrl} alt={props.imageTitle} className={styles.image} />
      </div>
    </main>
  );
}