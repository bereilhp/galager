"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";
import styles from "./signup.module.css";

export default function Signup() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }
    return (
        <div className={styles.signupContainer}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Sign Up</h1>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="username">Username:</label>
                    <input
                        className={styles.input}
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="Enter your username"
                    />
                </div>
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
                <button className={styles.signupButton} onClick={onSignup}>
                    Sign up
                </button>
                <div className={styles.loginLink}>
                    Already have an account? <Link href="/login">Log in</Link>
                </div>
            </div>
        </div>
    );
}