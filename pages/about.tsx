import React from "react";
import Link from "next/link";
import Header from "@/components/header";

export default function About() {
  return (
    <>
      <Header />
      <h1>INI About</h1>
      <p>INI HALAMA ABOUT</p>
      <button>
        <Link href="/"> Balik</Link>{" "}
      </button>
    </>
  );
}
