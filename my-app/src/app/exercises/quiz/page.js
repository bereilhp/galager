import QuizBasicJS from "../../_components/_quiz/QuizBasicJS";
import Footer from "../../_components/_footer/Footer";
import Navbar from "../../_components/_navbar/Navbar";
import QuizList from "../../_components/_quizList/QuizList";
import Pad from "../../_components/_pad/Pad";

export default function QuizPage() {
  return (
    <div>
      <Navbar />
      <QuizList></QuizList>
      <Pad></Pad>
      <Pad></Pad>
      <Footer />
    </div>
  );
}
