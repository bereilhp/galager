import FillTheBlankMedium from "@/src/app/_components/_fillinTheBlankMedium/FillTheBlankMedium";
import Footer from "@/src/app/_components/_footer/Footer";
import Navbar from "@/src/app/_components/_navbar/Navbar";
import Pad from "@/src/app/_components/_pad/Pad";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Pad></Pad>
      <FillTheBlankMedium></FillTheBlankMedium>
      <Pad></Pad>
      <Footer />
    </div>
  );
}
