import React from "react";
import styles from "./footer.module.css";
import Icon from "./icon";

export default function Footer() {
  const {
    container,
    consume,
    respo,
    repo,
    text,
    littleText,
    copyright,
    link,
    link2,
    sosmed,
  } = styles;

  const customStyles = {
    paddingTop: "6px",
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
              <h2 className={`${sosmed}`}>Tetap terhubung dengan kami</h2>
              <Icon />
            </div>
          </div>
        </div>
        <p className={`${copyright}`}>
          &copy;2023
          <span className={`${link}`}> Aprilift Mandiri</span>
        </p>
        <p className={`${copyright}`}>
          {" "}
          Created by
          <a
            href="https://github.com/shuchan-dev"
            target="_blank"
            className={`${link2}`}
          >
            {" "}
            Emnoer Studio Code
          </a>
        </p>
      </footer>
    </>
  );
}
