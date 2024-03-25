import { useData } from "../../repository/useData";
import { Action } from "./action/action";
import { Benefit } from "./benefit/benefit";
import { Feature } from "./feature/feature";
import { Hero, HeroData } from "./hero/hero";
import styles from "./home.module.scss";

interface HomePageData {
  hero: HeroData;
}

const HomePage = () => {
  useData<HomePageData>("home");
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
