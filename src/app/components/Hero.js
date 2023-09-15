import React from "react";
import styles from "@/app/styles/hero.module.css";
import { SiInstagram, SiGithub, SiReplit } from "react-icons/si";
import Link from "next/link";
import RouteButton from "./RouteButton";
// import pawanImg from "@/../public/pawan.png"

export default function Hero() {
  return (
    <section className={`${styles.hero} ${styles.container}`} id="hero">
      <div className={styles.hero__data}>
        <h1 className={styles.hero__title}>
          Hi,
          <br />
          I'am <span className={styles.hero__title_color}>Pawan Maurya</span>
          <br /> React Devloper.
        </h1>

        <p className={styles.text}>
          Experienced React Developer skilled in building dynamic and responsive
          web interfaces. Proficient in React, state management, and API
          integration. Strong focus on code quality, testing, and performance.
        </p>
        
        <RouteButton buttoneText="Contact" route="/#contact" />
      </div>

      <div className={styles.hero__social}>
        <a href="" className={styles.hero__social_icon}>
          <SiInstagram />
        </a>
        <a
          href="https://github.com/paonep1"
          className={styles.hero__social_icon}
        >
          <SiGithub />
        </a>
        <a
          href="https://replit.com/@paonep1"
          className={styles.hero__social_icon}
        >
          <SiReplit />
        </a>
      </div>

      <div className={styles.hero__img}>
        <svg
          className={styles.hero__blob}
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            <image
              className={styles.hero__blob_img}
              x={20}
              y={30}
              href={"./pawan.png"}
            />
          </g>
        </svg>
      </div>
    </section>
  );
}