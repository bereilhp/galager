"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";
import styles from "./login.module.css";

export default function Login() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {

    }
    return (
        <div className={styles.signupContainer}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input
                        className={styles.input}
                        id="email"
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Enter your email"
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input
                        className={styles.input}
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Enter your password"
                    />
                </div>
                <button className={styles.signupButton} onClick={onLogin}>
                    Login
                </button>
                <div className={styles.loginLink}>
                    Don't have an account? <Link href="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}