import React, { useState, useEffect } from "react";
import logos from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import headerStyles from "./header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { header, maxscreenxl, mxauto, scroll } = headerStyles;

  return (
    <>
      <header className={`${header} ${isScrolled ? scroll : ""}`}>
        <div className={`${maxscreenxl} ${mxauto}`}>
          {/* <!-- logo --> */}
          <div className={headerStyles.logo}>
            <Link href="/" passHref>
              <Image src={logos} alt="Logo" className={headerStyles.img} />
            </Link>
          </div>

          {/* <!-- Menu --> */}
          <div className={headerStyles.navigation}>
            <input type="checkbox" className={headerStyles.toggleMenu} />
            <div className={headerStyles.hamburger}></div>

            <ul className={headerStyles.menu}>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="./service" passHref>
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="./galeri" passHref>
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="./about" passHref>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="./order" passHref>
                  Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
