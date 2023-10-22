import QuizBasicJS from "../../../_components/_quiz/QuizBasicJS";
import Footer from "../../../_components/_footer/Footer";
import Navbar from "../../../_components/_navbar/Navbar";
import Pad from "@/src/app/_components/_pad/Pad";

export default function EasyQuizPage() {
  return (
    <div>
      <Navbar />
      <QuizBasicJS></QuizBasicJS>
      <Footer />
    </div>
  );
}
