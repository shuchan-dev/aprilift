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
              <h1 className={`${text}`}>PT.Aprilift Mandiri</h1>
              <p className={`${littleText}`}>
                Jl. Bangun Nusa No. 41 Rt. 009 / Rw. 003, Cengkareng Timur,{" "}
                <br />
                Jakarta Barat
              </p>
              <p className={`${littleText}`}>+62 877-7272-3027</p>
            </div>
            <div className={`${repo}`}></div>
            <div className={`${repo}`}>
              <h2 className={`${sosmed}`}>Sosial Media</h2>
              <Icon />
            </div>
          </div>
        </div>
        <p className={`${copyright}`}>
          &copy;2024
          <span className={`${link}`}> PT.Aprilift Mandiri</span>
        </p>
        <p className={`${copyright}`}>
          {" "}
          Created by
          <a
            href="https://github.com/shuchan-dev"
            target="_blank"
            className={`${link2}`}
            rel="noreferrer"
          >
            {" "}
            Emnoer Studio Code
          </a>
        </p>
      </footer>
    </>
  );
}
