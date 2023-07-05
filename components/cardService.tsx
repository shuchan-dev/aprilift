import React from "react";
import style from "@/components/cardService.module.css";
import Image from "next/image";
import Link from "next/link";
function CardService(props: any) {
  const { title, deskripsi, img, h, w, links } = props;
  const { card, cardStyle, judul, paragraf, images, link } = style;
  return (
    <>
      <div className={`${card}`}>
        <div className={`${cardStyle}`}>
          <h1 className={`${judul}`}>{title}</h1>
          <p className={`${paragraf}`}>{deskripsi}</p>

          <Link className={`${link}`} href={`${links}`}>
            Lihat lebih lanjut
          </Link>
        </div>
        <div className={`${images}`}>
          <Image src={img} alt="imagas" width={h} height={w} />
        </div>
      </div>
    </>
  );
}

export default CardService;
