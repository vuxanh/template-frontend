import { useState } from "react";
import styles from "./tab.module.scss";
import classNames from "classnames";

interface TabProps {
  chips: string[];
  onPressed: (index: number) => void;
}

export const Tab = ({ chips, onPressed }: TabProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles["root"]}>
      {chips.map((chip, index) => (
        <div
          className={classNames(styles["chip"], { [styles["chip-selected"]]: selected == index })}
          key={index}
          onClick={() => {
            setSelected(index);
            onPressed?.(index);
          }}>
          {chip}
        </div>
      ))}
    </div>
  );
};
