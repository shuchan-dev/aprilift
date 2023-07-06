import React from "react";
import styles from "./imagesGaleri.module.css";
import Image from "next/image";

function ImagesGaleri() {
  const images = [
    {
      src: "/barang.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Project Home LIft",
      width: 300,
      height: 200,
    },
    {
      src: "/image1.jpeg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 600,
      height: 200,
    },
    {
      src: "/dumbwaiter.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 900,
      height: 200,
    },
    {
      src: "/maintane.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 200,
    },
    {
      src: "/sapreap.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 200,
    },
    {
      src: "/img1.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 200,
    },
    {
      src: "/img2.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 200,
    },
    {
      src: "/img3.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 200,
    },
    {
      src: "/img4.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 200,
    },
    {
      src: "/img5.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 200,
    },
    {
      src: "/img6.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 200,
    },
    {
      src: "/img7.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 200,
    },
  ];
  return (
    <>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <a
            key={index}
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <figure className={styles.thumb}>
              <Image
                src={image.src}
                alt={image.alt}
                className={styles.image}
                width={image.width}
                height={image.height}
              />
              <figcaption className={styles.caption}>
                {image.caption}
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </>
  );
}

export default ImagesGaleri;
