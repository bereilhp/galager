import { UserButton } from "@clerk/nextjs";
import style from "./page.module.css"

export default function Home() {
  return (
    <div>
      <div className={style.right}>
        <UserButton></UserButton>
      </div>
      <h1>Welcome to Galager</h1>
    </div>
  )
}