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

  return (
    <div className="p-4 text-white font-mono text-sm whitespace-pre-wrap font-mono">
      {content || ""}
    </div>
  );
}
