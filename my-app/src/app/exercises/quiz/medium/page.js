import Footer from "../../../_components/_footer/Footer";
import Navbar from "../../../_components/_navbar/Navbar";
import QuizMediumJS from "@/src/app/_components/_quizMedium/QuizMediumJS";

export default function MediumQuizPage() {
  return (
    <div>
      <Navbar />
      <QuizMediumJS></QuizMediumJS>
      <Footer />
    </div>
  );
}
