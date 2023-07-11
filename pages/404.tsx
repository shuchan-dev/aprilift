import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import style from "@/styles/404.module.css";

export default function Custom404() {
  const { errorcontainer, screenreadertext, linkcontainer, morelink, span, a } =
    style;
  return (
    <>
      <Header />
      <div>
        <section className={`${errorcontainer}`}>
          <span className={`${span}`}>4</span>
          <span className={`${span}`}>
            <span className={`${screenreadertext}`}>0</span>
          </span>
          <span className={`${span}`}>4</span>
        </section>
        <div className={`${linkcontainer}`}>
          <Link href="/" className={`${a} ${morelink}`}>
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
