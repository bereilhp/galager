import ExercisesIntro from "../_components/_exercisesIntro/ExercisesIntro";
import FooterFixed from "../_components/_footerFixed/FooterFixed";
import Navbar from "../_components/_navbar/Navbar";
import Pad from "../_components/_pad/Pad";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ExercisesIntro></ExercisesIntro>
      <Pad></Pad>
      <FooterFixed />
    </div>
  );
}
