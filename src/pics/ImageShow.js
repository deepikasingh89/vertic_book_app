import React from "react";
import './ImageList.css';

function ImageShow({ image }) {
  return (
    <div className="image-list">
      {/* <div class="card-image">
        <figure class="image is-4by3"> */}
          <img src={image.urls.small} alt={image.alt_description} />
        {/* </figure>
      </div> */}
    </div>
  );
}

export default ImageShow;