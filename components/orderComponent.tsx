import React from "react";
import emailjs from "emailjs-com";
import styles from "./orderComponent.module.css";

type EmailFormProps = {};

type EmailFormState = {
  name: string;
  email: string;
  message: string;
  company: string;
  telp: string;
};

class OrderComponent extends React.Component<EmailFormProps, EmailFormState> {
  constructor(props: EmailFormProps) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      company: "",
      telp: "",
    };
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { name, email, message, company, telp } = this.state;

    // Kirim email menggunakan emailjs
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        {
          name: name,
          email: email,
          message: message,
          company: company,
          telp: telp,
        },
        process.env.EMAILJS_USER_ID!
      )
      .then((response) => {
        console.log("Email terkirim!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengirim email:", error);
      });

    // Reset formulir setelah pengiriman
    this.setState({
      name: "",
      email: "",
      message: "",
      company: "",
      telp: "",
    });
  };

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<
      EmailFormState,
      keyof EmailFormState
    >);
  };

  render() {
    return (
      <>
        <main className={styles.container}>
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
              <form onSubmit={this.handleSubmit}>
                <div
                  className={`${styles["order-fill"]} ${styles["input-order"]}`}
                >
                  <div className={styles["input-order"]}>
                    <input
                      type="text"
                      required
                      value={this.state.company}
                      onChange={this.handleChange}
                      name="company"
                    />
                    <span>Nama Perusahaan</span>
                  </div>
                  <div className={styles["input-order"]}>
                    <input
                      type="text"
                      required
                      value={this.state.name}
                      onChange={this.handleChange}
                      name="name"
                    />
                    <span>Nama</span>
                  </div>
                  <div className={styles["input-order"]}>
                    <input
                      type="tel"
                      required
                      value={this.state.telp}
                      onChange={this.handleChange}
                      name="telp"
                    />
                    <span>Phone / Handphone</span>
                  </div>
                  <div className={styles["input-order"]}>
                    <input
                      type="email"
                      required
                      value={this.state.email}
                      onChange={this.handleChange}
                      name="email"
                    />
                    <span>E-mail</span>
                  </div>
                  <div className={styles["input-order"]}>
                    <input
                      required
                      value={this.state.message}
                      onChange={this.handleChange}
                      name="message"
                    ></input>
                    <span>Pesan</span>
                  </div>
                  <div className={`${styles["input-order"]} ${styles.sendi}`}>
                    <button type="submit">Kirim</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default OrderComponent;
