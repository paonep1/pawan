"use client"
import { useEffect } from "react";
import styles from "../styles/skills.module.css";
import { FaHtml5, FaCss3Alt, FaPaintBrush, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { TbDeviceAnalytics } from "react-icons/tb";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Skills() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  
  return (
    <section className="skill_sec" id="skills">
      <h2 className={styles.skill_title}>Skills</h2>

      <div className={styles.skills__container}>
        <div className={styles.left}>
          <h2 className={styles.skills__subtitle}>Profesional Skills</h2>
          <p className="text">
            I bring a diverse set of skills and experiences that make me a
            valuable asset in various professional settings.
          </p>
          <div className={styles.skills__data} data-aos='fade-up' >
            <div className={styles.skills__names}>
              <FaHtml5 />
              <span className={styles.skills__name}>HTML5</span>
            </div>
            <div
              className={`${styles.skills__bar} ${styles.skills__html}`}
            ></div>
            <div>
              <span className={styles.skills__percentage}>95%</span>
            </div>
          </div>
          <div className={styles.skills__data} data-aos='fade-up' >
            <div className={styles.skills__names}>
              <FaCss3Alt />
              <span className={styles.skills__name}>CSS3</span>
            </div>
            <div
              className={`${styles.skills__bar} ${styles.skills__css}`}
            ></div>
            <div>
              <span className={styles.skills__percentage}>85%</span>
            </div>
          </div>
          <div className={styles.skills__data} data-aos='fade-up' >
            <div className={styles.skills__names}>
              <BiLogoJavascript />
              <span className={styles.skills__name}>JAVASCRIPT</span>
            </div>
            <div className={`${styles.skills__bar} ${styles.skills__js}`}></div>
            <div>
              <span className={styles.skills__percentage}>65%</span>
            </div>
          </div>
          <div className={styles.skills__data} data-aos='fade-up' >
            <div className={styles.skills__names}>
              <TbDeviceAnalytics />
              <span className={styles.skills__name}>SEO</span>
            </div>
            <div
              className={`${styles.skills__bar} ${styles.skills__seo}`}
            ></div>
            <div>
              <span className={styles.skills__percentage}>85%</span>
            </div>
          </div>
          <div className={styles.skills__data} data-aos='fade-up' >
            <div className={styles.skills__names}>
              <FaReact />
              <span className={styles.skills__name}>REACT JS</span>
            </div>
            <div
              className={`${styles.skills__bar} ${styles.skills__react}`}
            ></div>
            <div>
              <span className={styles.skills__percentage}>65%</span>
            </div>
          </div>
          <div className={styles.skills__data} data-aos='fade-up' >
            <div className={styles.skills__names}>
              <SiNextdotjs />
              <span className={styles.skills__name}>NEXT JS</span>
            </div>
            <div
              className={`${styles.skills__bar} ${styles.skills__next}`}
            ></div>
            <div>
              <span className={styles.skills__percentage}>70%</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img src="./skills.png" alt="" className={styles.skills__img} />
        </div>
      </div>
    </section>
  );
}
