"use client";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";

export default function Navbar({logoText}) {
  const [toggleNav, setToggleNav] = useState(false);
  const closeNave = () => {
    setToggleNav(false);
  };
  return (
    <>
      <header className={styles.sticky_nav}>
        <nav className={styles.navbar}>
          <div className={styles.nav_logo}>
            <Link onClick={closeNave} href="#">
              <h1>{logoText}</h1>
            </Link>
          </div>
          <div className={`${styles.nav_menu} ${toggleNav && styles.active}`}>
            <ul>
              <div className={styles.triangle}>
                <BsFillTriangleFill />
              </div>
              <li>
                <Link onClick={closeNave} href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={closeNave} href="#about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={closeNave} href="#skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link onClick={closeNave} href="#work">
                  Work
                </Link>
              </li>
              <li>
                <Link onClick={closeNave} href="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={() => setToggleNav(!toggleNav)}
            className={styles.hamburger}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </nav>
      </header>
    </>
  );
}
