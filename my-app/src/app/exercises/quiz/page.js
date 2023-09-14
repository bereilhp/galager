import QuizBasicJS from "../../_components/_quiz/QuizBasicJS";
import Footer from "../../_components/_footer/Footer";
import Navbar from "../../_components/_navbar/Navbar";

export default function QuizPage() {
  return (
    <div>
      <Navbar />
      <QuizBasicJS></QuizBasicJS>
      <Footer />
    </div>
  );
}
