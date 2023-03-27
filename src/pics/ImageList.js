import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";
export default function ImageList(props) {
  //  const renderImages =
  return (
    <div className="image-list">
      {props.images.map((image) => {
        return <ImageShow key={image.id} image={image} />;
      })}
    </div>
  );
}
