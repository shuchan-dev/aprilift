import React from "react";
import styles from "./aboutComponent.module.css";

export default function AboutComponent() {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h1>
              <span className={styles.h11}>Aprilift</span>{" "}
              <span className={styles.h111}>Mandiri</span>{" "}
            </h1>
            <p>
              Aprilift mandiri berdiri pada tanggal 23 Maret 2012. Kami adalah
              suatu usaha yang bergerak di bidang produksi elevator, seperti :
              Dumbwaiter (Lift Makanan), Lift Barang (Lift Cargo), dan Lift
              Passenger . Selain itu, kami juga melayani jasa maintenance dan
              penjualan spare parts lift. Jika anda memerlukan produk dan jasa
              tersebut, percayakan pada kami untuk membuatnya.
            </p>
            <p>
              Kami bangga dengan reputasi kami dalam memberikan produk dan
              layanan lift yang berkualitas tinggi. Tim kami yang berdedikasi
              siap membantu Anda dalam memenuhi kebutuhan lift Anda, baik untuk
              Restoran, Pabrik, Mall, Hotel, Rumah Tinggal, Bangunan Komersial,
              maupun lingkungan Rumah Sakit.
              <p>
                {" "}
                Jika Anda memerlukan Dumbwaiter (Lift Makanan), Lift Barang
                (Cargo), Lift Passenger, Jasa Maintenance, dan penjualan spare
                parts lift, percayakan pada Aprilift Mandiri untuk memenuhinya.
                Hubungi kami sekarang juga untuk konsultasi lebih lanjut dan
                penawaran yang sesuai dengan kebutuhan Anda.{" "}
              </p>{" "}
              <p>
                Terima kasih atas kepercayaan Anda pada Aprilift Mandiri. Kami
                berkomitmen untuk memberikan produk dan layanan terbaik untuk
                kepuasan pelanggan.
              </p>
            </p>
            <div className={styles.address}>
              <div>
                <svg
                  className={`${styles.svg} ${styles.svgg}`}
                  width={30}
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Google Maps</title>
                  <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
                </svg>
                <p className={styles.prag}>
                  Jl. Bangun Nusa No. 41 Rt. 009 / Rw. 003, Cengkareng Timur,
                  Jakarta Barat
                </p>
              </div>
              <div>
                <svg
                  width={30}
                  className={styles.svg}
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <p>
                  <a
                    className={styles.link}
                    target="_blank"
                    href="https://wa.me/message/6ZUFW4VRZ7YYP1"
                    rel="noreferrer"
                  >
                    +62 877-7272-3027
                  </a>
                </p>
              </div>
              <div>
                <svg
                  width={30}
                  className={styles.svg}
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mail.Ru</title>
                  <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12" />
                </svg>
                <p>
                  <a
                    className={styles.link}
                    rel="noreferrer"
                    target="_blank"
                    href="mailto:znsaprilif@gmail.com"
                  >
                    znsaprilif@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
