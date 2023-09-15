import QuizHardJS from "@/src/app/_components/_quizHard/QuizHardJS";
import Footer from "../../../_components/_footer/Footer";
import Navbar from "../../../_components/_navbar/Navbar";

export default function HardQuizPage() {
  return (
    <div>
      <Navbar />
      <QuizHardJS></QuizHardJS>
      <Footer />
    </div>
  );
}
