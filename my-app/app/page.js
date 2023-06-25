import { UserButton } from "@clerk/nextjs";
import Navbar from "./_components/_navbar/Navbar";
import Homepage from "./_components/_homepage/Homepage";
import Footer from "./_components/_footer/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Homepage/>
      </div>
      <Footer></Footer>
    </div>
  )
}