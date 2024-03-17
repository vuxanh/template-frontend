import styles from "./hero.module.scss";
import heroImage from "assets/home/hero/background.jpg";

export const Hero = () => {
  return (
    <div className={styles["root"]}>
      <div className={styles["content"]}>
        <img className={styles["image"]} src={heroImage} />
        <div className={styles["text"]}>
          <h1>Vite: Your Development Supercharger</h1>
          <h6>Experience hot module replacement, pre-configured build tools, and a smooth developer experience with Vite.</h6>
          <div className={styles["buttons"]}>
            <button>Level Up Your Web Development</button>
            <button>The Future of Frontend Development is Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};
