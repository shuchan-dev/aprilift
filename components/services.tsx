import React from "react";
import CardService from "./cardService";
import styles from "@/components/services.module.css";

function Services() {
  const { service, h1, chile } = styles;

  const cards = [
    {
      title: "Home Lift",
      deskripsi:
        "Lantai lift perumahan seri produk kami didedikasikan untuk penggunaan perumahan dan pengembangan desain. Lift menggunakan teknologi canggih untuk menghasilkan tipe baru komputerisasi, kontrol digital dari lift vvvf. Integrasi sistem jaringan data, dan arsitektur modular, memungkinkan sistem untuk mengontrol penggunaan prosedur inspeksi diri yang lebih tepat, efisien, fleksibel, masuk akal, dan paling",
      img: "/homeLift.jpg",
    },
    {
      title: "Lift Passanger",
      deskripsi:
        "Lift penumpang mengadopsi beberapa metode yang digerakkan oleh traksi dan dilengkapi dengan beberapa perangkat keselamatan dan perlindungan untuk memastikan pengoperasian yang aman, lift penumpang mengadopsi teknologi VVVF",
      img: "/pasanger.jpg",
    },
    {
      title: "Hospital Lift",
      deskripsi:
        "Lift untuk tujuan medis adalah transportasi vertikal. Peralatan yang digunakan di rumah sakit dan lainnya yang relevan. Tempat untuk memindahkan pasien dan instrumen bedah. Lift untuk keperluan medis, dengan keunikan",
      img: "/image1.jpeg",
    },
    {
      title: "Lift Barang",
      deskripsi:
        "Alat pengangkut barang yang berukuran lebih besar dari dumbwaiter, yaitu di atas 300 Kg. Lift ini biasanya sering dijumpai di pabrik, lantai pertokoan, restoran, hotel, mall",
      img: "/barang.jpg",
    },
    {
      title: "Dumbwaiter",
      deskripsi:
        "Dumbwaiter adalah alat pengangkut barang berukuran kecil antara 50 Kg hingga 250 Kg. Biasanya sering dijumpai di hotel, rumah sakit dan lain-lain. Cara menggunakan dumbwaiter sangat mudah dan dapat",
      img: "/dumbwaiter.jpg",
    },
    {
      title: "Maintanence",
      deskripsi:
        "pentingnya maintenance lift yang teratur untuk memastikan keandalan, keselamatan, dan kinerja optimal dari lift. Aprilift Mandiri, sebagai penyedia layanan lift terkemuka, memberikan panduan praktis untuk perawatan lift yang efektif.",
      img: "/maintane.jpg",
    },
    {
      title: "Spare Parts",
      deskripsi:
        "Kami menyediakan dan menjual suku cadang untuk elevator dan escalator, seperti elevator dan escalator.",
      img: "/sapreap.jpg",
    },
  ];

  return (
    <>
      <main className={`${service}`}>
        <h1 className={`${h1}`}>Layanan yang kita miliki</h1>
        <div className={`${chile}`}>
          {cards.map((card, index) => (
            <CardService key={index} {...card} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Services;
