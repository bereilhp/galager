import FooterFixed from "@/app/_components/_footerFixed/FooterFixed";
import Navbar from "@/app/_components/_navbar/Navbar";
import NextLesson from "@/app/_components/_nextLesson/NextLesson";

export default function Page() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Chapter 0</h1>
      <NextLesson></NextLesson>
      <FooterFixed></FooterFixed>
    </div>
  )
}