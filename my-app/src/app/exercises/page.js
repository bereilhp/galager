import Footer from "../_components/_footer/Footer";
import Navbar from "../_components/_navbar/Navbar";
import QuizBtn from "../_components/_quizBtn/QuizBtn";

export default function Page() {
  return (
    <div>
      <Navbar />
      <h1>Soy Exercises</h1>
      <QuizBtn></QuizBtn>
      <Footer />
    </div>
  );
}
