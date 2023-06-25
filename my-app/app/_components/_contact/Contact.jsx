import Image from "next/image";
import style from "./contact.module.css"

export default function Contact() {
    return (
        <div>
            <h1 className={style.center}>
                Contact Us
            </h1>
            <p className={style.text}> For any inquiries or feedback, please feel free to reach out to us at <strong>galagerOfficial@proton.me.</strong></p>
        </div>
    );
};