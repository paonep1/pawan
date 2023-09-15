import styles from "@/app/styles/work.module.css"
import Image from "next/image";
import work1 from "@/../public/work1.jpg"
import work2 from "@/../public/work2.jpg"
import work3 from "@/../public/work3.jpg"
import work4 from "@/../public/work4.jpg"
import work5 from "@/../public/work5.jpg"
import work6 from "@/../public/work6.jpg"

export default function Work() {
  return (
    <section className={styles.work_sec} id="work">
      <h2>Work</h2>

      <div className={styles.work__container}>
        <a href="" className={styles.work__img}>
          <Image src={work1} width={430} height={400} alt="" />
        </a>
        <a href="" className={styles.work__img}>
          <Image src={work2} width={430} height={400} alt="" />
        </a>
        <a href="" className={styles.work__img}>
          <Image src={work3} width={430} height={400} alt="" />
        </a>
        <a href="" className={styles.work__img}>
          <Image src={work4} width={430} height={400} alt="" />
        </a>
        <a href="" className={styles.work__img}>
          <Image src={work5} width={430} height={400} alt="" />
        </a>
        <a href="" className={styles.work__img}>
          <Image src={work6} width={430} height={400} alt="" />
        </a>
      </div>
    </section>
  );
}
