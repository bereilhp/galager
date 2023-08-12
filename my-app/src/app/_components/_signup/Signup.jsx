"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./signup.module.css";
import { Toaster, toast } from "react-hot-toast";

export default function Signup() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data)
            router.push("/login")

        } catch (error) {
            console.log("Signup failed", error.message)
            toast.error("Please try again")
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true)
        }

    }, [user]);
    return (
        <div className={styles.signupContainer}>
            <Toaster></Toaster>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>{loading ? "Checking credentials" : "Signup"}</h1>
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
                    {buttonDisabled ? "Please enter values" : "Signup"}
                </button>
                <div className={styles.loginLink}>
                    Already have an account? <Link href="/login">Login</Link>
                </div>
            </div>
        </div>
    );
}