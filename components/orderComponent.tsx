import React from "react";
import styles from "./orderComponent.module.css";

function OrderComponent() {
  return (
    <>
      <main>
        <div className={styles.order}>
          <div className={`${styles.container} ${styles.deskripsi4}`}>
            <p className={styles.deskripsi4}>ORDER</p>

            <div className={styles.kolom}>
              <h6>
                Jika Anda ingin memesan dan berkonsultasi mengenai produk dan
                layanan kami, Anda dapat mengisi data dan pesan di bawah ini:
              </h6>
            </div>
          </div>

          <div className={styles["form-order"]}>
            <div className={styles.container}>
              <form>
                <div
                  className={`${styles["order-fill"]} ${styles["input-order"]}`}
                >
                  <div className={styles["input-order"]}>
                    <input type="company" required />
                    <span>Nama Perusahaan</span>
                  </div>
                  <div className={styles["input-order"]}>
                    <input type="name" required />
                    <span>Nama</span>
                  </div>
                  <div className={styles["input-order"]}>
                    <input type="phone" required />
                    <span>Phone / Handphone</span>
                  </div>
                  <div className={styles["input-order"]}>
                    <input type="email" required />
                    <span>E-mail</span>
                  </div>
                  <div className={styles["input-order"]}>
                    <input type="message" required />
                    <span>Pesan</span>
                  </div>
                  <div className={`${styles["input-order"]} ${styles.sendi}`}>
                    <input type="submit" value="KIRIM" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default OrderComponent;
