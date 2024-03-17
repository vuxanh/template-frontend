import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["root"]}>
      <div className={styles["icon"]}>
        <img src="/vite.svg" />
      </div>
    </header>
  );
};

export default Header;
