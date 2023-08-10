import Footer from "@/src/app/_components/_footer/Footer";
import Navbar from "@/src/app/_components/_navbar/Navbar";
import Pad from "@/src/app/_components/_pad/Pad";
import StartLearning from "@/src/app/_components/_startLearning/StartLearning";

export default function Page() {
  return (
    <div>
      <Navbar></Navbar>      
      <h1>Soy JavaScript</h1>
      <StartLearning></StartLearning>
      <Pad></Pad>
      <Footer></Footer>
    </div>
  )
}