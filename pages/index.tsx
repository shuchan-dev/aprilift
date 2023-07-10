import Footer from "@/components/footer";
import Header from "@/components/header";
import Mainhero from "@/components/mainhero";
import { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <>
      <Header />
      <Mainhero />
      <Footer />
    </>
  );
};

export default Index;
export const runtime = "experimental-edge";
