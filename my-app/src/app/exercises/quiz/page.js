import Navbar from "../../_components/_navbar/Navbar";
import QuizList from "../../_components/_quizList/QuizList";
import FooterFixed from "../../_components/_footerFixed/FooterFixed";

export default function QuizPage() {
  return (
    <div>
      <Navbar />
      <QuizList></QuizList>
      <FooterFixed />
    </div>
  );
}
