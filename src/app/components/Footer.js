import React from "react";
import styles from "../styles/footer.module.css";
import { SiInstagram, SiGithub, SiReplit } from "react-icons/si";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <footer className={styles.footer_menu}>
        <div>
          <p className={styles.footer__copy}>
            Copyright &copy;
            2023 &#x2014; Pawan Maurya All rights reserved.
          </p>
        </div>
        <div className={styles.footer_social}>
          <a href="">
            <SiInstagram />
          </a>
          <a href="">
            <SiGithub />
          </a>
          <a href="">
            <SiReplit />
          </a>
        </div>
      </footer>
    </section>
  );
}
