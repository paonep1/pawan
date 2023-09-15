"use client"
import { useEffect } from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";
import pawanImg from "../../../public/pawan maurya.jpg";
import RouteButton from "./RouteButton";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <section className={styles.abt} id="about">
      <h2 className={styles.abt_title}>About</h2>

      <div className={`${styles.about__container}`}>
        <div className={styles.about__img} data-aos='fade-up'>
          <Image src={pawanImg} width={300} height={300} alt="" />
        </div>

        <div className={styles.abt_content} data-aos='fade-up'>
          <h2 className={styles.about__subtitle}>I'am Pawan</h2>
          <p className="text">
            I am a React Devloper With a passion for building dynamic web experiences. My mission is
            to turn your digital dreams into reality. With expertise in React
            and a commitment to innovation, I'm here to create functional,
            visually stunning, and user-friendly solutions for your
            online success.
          </p>
          <RouteButton buttoneText="Download My CV" route="/Pawan.pdf" />
        </div>
      </div>
    </section>
  );
}
