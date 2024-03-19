import { useForm } from "react-hook-form";
import styles from "./action.module.scss";
import { Button } from "../../../components/button/button";

interface FormData {
  name: string;
  email: string;
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
        <input {...register("name")} placeholder="Enter your name" required></input>
        <input {...register("email")} placeholder="Enter your email" type="email" required></input>
        <Button className={styles["submit"]} type="submit">
          Get Started
        </Button>
      </form>
    </section>
  );
};
