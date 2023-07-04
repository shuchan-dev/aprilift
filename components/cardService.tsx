import React from "react";
import style from "@/components/cardService.module.css";
import Image from "next/image";
function CardService(props: any) {
  const { title, deskripsi, img } = props;
  const { card, cardStyle, judul, paragraf, images, link } = style;
  return (
    <>
      <div className={`${card}`}>
        <div className={`${cardStyle}`}>
          <h1 className={`${judul}`}>{title}</h1>
          <p className={`${paragraf}`}>{deskripsi}</p>
          <a
            className={`${link}`}
            href="https://www.whatsapp.com"
            target="_blank"
          >
            lebih lanjut
          </a>
        </div>
        <div className={`${images}`}>
          <Image src={img} alt="imagas" width={400} height={250} />
        </div>
      </div>
    </>
  );
}

export default CardService;
