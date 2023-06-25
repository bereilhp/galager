import Image from "next/image";

export default function Contact() {
    return (
        <div>
            <Image 
            src="/_img/logo.png" 
            width={1200} 
            height={400}
            alt="Galager Logo"
            />
            <h2>Contact</h2>
            <p> For any inquiries or feedback, please feel free to reach out to us at <strong>galagerOfficial@proton.me</strong></p>
        </div>
    );
};