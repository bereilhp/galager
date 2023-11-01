import Homepage from "../_components/_homepage/Homepage";
import Navbar from "../_components/_navbar/Navbar";
import Footer from "../_components/_footer/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}
