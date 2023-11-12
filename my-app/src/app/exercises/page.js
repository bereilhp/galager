import ExercisesIntro from "../_components/_exercisesIntro/ExercisesIntro";
import Footer from "../_components/_footer/Footer";
import Navbar from "../_components/_navbar/Navbar";
import Pad from "../_components/_pad/Pad";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ExercisesIntro></ExercisesIntro>
      <Pad></Pad>
      <Footer></Footer>
    </div>
  );
}
