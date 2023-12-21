import React from "react"
import ImageView from "../components/global/ImageView";

const viewImageHandler = (imageUrl: string, imageTitle: string) => {
  const [show, setShow] = React.useState(false);

  const toggleView = () => {
    setShow(!show);
  }

  return <ImageView show={show} toggleView={toggleView} imageUrl={imageUrl} imageTitle={imageTitle} />
}

export default viewImageHandler