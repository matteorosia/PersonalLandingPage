import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CodeSectionContent({ filePath }) {
  const [content, setContent] = useState("");

  useGSAP( () => {
    gsap.to('#animated-box', {
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power1.inOut",
      opacity: 0
    });
  },[]);

  useEffect(() => {
    if (!filePath) return;

    fetch(filePath)
      .then((res) => res.text())
      .then((data) => setContent(data))
      .catch((err) => setContent(`Error code: ${err}`));
  }, [filePath]);

  const renderContent = (text) => {
    const parts = [];
    // Regex che prende <span class='qualcosa'>...</span>
    const regex = /<color=['"]([^'"]+)['"]>([\s\S]*?)<\/color>/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [, className, innerText] = match;

      // Aggiunge il testo prima del match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Mappa la classe custom a Tailwind (qui esempio semplice)
      let tailwindClass = "";
      if (className === "red") tailwindClass = "text-red-500";
      if (className === "green") tailwindClass = "text-green-500";
      if (className === "blue") tailwindClass = "text-blue-500";
      if (className === "yellow") tailwindClass = "text-yellow-500";
      if (className === "purple") tailwindClass = "text-purple-500";
      if (className === "orange") tailwindClass = "text-orange-500";
      if (className === 'light-blue') tailwindClass = "text-blue-300";

      parts.push(
        <span key={match.index} className={tailwindClass}>
          {innerText}
        </span>
      );

      lastIndex = regex.lastIndex;
    }

    // Aggiunge eventuale testo dopo l’ultimo match
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return (        
    <>
      { /*<div className="h-full w-[40px] bg-neutral-800 text-[14px] text-neutral-500 font-mono p-2 pt-4 flex-1">1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33</div> */ }
      <div className="p-4 text-white font-mono sm:text-[14px] max-sm:text-[13px] whitespace-pre-wrap h-full">
        {renderContent(content)}
        
        <div className="w-full flex flex-row mt-4">
          <p className="inline font-mono underline decoration-red-400">TODO: Remember to..</p>
          <div id='animated-box' className="w-[2px] h-[20px] bg-white"></div>
        </div>

      </div>
    </>
  );
}
