import Footer from "../_components/_footer/Footer";
import Navbar from "../_components/_navbar/Navbar";
import StartLearning from "../_components/_startLearning/StartLearning";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <StartLearning></StartLearning>
      <h1>Soy Learn</h1>
      <Footer/>
    </div>
  )
}