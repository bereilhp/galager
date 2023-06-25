import { UserButton } from "@clerk/nextjs";
import Navbar from "./_components/_navbar/Navbar";
import Homepage from "./_components/_homepage/Homepage";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Homepage/>
      </div>
    </div>
  )
}