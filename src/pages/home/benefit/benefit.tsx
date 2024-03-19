import styles from "./benefit.module.scss";

export const Benefit = () => {
  const benefits = ["Mobile-First Design", "SEO Optimized", "Seamless Customization"];
  return (
    <section className={styles["root"]}>
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>Mobile Responsive Benefits</h1>
        <h6 className={styles["description"]}>Effortlessly Build Stunning & Functional Websites with Our Powerful Vite Template.</h6>
        <div className={styles["tick-row"]}>
          {benefits.map((benefit, index) => (
            <div className={styles["tick"]} key={index}>
              <div className={styles["tick-image"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 -960 960 960">
                  <path d="M382-208 122-468l90-90 170 170 366-366 90 90-456 456Z" />
                </svg>
              </div>
              <h6 className={styles["tick-title"]}>{benefit}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
