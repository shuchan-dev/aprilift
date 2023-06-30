import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  const { container, consume, respo, repo, text, littleText, copyright, link } =
    styles;

  const customStyles = {
    paddingTop: "32px",
    paddingBottom: "32px",
  };
  return (
    <>
      <footer>
        <div className={`${container}`}>
          <div className={`${consume}`} style={customStyles}>
            <div className={`${respo}`}>
              <h1 className={`${text}`}>Aprilift Mandiri</h1>
              <p className={`${littleText}`}>
                Jl.Bangun Nusa No.41 Rt.009 Rw.003, Cengkareng Timur, <br />
                JakartaBarat
              </p>
              <p className={`${littleText}`}>Hp.0877 7272 3027</p>
            </div>
            <div className={`${repo}`}></div>
            <div className={`${repo}`}>
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
          </div>
        </div>
        <p className={`${copyright}`}>&copy;2023 Aprilift Mandiri.</p>
        <p className={`${copyright}`}>
          {" "}
          Created by Comnet Mitra Solusi member of
          <a
            href="https://emnoer.pages.dev"
            target="_blank"
            className={`${link}`}
          >
            {" "}
            Emnoer Elevator
          </a>
        </p>
      </footer>
    </>
  );
}
