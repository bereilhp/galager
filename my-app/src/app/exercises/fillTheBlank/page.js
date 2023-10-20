import FillTheBlank from "../../_components/_fillinTheBlank/FillTheBlank";
import Footer from "../../_components/_footer/Footer";
import Navbar from "../../_components/_navbar/Navbar";
import Pad from "../../_components/_pad/Pad";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Pad></Pad>
      <FillTheBlank></FillTheBlank>
      <Footer />
    </div>
  );
}
