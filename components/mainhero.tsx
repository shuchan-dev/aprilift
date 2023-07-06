import React from "react";
import styles from "./mainhero.module.css";
import Image from "next/image";
import images from "@/public/home.png";

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
                  Kami adalah suatu usaha yang bergerak di bidang prosuksi
                  elevator, seperti : Dumbwaiter (Lift Makanan), Lift Barang
                  (Lift Cargo), dan Lift Passenger . Selain itu, kami juga
                  melayani jasa maintenance dan penjualan spare parts lift. Jika
                  anda memerlukan produk dan jasa tersebut, percayakan pada kami
                  untuk membuatnya.
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
                  width={302}
                />
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
