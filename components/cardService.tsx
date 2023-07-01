import React from "react";
import style from "@/components/cardService.module.css";
function CardService(props: any) {
  const { card, cardStyle, judul, paragraf, images, link } = style;
  return (
    <>
      <div className={`${card}`}>
        <div className={`${cardStyle}`}>
          <h1 className={`${judul}`}>{props.title}</h1>
          <p className={`${paragraf}`}>{props.deskripsi}</p>
          <a
            className={`${link}`}
            href="https://www.whatsapp.com"
            target="_blank"
          >
            lebih lanjut
          </a>
        </div>
        <div className={`${images}`}>
          <h2>For Image</h2>
        </div>
      </div>
    </>
  );
}

export default CardService;
