"use client";
import styles from "@/app/styles/contact.module.css";
import Image from "next/image";
import contactImg from "@/../public/contact.png";
import { useState } from "react";

const dateTime = () => {
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  let time = today.getHours() + ":" + today.getMinutes();
  let result = { date: date, time: time };
  return result;
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formAlert, setFormAlert] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnClick = async (e) => {
    e.preventDefault();

    setLoading(true);

    let currentDate = dateTime();
    let myData = Object.assign(data, currentDate);

    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    });
    const contactData = await res.json();

    if (contactData.result === true) {
      setFormAlert(true);
    }

    setLoading(false);
  };

  const handleFormAlert = (e) => {
    e.preventDefault();
    setFormAlert(false);
    setData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className={styles.contact_sec} id="contact">
      <h2>Contact</h2>

      {formAlert && " " ? (
        <div className={styles.form_alert}>
          <div className={styles.form_alert_container}>
            <img src="./send.png" alt="Success message" />
            <div className={styles.form_alert_content}>
              <p className={styles.alert_title}>Hello, {data.name}</p>
              <p>
                Your details has been submited succesfully. We will look over
                your message and get back to you as soon as possible.
              </p>
              <button onClick={handleFormAlert} className="button">
                Okey
              </button>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}

      <div className={styles.contact__container}>
        <form className={styles.contact__form}>
          <p className={styles.text_required}>all fields are required.</p>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleOnChange}
            placeholder="Full Name"
            required
            className={styles.contact__input}
          />
          <input
            type="number"
            name="phone"
            value={data.phone}
            onChange={handleOnChange}
            placeholder="Mobile Number"
            required
            className={styles.contact__input}
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            placeholder="Email Address"
            required
            className={styles.contact__input}
          />
          <textarea
            name="message"
            cols="0"
            rows="10"
            value={data.message}
            onChange={handleOnChange}
            placeholder="Type Your message"
            required
            className={styles.contact__input}
          />
          <button
            onClick={handleOnClick}
            disabled={!data.name ||!data.phone ||!data.email ||!data.message || loading}
            className={styles.contact__button}
          >
            {loading && "Send Message" ? (
              <>
                <div className={styles.lds_dual_ring}></div>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
        <Image src={contactImg} width={400} height={400} alt="contact" />
      </div>
    </section>
  );
}
