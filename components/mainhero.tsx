import React from "react";
import styles from "./mainhero.module.css";
import Image from "next/image";
import images from "@/public/image1.jpeg";

export default function Mainhero() {
  const {
    main,
    section,
    container,
    heroRight,
    heroCard,
    h1,
    p,
    image,
    span,
    img,
    h11,
  } = styles;
  return (
    <>
      <main className={`${main}`}>
        <section className={`${section}`}>
          <div className={`${container}`}>
            {/* hero right start */}
            <div className={`${heroRight}`}>
              <div className={`${heroCard}`}>
                <h1 className={`${h1}`}>
                  <span className={`${h11}`}>Aprilift</span> Mandiri
                </h1>
                <p className={`${p}`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae deserunt recusandae illum voluptatem aspernatur
                  minus natus asperiores velit distinctio modi.
                </p>
              </div>
            </div>
            {/* hero right end */}
            {/* image hero */}
            <div className={`${image}`}>
              <span className={`${span}`}>
                <Image
                  className={`${img}`}
                  src={images}
                  alt="Aprilift"
                  width={382}
                />
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
