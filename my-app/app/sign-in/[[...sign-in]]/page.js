import { SignIn } from "@clerk/nextjs";
import style from "./signin.module.css"

export default function Page() {
  return (
    <div className={style.center}>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  )
}

