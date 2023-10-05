import Chapter0 from "@/src/app/_components/_chapter0/Chapter0";
import Footer from "@/src/app/_components/_footer/Footer";
import Navbar from "@/src/app/_components/_navbar/Navbar";
import NextLesson from "@/src/app/_components/_nextLesson/NextLesson";

export default function Page() {
  const currentChapter = 0;
  return (
    <div>
      <Navbar></Navbar>
      <Chapter0></Chapter0>
      <NextLesson currentChapter={currentChapter}></NextLesson>
      <Footer></Footer>
    </div>
  );
}
