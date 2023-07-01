import React from "react";
import CardService from "./cardService";
import styles from "@/components/services.module.css";

function Services() {
  const { service, h1, chile } = styles;

  const card1 = {
    title: "Ini judula",
    deskripsi: "ini deskripsi",
  };
  const card2 = {
    title: "Ini hjfhakhfala",
    deskripsi: "ini lorem20ahfjwhajfafaw",
  };
  const card3 = {
    title: "414342242",
    deskripsi: "ini l5435453535ajfafaw",
  };

  return (
    <>
      <main className={`${service}`}>
        <h1 className={`${h1}`}>Layanan yang kita miliki</h1>
        <div className={`${chile}`}>
          <CardService {...card1} />
          <CardService {...card2} />
          <CardService {...card3} />
        </div>
      </main>
    </>
  );
}

export default Services;
