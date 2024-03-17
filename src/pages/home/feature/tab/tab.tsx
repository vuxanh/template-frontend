import { useState } from "react";
import { Button } from "../../../../components/button/button";
import styles from "./tab.module.scss";

interface TabProps {
  chips: string[];
  onPressed: (index: number) => void;
}

export const Tab = ({ chips, onPressed }: TabProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles["root"]}>
      {chips.map((chip, index) => (
        <Button
          className={styles["chip"]}
          key={index}
          isPressed={selected == index}
          onClick={() => {
            setSelected(index);
            onPressed?.(index);
          }}>
          {chip}
        </Button>
      ))}
    </div>
  );
};
