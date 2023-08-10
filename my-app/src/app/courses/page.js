import Footer from "../_components/_footer/Footer";
import Navbar from "../_components/_navbar/Navbar";
import Pad from "../_components/_pad/Pad";
import StartLearningJS from "../_components/_startLearninJS/StartLearning";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <h1>Soy Courses</h1>
      <StartLearningJS></StartLearningJS>
      <Pad></Pad>
      <Footer/>
    </div>
  )
}