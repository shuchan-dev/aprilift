import React from "react";
import CardService from "./cardService";
import styles from "@/components/services.module.css";

function Services() {
  const { service, h1, chile } = styles;

  const cards = [
    {
      title: "Home Lift",
      deskripsi:
        "Home Lift kami dirancang khusus untuk kebutuhan perumahan. Dengan Home Lift kami, Anda dapat menikmati aksesibilitas vertikal yang nyaman dan aman di dalam rumah Anda. Desainnya yang elegan dan teknologi canggih menjadikan Home Lift kami solusi yang sempurna untuk meningkatkan nilai dan kenyamanan hunian Anda.",
      img: "/homeLift.jpg",
      h: 300,
      w: 300,
      links: "/post1",
    },
    {
      title: "Lift Passanger",
      deskripsi:
        "Lift Passenger kami dapat digunakan dalam berbagai jenis bangunan dan dirancang untuk memenuhi kebutuhan transportasi vertikal. Kami menawarkan Lift Passenger dengan kapasitas yang bervariasi dan fitur keselamatan yang canggih. Dengan Lift Passenger kami, pengguna dapat merasakan perjalanan yang aman dan nyaman.",
      img: "/pasanger.jpg",
      h: 300,
      w: 300,
      links: "/post2",
    },
    {
      title: "Hospital Lift",
      deskripsi:
        "Hospital Lift kami memenuhi standar keamanan dan kenyamanan yang khusus untuk lingkungan rumah sakit. Dirancang dengan cermat, Hospital Lift kami dapat mengakomodasi transportasi pasien, perawat, dan peralatan medis dengan efisiensi dan kehandalan tinggi. Keandalan Hospital Lift kami menjadi faktor penting dalam mendukung operasional rumah sakit. ",
      img: "/image1.jpeg",
      h: 300,
      w: 300,
      links: "/post3",
    },
    {
      title: "Lift Barang",
      deskripsi:
        "Lift Barang kami dirancang untuk mempermudah transportasi barang dalam berbagai jenis industri. Kami menawarkan Lift Barang dengan kapasitas yang sesuai dengan kebutuhan Anda. Desainnya dapat disesuaikan agar sesuai dengan kebutuhan dan lingkungan operasional. Lift Barang kami dapat membantu meningkatkan efisiensi operasional dan mengoptimalkan proses logistik.",
      img: "/barang.jpg",
      h: 300,
      w: 300,
      links: "/post4",
    },
    {
      title: "Dumbwaiter",
      deskripsi:
        "Dumbwaiter adalahlift kecil yang digunakan untuk mengangkut barang dalam skala rumah tangga atau restoran. Kami menyediakan Dumbwaiter dengan teknologi terkini dan desain yang dapat diandalkan. Dumbwaiter kami memudahkan pengangkutan barang dengan efisiensi dan keamanan, membantu meningkatkan produktivitas dan kenyamanan di rumah atau restoran Anda.",
      img: "/dumbwaiter.jpg",
      h: 300,
      w: 300,
      links: "/post5",
    },
    {
      title: "Jasa Maintenance dan Penjualan Spare Parts Lift",
      deskripsi:
        "Kami adalah penyedia jasa maintenance lift yang terpercaya, dengan tim yang berpengalaman dalam melakukan pemeriksaan rutin, perawatan, dan perbaikan untuk menjaga kinerja lift Anda tetap optimal dan aman digunakan. Kami berkomitmen untuk memberikan layanan maintenance yang cepat, responsif, dan berkualitas tinggi. Selain itu, kami juga menyediakan spare parts lift asli berkualitas tinggi yang kompatibel dengan berbagai merek dan model lift. Dengan menggunakan spare parts asli, Anda dapat memastikan bahwa lift Anda akan diperbaiki dengan suku cadang yang tepat, sehingga memperpanjang umur operasional lift Anda. Keberadaan kami memudahkan Anda untuk mendapatkan suku cadang yang dibutuhkan dengan mudah.",
      img: "/maintane.jpg",
      h: 300,
      w: 300,
      links: "/post6",
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
