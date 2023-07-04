import React from "react";
import ImagesGaleri from "./imagesGaleri";
import styles from "./galeri.module.css";
export default function Galeri() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>Galeri Kegiatan</h1>
        <ImagesGaleri />
      </div>
    </>
  );
}
