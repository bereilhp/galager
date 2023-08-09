import FooterFixed from "@/app/_components/_footerFixed/FooterFixed";
import Navbar from "@/app/_components/_navbar/Navbar";
import NextLesson from "@/app/_components/_nextLesson/NextLesson";

export default function Page() {
  const currentChapter = 1;
  return (
    <div>
      <Navbar></Navbar>
      <h1>Chapter 1</h1>
      <NextLesson currentChapter={currentChapter}></NextLesson>
      <FooterFixed></FooterFixed>
    </div>
  )
}