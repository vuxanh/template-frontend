import { useApi } from "../../repository/useApi";
import { Action } from "./action/action";
import { Benefit } from "./benefit/benefit";
import { Feature } from "./feature/feature";
import { Hero } from "./hero/hero";
import styles from "./home.module.scss";

const HomePage = () => {
  const homeData = useApi("home");

  console.log(homeData);

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
