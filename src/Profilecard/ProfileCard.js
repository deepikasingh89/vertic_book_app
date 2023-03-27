import React from "react";

export default function ProfileCard(props) {
  //console.log(props);
  // const title = props.title;
  // const handle = props.handle;
  //const {title,handle}=props;  //desturcting

  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={props.imgSrc} width={40} alt="img" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{props.title}</p>
            <p class="subtitle is-6">{props.handle}</p>
          </div>
        </div>
        <div class="content">{props.description}</div>
      </div>
    </div>
  );
}
