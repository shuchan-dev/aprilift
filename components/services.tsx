import React from "react";
import CardService from "./cardService";
import styles from "@/components/services.module.css";

function Services() {
  const { mxauto, service } = styles;

  const card1 = {
    title: "Ini judula",
    deskripsi: "ini deskripsi",
  };

  return (
    <>
      <section className={`${mxauto} ${service}`}>
        <h1>service page</h1>
        <CardService {...card1} />
      </section>
    </>
  );
}

export default Services;
