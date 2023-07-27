import React from "react";
import styles from "./reverance.module.css";
import ReveranceCard from "./reveranceCard";

function Reverance() {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.heading}>Referensi Pekerjaan</h1>
        <ReveranceCard />
      </main>
    </>
  );
}

export default Reverance;
