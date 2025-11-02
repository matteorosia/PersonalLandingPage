export async function fetchContent(id, format) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/contents/${id}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    const formattedValue = format ? data.value.replace(/\\n/g, "\n") : data.value;
    return formattedValue;
  } catch (err) {
    console.error("fetchContent error:", err);
    return ""; // oppure lancia l'errore se vuoi gestirlo fuori
  }
}

export async function updateContent(title, newData){
  const response = await fetch(`http://127.0.0.1:8000/api/contents/${title}/update/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData),
  });
  const data = await response.json();
  console.log(data);
};
