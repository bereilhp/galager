'use client'

import Image from "next/image";
import style from "./contact.module.css"

export default function Contact() {
    return (
        <div>
            <div className={style.center}>
                <Image
                    src="/_img/logo.png"
                    width={800}
                    height={225}
                    alt="Galager Logo"
                />
            </div>
            <p className={style.text}> For any inquiries or feedback, please feel free to reach out to us at <strong className={style.mail}>galagerOfficial@proton.me</strong></p>
            <div className={style.padding}></div>
            <div className={style.center}>
                <Image
                    src="/_img/homer.gif"
                    width={600}
                    height={300}
                    alt="Galager Logo"
                ></Image>
            </div>
            <div className={style.padBot}></div>
        </div>
    );
};