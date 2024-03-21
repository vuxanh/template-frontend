import { PropsWithChildren } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

interface ButtonProps extends PropsWithChildren<Partial<Omit<HTMLButtonElement, "children">>> {
  onClick?: () => void;
  isPressed?: boolean;
}

export const Button = ({ children, onClick, isPressed, className }: ButtonProps) => {
  return (
    <button className={classNames(styles["root"], { [styles["root-pressed"]]: isPressed }, className)} onClick={onClick}>
      {children}
    </button>
  );
};
