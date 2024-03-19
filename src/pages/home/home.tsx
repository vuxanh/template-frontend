import { Action } from "./action/action";
import { Benefit } from "./benefit/benefit";
import { Feature } from "./feature/feature";
import { Hero } from "./hero/hero";
import styles from "./home.module.scss";

const HomePage = () => {
  return (
    <div className={styles["body"]}>
      <Hero />
      <Feature />
      <Benefit />
      <Action />
    </div>
  );
};

export default HomePage;
