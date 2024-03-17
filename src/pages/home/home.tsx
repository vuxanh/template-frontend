import { Hero } from "./hero/hero";
import styles from "./home.module.scss";

const HomePage = () => {
  return (
    <div className={styles["body"]}>
      <Hero />
    </div>
  );
};

export default HomePage;
