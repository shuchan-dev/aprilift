import React from "react";
import style from "./tentang.module.css";
import AboutComponent from "./aboutComponent";

export default function Tentang() {
  return (
    <>
      <main className={style.container}>
        <h1 className={style.heading}>Tentang Kami</h1>
        <AboutComponent />
      </main>
    </>
  );
}
