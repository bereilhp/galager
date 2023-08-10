import Footer from "@/app/_components/_footer/Footer";
import Navbar from "@/app/_components/_navbar/Navbar";
import Pad from "@/app/_components/_pad/Pad";
import StartLearning from "@/app/_components/_startLearning/StartLearning";

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