import { useState } from "react";
import styles from "./feture.module.scss";
import { Tab } from "./tab/tab";
import hmr from "assets/home/feature/hmr.jpg";
import architecture from "assets/home/feature/architecture.jpg";
import customization from "assets/home/feature/customization.jpg";
import buildTool from "assets/home/feature/build-tool.jpg";
import hmr1 from "assets/home/feature/hmr-1.jpg";
import architecture1 from "assets/home/feature/architecture-1.jpg";
import customization1 from "assets/home/feature/customization-1.jpg";
import buildTool1 from "assets/home/feature/build-tool-1.jpg";
import { Button } from "../../../components/button/button";
import classNames from "classnames";

export const Feature = () => {
  const contents = [
    {
      chip: "HMR",
      title: "Hot Module Replacement",
      description: "See your code changes reflected instantly in the browser, without full page reloads.",
      image: [hmr, hmr1],
    },
    {
      chip: "Build Tools",
      title: "Pre-configured Build Tools",
      description: "Get started quickly with a streamlined development environment.",
      image: [buildTool, buildTool1],
    },
    {
      chip: "Architecture",
      title: "Component-Based Architecture",
      description: "Build modular and reusable components for efficient development.",
      image: [architecture, architecture1],
    },
    {
      chip: "Customization",
      title: "Easy Customization",
      description: "Tailor the template to your specific project needs and design preferences.",
      image: [customization, customization1],
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <section className={styles["root"]}>
      <Tab
        chips={contents.map((content) => content.chip)}
        onPressed={(index) => {
          setSelected(index);
        }}
      />
      <div className={styles["swipe-wrapper"]}>
        {contents.map((content, index) => (
          <div className={classNames(styles["content"], { [styles["content-visible"]]: selected == index })} key={index}>
            <div className={classNames(styles["text"], { [styles["text-visible"]]: selected == index })}>
              <div className={styles["text-content"]}>
                <h1 className={styles["text-title"]}>{content.title}</h1>
                <h6 className={styles["text-description"]}>{content.description}</h6>
                <Button className={styles["text-button"]}>Find out more</Button>
              </div>
            </div>
            <div className={classNames(styles["side-image"], { [styles["side-image-visible"]]: selected == index })}>
              {content.image.map((src, index) => (
                <img key={index} className={styles["image"]} src={src}></img>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
