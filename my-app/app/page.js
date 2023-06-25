import { UserButton } from "@clerk/nextjs";
import Navbar from "./_components/_navbar/Navbar";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <h1>Welcome to Galager</h1>
      </div>
    </div>
  )
}