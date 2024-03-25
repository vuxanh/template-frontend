import heroImage from "assets/home/hero/background.jpg";
import { Button } from "../../../components/button/button";
import { useData } from "../../../repository/useData";
import styles from "./hero.module.scss";

export interface HeroData {
  title: string;
  description: string;
  buttonLeftText: string;
  buttonLeftUrl: string;
  buttonRightText: string;
  buttonRightUrl: string;
}

export const Hero = () => {
  const data = useData<HeroData>("home.hero");

  return (
    <section className={styles["root"]}>
      <div className={styles["content"]}>
        <img className={styles["image"]} src={heroImage} />
        <div className={styles["text"]}>
          <h1>{data?.title}</h1>
          <h6>{data?.description}</h6>
          <div className={styles["buttons"]}>
            <Button>{data?.buttonLeftText}</Button>
            <Button>{data?.buttonRightText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
