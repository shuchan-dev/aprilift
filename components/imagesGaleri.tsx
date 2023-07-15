import React from "react";
import styles from "./imagesGaleri.module.css";
import Image from "next/image";

function ImagesGaleri() {
  const images = [
    {
      src: "/lift1.jpeg",
      alt: "Dumbwaiter 4 lantai",
      caption: "Dumbwaiter 4 lantai",
      width: 300,
      height: 200,
    },
    {
      src: "/lift2.jpeg",
      alt: "Dumbwaiter 3 lantai",
      caption: "Dumbwaiter 3 lantai",
      width: 300,
      height: 200,
    },
    {
      src: "/lift3.jpeg",
      alt: "Lift Barang, Kapasitas 2 ton, 2 lantai.",
      caption: "Lift Barang, Kapasitas 2 ton, 2 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift4.jpeg",
      alt: "Dumbwaiter 2 lantai.",
      caption: "Dumbwaiter 2 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift5.jpeg",
      alt: "Lift Barang 1 ton, 4 lantai.",
      caption: "Lift Barang 1 ton, 4 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift6.jpeg",
      alt: "Lift Barang 1 ton, 4 lantai.",
      caption: "Lift Barang 1 ton, 4 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift7.jpeg",
      alt: "Maintenance hospital lift, 4 lantai.",
      caption: "Maintenance hospital lift, 4 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift8.jpeg",
      alt: "Lift Passenger 2 lantai.",
      caption: "Lift Passenger 2 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift9.jpeg",
      alt: "Lift Passenger, 2 lantai.",
      caption: "Lift Passenger, 2 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift10.jpeg",
      alt: "Lift Barang, 1 ton, 4 lantai.",
      caption: "Lift Barang, 1 ton, 4 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift11.jpeg",
      alt: "Lift Barang, 1 ton, 2 lantai.",
      caption: "Lift Barang, 1 ton, 2 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift12.jpeg",
      alt: "Lift Barang, 1 ton, 4 lantai.",
      caption: "Lift Barang, 1 ton, 4 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift13.jpeg",
      alt: "Overhaule Lift Barang 1 ton 5 lantai.",
      caption: "Overhaule Lift Barang 1 ton 5 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift14.jpeg",
      alt: "Lift Service, 1 ton.",
      caption: "Lift Service, 1 ton.",
      width: 300,
      height: 200,
    },
    {
      src: "/lift15.jpeg",
      alt: "Resto Kelapa Gading, Kelapa Gading, Dumbwaiter",
      caption: "Resto Kelapa Gading, Kelapa Gading, Dumbwaiter",
      width: 300,
      height: 200,
    },
    {
      src: "/barang.jpg",
      alt: "Lift Barang, 2 ton, 2 lantai.",
      caption: "Lift Barang, 2 ton, 2 lantai.",
      width: 300,
      height: 200,
    },
    {
      src: "/image1.jpeg",
      alt: "Project Lift di Rumah Sakit",
      caption: "Project Lift di Rumah Sakit",
      width: 600,
      height: 200,
    },
    {
      src: "/dumbwaiter.jpg",
      alt: "Project dumbwaiter",
      caption: "Project dumbwaiter",
      width: 900,
      height: 200,
    },
    {
      src: "/maintane.jpg",
      alt: "Layanan service ",
      caption: "Layanan service ",
      width: 300,
      height: 200,
    },
    {
      src: "/img1.jpg",
      alt: "Lift pasanger",
      caption: "Lift pasanger",
      width: 300,
      height: 200,
    },
    {
      src: "/img2.jpg",
      alt: " Spare Parts Lift",
      caption: " Spare Parts Lift",
      width: 300,
      height: 200,
    },
    {
      src: "/img3.jpg",
      alt: " Spare Parts Lift",
      caption: " Spare Parts Lift",
      width: 300,
      height: 200,
    },
    {
      src: "/img4.jpg",
      alt: "Control Panel",
      caption: "Control Panel",
      width: 300,
      height: 200,
    },
    {
      src: "/img5.jpg",
      alt: "Spare Parts Lift",
      caption: "Spare Parts Lift",
      width: 300,
      height: 200,
    },
    {
      src: "/img6.jpg",
      alt: "Spare Parts Lift",
      caption: "Spare Parts Lift",
      width: 300,
      height: 200,
    },
    {
      src: "/img7.jpg",
      alt: "Spare Parts Lift",
      caption: "Spare Parts Lift",
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
