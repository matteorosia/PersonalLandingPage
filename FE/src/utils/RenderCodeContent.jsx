export const RenderCodeContent = (text, colorMode) => {
  // Regex che cattura tutto ciò che è tra <error>...</error>
  const regex = /<error>[\s\S]*?<\/error>/g;

  // Sostituisce ogni match con stringa vuota → lo elimina
  const cleanedText = text.replace(regex, "");

  console.log(text);
  const parts = [];
  const colorRegex = /<color=['"]([^'"]+)['"]>([\s\S]*?)<\/color>/g;
  let lastIndex = 0;
  let match;

  while ((match = colorRegex.exec(cleanedText)) !== null) {
    const [, className, innerText] = match;

    if (match.index > lastIndex) {
      parts.push(cleanedText.slice(lastIndex, match.index));
    }

    let tailwindClass = "";
    if (className === "red") {
      tailwindClass = colorMode ? "text-red-500" : "text-red-900";
    } else if (className === "green") {
      tailwindClass = colorMode ? "text-green-500" : "text-green-900";
    } else if (className === "blue") {
      tailwindClass = colorMode ? "text-blue-500" : "text-blue-900";
    } else if (className === "yellow") {
      tailwindClass = colorMode ? "text-yellow-500" : "text-yellow-900";
    } else if (className === "purple") {
      tailwindClass = colorMode ? "text-purple-500" : "text-purple-900";
    } else if (className === "orange") {
      tailwindClass = colorMode ? "text-orange-500" : "text-orange-900";
    } else if (className === "light-blue") {
      tailwindClass = colorMode ? "text-blue-300" : "text-blue-900";
    }


    parts.push(
      <span key={match.index} className={tailwindClass}>
        {innerText}
      </span>
    );

    lastIndex = colorRegex.lastIndex;
  }

  if (lastIndex < cleanedText.length) {
    parts.push(cleanedText.slice(lastIndex));
  }

  return parts;
};
