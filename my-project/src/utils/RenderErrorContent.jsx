export const RenderErrorContent = (text) => {
  const matches = [];
  const regex = /<error>([\s\S]*?)<\/error>/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const innerText = match[1]; // gruppo catturato dentro <error>...</error>
    matches.push(innerText);
  }

  return matches;
};
