import React from "react";

function CardService(props: any) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.deskripsi}</p>
      <a href="https://www.whatsapp.com" target="_blank">
        lebih lanjut
      </a>
    </>
  );
}

export default CardService;
