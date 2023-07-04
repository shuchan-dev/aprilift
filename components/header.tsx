import styles from "./header.module.css";
import React from "react";
import logos from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { header, maxscreenxl, mxauto } = styles;
  return (
    <>
      <header className={`${header}`}>
        <div className={`${maxscreenxl} , ${mxauto}`}>
          {/* <!-- logo --> */}
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logos} alt="Logo" className={styles.img} />
            </Link>
          </div>

          {/* <!-- Menu --> */}
          <div className={styles.navigation}>
            <input type="checkbox" className={styles.toggleMenu} />
            <div className={styles.hamburger}></div>

            <ul className={styles.menu}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="./service">Layanan</Link>
              </li>
              <li>
                <Link href="./galeri">Galeri</Link>
              </li>
              <li>
                <Link href="./about">Tentang Kami</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
