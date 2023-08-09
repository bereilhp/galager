import styles from "./nextLesson.module.css";
import Link from "next/link";

export default function NextLesson({ currentChapter }) {
  const previousChapter = currentChapter - 1;
  const nextChapter = currentChapter + 1;

  const hasPreviousChapter = previousChapter >= 0;
  const hasNextChapter = currentChapter < 5; 
  
  return (
    <div className={styles.lessonButtons}>
      {hasPreviousChapter && (
        <Link href={`/learn/chapter${previousChapter}`} className={styles.backButton}>
          Previous Chapter
        </Link>
      )}
      {hasNextChapter && (
        <Link href={`/learn/chapter${nextChapter}`} className={styles.nextButton}>
          Next Chapter
        </Link>
      )}
    </div>
  );
}
