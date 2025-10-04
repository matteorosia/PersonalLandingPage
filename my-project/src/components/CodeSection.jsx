import { useEffect, useState } from "react";

export default function CodeSection({ filePath }) {
  const [content, setContent] = useState("");

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
      const [fullMatch, className, innerText] = match;

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
    <div className="p-4 text-white font-mono text-sm whitespace-pre-wrap">
      {renderContent(content)}
    </div>
  );
}
