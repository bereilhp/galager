import FillTheBlank from "@/src/app/_components/_fillinTheBlank/FillTheBlank";
import Footer from "@/src/app/_components/_footer/Footer";
import Navbar from "@/src/app/_components/_navbar/Navbar";
import Pad from "@/src/app/_components/_pad/Pad";

export default function Page() {
  return (
    <div>
      <Navbar></Navbar>
      <Pad></Pad>
      <FillTheBlank></FillTheBlank>
      <Pad></Pad>
      <Footer></Footer>
    </div>
  );
}
