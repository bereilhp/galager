import { SignUp } from "@clerk/nextjs";
import style from "./signup.module.css"

export default function Page() {
  return (
    <div className={style.center}>
      <SignUp afterSignUpUrl="/sign-in"/>
    </div>
  )
}