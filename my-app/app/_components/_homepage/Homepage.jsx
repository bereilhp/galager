import Image from "next/image";
import style from "./homepage.module.css"

export default function Homepage() {
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
        </div>
    );
};