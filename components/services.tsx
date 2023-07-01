import React from "react";
import CardService from "./cardService";
import styles from "@/components/services.module.css";

function Services() {
  const { service, h1, chile } = styles;

  const card1 = {
    title: "Home Lift",
    deskripsi:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ab qui pariatur eveniet at vel adipisci sit quod, modi dolore.",
  };
  const card2 = {
    title: "Lift Pasenger",
    deskripsi:
      "iLorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ab qui pariatur eveniet at vel adipisci sit quod, modi dolore.",
  };
  const card3 = {
    title: "Hospital Lift",
    deskripsi:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ab qui pariatur eveniet at vel adipisci sit quod, modi dolore.",
  };
  const card4 = {
    title: "Lift Barang",
    deskripsi:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ab qui pariatur eveniet at vel adipisci sit quod, modi dolore.",
  };
  const card5 = {
    title: " Dumbwaiter",
    deskripsi:
      "iLorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ab qui pariatur eveniet at vel adipisci sit quod, modi dolore.",
  };

  return (
    <>
      <main className={`${service}`}>
        <h1 className={`${h1}`}>Layanan yang kita miliki</h1>
        <div className={`${chile}`}>
          <CardService {...card1} />
          <CardService {...card2} />
          <CardService {...card3} />
          <CardService {...card4} />
          <CardService {...card5} />
        </div>
      </main>
    </>
  );
}

export default Services;
