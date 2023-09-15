import QuizBasicJS from "../../_components/_quiz/QuizBasicJS";
import Footer from "../../_components/_footer/Footer";
import Navbar from "../../_components/_navbar/Navbar";
import QuizList from "../../_components/_quizList/QuizList";

export default function QuizPage() {
  return (
    <div>
      <Navbar />
      <QuizList></QuizList>
      <Footer />
    </div>
  );
}
