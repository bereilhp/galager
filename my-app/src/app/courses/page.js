import CoursesIntro from "../_components/_coursesIntro/CoursesIntro";
import FooterFixed from "../_components/_footerFixed/FooterFixed";
import Navbar from "../_components/_navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <CoursesIntro></CoursesIntro>
      <FooterFixed />
    </div>
  );
}
