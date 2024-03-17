import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./layout.module.scss";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles["root"]}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
