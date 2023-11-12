import CoursesIntro from "../_components/_coursesIntro/CoursesIntro";
import Footer from "../_components/_footer/Footer";
import Navbar from "../_components/_navbar/Navbar";
import Pad from "../_components/_pad/Pad";

export default function Page() {
  return (
    <div>
      <Navbar />
      <CoursesIntro></CoursesIntro>
      <Pad></Pad>
      <Pad></Pad>
      <Footer />
    </div>
  );
}
