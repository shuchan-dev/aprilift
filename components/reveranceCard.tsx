/* eslint-disable no-unused-vars */
import React from "react";
import { Chrono } from "react-chrono";
import styles from "@/components/reverance.module.css";

export default function ReveranceCard() {
  const items = [
    {
      title: "Mei 2023",
      cardTitle: "PT Graviti Teknologi Indonesia",
      media: {
        name: "me",
        source: {
          url: "/lift13.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "Overhoul mesin lift barang kapasitas 1 ton 5 lantai",
      cardDetailedText: `Ruko Toho blok L 08`,
    },
    {
      title: "Januari 2023",
      cardTitle: "PT Biyan Internasional",
      media: {
        name: "me",
        source: {
          url: "/lift12.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "2 unit lift barang kapasitas 1 ton 4 lantai.",
      cardDetailedText: `Jalan Avung Barat 1, No.A3 / 16, Sunter Agung, kac.Tanjung Priok, Jakarta Utara`,
    },

    {
      title: "Juli 2022",
      cardTitle: "NN Vape",
      media: {
        name: "me",
        source: {
          url: "/lift10.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "Lift Barang kapasitas 1 ton 4 lantai",
      cardDetailedText: `Ruko Taman palem Blok C1 /70, Rt/Rw 01/13, Cengkareng Jakarta Barat`,
    },
    {
      title: "Februari 2022",
      cardTitle: "Bakery Sinamon",
      media: {
        name: "me",
        source: {
          url: "/lift2.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "Dumbwaiter 3 Lantai",
      cardDetailedText: `Rukan Crown Golf Blok B 60 Jalan Bukit Golf Mediterania, Pantai Indah Kapuk, Jakarta Utara`,
    },
    {
      title: "Maret 2021",
      cardTitle: "Masjid Jami Al-Kautsar",
      media: {
        name: "me",
        source: {
          url: "/lift8.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "Lift Passanger 2 lantai",
      cardDetailedText: `Jalan depok indah 1 No.1, Kemiri Muka Kac.Beji, Kota Depok`,
    },
    {
      title: "April 2019",
      cardTitle: "PT Asoka indonesia",
      media: {
        name: "me",
        source: {
          url: "/lift11.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "Lift barang kasapitas 1 ton 2 lantai",
      cardDetailedText: `Jalan Utan Jati Blok LB 5 No.9/10 Cengkareng, Jakarta Barat`,
    },
    {
      title: "Januari 2019",
      cardTitle: "Global Books",
      media: {
        name: "me",
        source: {
          url: "/lift6.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "Lift barang kasapitas 1 ton 4 lantai",
      cardDetailedText: `Ruko Puri Niaga Jalan Puri Kencana No.1N Kembangan, Jakarta Barat`,
    },
    {
      title: "Juli 2018",
      cardTitle: "Bucks Coffee",
      media: {
        name: "me",
        source: {
          url: "/lift4.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "Dumbwaiter 2 Lantai",
      cardDetailedText: `Jalan Buaran Raya No.104, Rt 1/Rw 14, Klender, Duren Sawit, Jakarta Timur`,
    },
    {
      title: "Januari 2018",
      cardTitle: "Majid Nurul Muhajir",
      media: {
        name: "me",
        source: {
          url: "/lift9.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "Lift Passager 2 Lantai",
      cardDetailedText: `Jalan Malaka 1 Gg.Veteran No.54 Rt03 Rw06, Rorotan Cilincing, Jakarta Utara`,
    },
    {
      title: "November 2017",
      cardTitle: "Balai Besar Industri Agro",
      media: {
        name: "me",
        source: {
          url: "/lift3.jpeg",
        },
        type: "IMAGE",
      },
      cardSubtitle: "Lift Barang 2 ton 2 Lantai",
      cardDetailedText: `Jalan Insiyur H.Juanda No.11 Rt/Rw 04/02, Paledang, Bogor Tengah, Jawa Barat`,
    },
  ];

  return (
    <>
      <div>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          textOverlay
          hideControls={true}
          classNames={{
            title: styles.myTitle,
            timelinePointClassName: styles.central,
            active: styles.active,
          }}
          disableNavOnKey={true}
          disableClickOnCircle={true}
          cardHeight={600}
          cardWidth={400}
        />
      </div>
    </>
  );
}
