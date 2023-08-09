import React from "react";
import styles from "./nextLesson.module.css";
import Link from "next/link";

export default function NextLesson() {
  return (
    <div className={styles.lessonButtons}>
      <Link href="/learn/chapter0" className={styles.backButton}>Previous Chapter</Link>
      <Link href="/learn/chapter0" className={styles.nextButton}>Next Chapter</Link>
    </div>
  );
}
