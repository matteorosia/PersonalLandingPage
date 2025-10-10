export const RenderCodeContent = (text) => {
  // Regex che cattura tutto ciò che è tra <error>...</error>
  const regex = /<error>[\s\S]*?<\/error>/g;

  // Sostituisce ogni match con stringa vuota → lo elimina
  const cleanedText = text.replace(regex, "");

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
    if (className === "red") tailwindClass = "text-red-500";
    if (className === "green") tailwindClass = "text-green-500";
    if (className === "blue") tailwindClass = "text-blue-500";
    if (className === "yellow") tailwindClass = "text-yellow-500";
    if (className === "purple") tailwindClass = "text-purple-500";
    if (className === "orange") tailwindClass = "text-orange-500";
    if (className === "light-blue") tailwindClass = "text-blue-300";

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
