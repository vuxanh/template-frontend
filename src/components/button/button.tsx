import { ReactNode } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isPressed?: boolean;
  className?: string;
}

export const Button = ({ children, onClick, isPressed, className }: ButtonProps) => {
  return (
    <button className={classNames(styles["root"], { [styles["root-pressed"]]: isPressed }, className)} onClick={onClick}>
      {children}
    </button>
  );
};
