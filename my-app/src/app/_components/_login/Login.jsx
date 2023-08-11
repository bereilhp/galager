"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./login.module.css";
import { Toaster, toast } from "react-hot-toast";

export default function Login() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            toast.success("Successfully logged in");
            console.log("Login success", response.data);
            setTimeout(() => {
                router.push("/profile")
                console.log("Timeout finished!");
            }, 1000);
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error("This didn't work.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

    return (

        <div className={styles.signupContainer}>
            <Toaster></Toaster>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>{loading ? "Checking credentials" : "Log In"}</h1>
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
                    {buttonDisabled ? "Please enter values" : "Log In"}
                </button>
                <div className={styles.loginLink}>
                    Don't have an account? <Link href="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}