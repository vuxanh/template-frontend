import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["root"]}>
      <a className={styles["icon"]} href="/">
        <img src="/vite.svg" />
      </a>
    </header>
  );
};

export default Header;
