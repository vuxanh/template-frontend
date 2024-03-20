import { useForm } from "react-hook-form";
import styles from "./action.module.scss";
import { Button } from "../../../components/button/button";

interface FormData {
  name: string;
  email: string;
  newsletter: boolean;
}

export const Action = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className={styles["root"]}>
      <h1 className={styles["title"]}>Start Building Today</h1>
      <h6 className={styles["description"]}> Enter your email to get started with our Vite template.</h6>
      <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
        <input className={styles["text-box"]} {...register("name")} placeholder="Enter your name" required></input>
        <input className={styles["text-box"]} {...register("email")} placeholder="Enter your email" type="email" required></input>
        <label htmlFor="newsletter" className={styles["newsletter"]}>
          <input type="checkbox" {...register("newsletter")} id="newsletter" />
          <span className={styles["checkmark"]} />
          Yes, sign me up for your newsletter! Stay informed about the latest news, tips, and special offers.
        </label>
        <Button className={styles["submit"]} type="submit">
          Sign me up!
        </Button>
      </form>
    </section>
  );
};
