import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Caret({content}) {

    //Anima il caret con un effetto blink
    useGSAP( () => {
        gsap.to('#animated-box', {
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "power1.inOut",
            opacity: 0
        });
    },[]);

    //Componente che indica il caret = la barra verticale degli editor di testo
    return (
        <div className="w-full flex flex-row">
            <p className="inline font-mono underline decoration-red-400">{content}</p>
            <div id='animated-box' className="w-[2px] h-[20px] bg-white"></div>
        </div>
    );
}