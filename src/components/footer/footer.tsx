import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["root"]}>
      <div className={styles["header"]}>Find us on:</div>
      <div className={styles["sns"]}>
        <img src="vite.svg" />
        <img src="vite.svg" />
        <img src="vite.svg" />
        <img src="vite.svg" />
      </div>
      <div className={styles["copyright"]}>© 2024 Company Name. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
