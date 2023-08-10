import Footer from "../_components/_footer/Footer";
import Navbar from "../_components/_navbar/Navbar";
import Pad from "../_components/_pad/Pad";
import StartLearning from "../_components/_startLearning/StartLearning";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <h1>Soy Learn</h1>
      <StartLearning></StartLearning>
      <Pad></Pad>
      <Footer/>
    </div>
  )
}