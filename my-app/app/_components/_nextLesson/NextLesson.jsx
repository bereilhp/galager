import React from "react";
import styles from "./nextLesson.module.css";

export default function NextLesson() {
  return (
    <div className={styles.lessonButtons}>
      <button className={styles.backButton}>Previous Chapter</button>
      <button className={styles.nextButton}>Next Lesson</button>
    </div>
  );
}
