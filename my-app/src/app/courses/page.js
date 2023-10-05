import CoursesIntro from "../_components/_coursesIntro/CoursesIntro";
import Footer from "../_components/_footer/Footer";
import Navbar from "../_components/_navbar/Navbar";
import Pad from "../_components/_pad/Pad";
import StartLearningJS from "../_components/_startLearninJS/StartLearning";

export default function Page() {
  return (
    <div>
      <Navbar />
      <CoursesIntro></CoursesIntro>
      <Pad></Pad>
      <Footer />
    </div>
  );
}
