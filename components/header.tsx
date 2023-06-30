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
            <Image src={logos} alt="Logo" className={styles.img} />
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
                <Link href="./about">About Us</Link>
              </li>
              <li>
                <Link href="./service">Service</Link>
              </li>
              <li>
                <Link href="./reference">Reference</Link>
              </li>
              <li>
                <a href="./contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
