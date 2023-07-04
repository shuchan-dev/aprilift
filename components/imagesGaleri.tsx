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
      height: 300,
    },
    {
      src: "/image1.jpeg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 300,
    },
    {
      src: "/dumbwaiter.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 300,
    },
    {
      src: "/maintane.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 300,
    },
    {
      src: "/sapreap.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      width: 300,
      height: 300,
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
