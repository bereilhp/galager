import FooterFixed from "@/src/app/_components/_footerFixed/FooterFixed";
import Navbar from "@/src/app/_components/_navbar/Navbar";
import NextLesson from "@/src/app/_components/_nextLesson/NextLesson";

export default function Page() {
  const currentChapter = 3;
  return (
    <div>
      <Navbar></Navbar>
      <h1>Chapter 3</h1>
      <NextLesson currentChapter={currentChapter}></NextLesson>
      <FooterFixed></FooterFixed>
    </div>
  )
}