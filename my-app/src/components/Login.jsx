import Head from "next/head";
import styles from "../styles/Login.module.css"

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/galager.ico" />
      </Head>
      <div className={styles.firstDiv}>
        <form>
          <div className={styles.bottom4}>
            <label className={styles.eAndP}>Email:</label>
            <input className={styles.eAndPInput} type="email" required />
          </div>
          <div className={styles.bottom8}>
            <label className={styles.eAndP}>Password:</label>
            <input className={styles.eAndPInput} type="password" required />
          </div>
          <button className={styles.buttonSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
