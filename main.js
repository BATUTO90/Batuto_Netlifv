async function callHuggingFaceModel(prompt) {
  const response = await fetch('/.netlify/functions/hug-api', {
    method: 'POST',
    body: JSON.stringify({ prompt }),
  });
  if (!response.ok) throw new Error(`Error HuggingFace: ${response.statusText}`);
  const result = await response.json();

  if (Array.isArray(result) && result[0]?.generated_text) return result[0].generated_text;
  if (result.generated_text) return result.generated_text;
  return JSON.stringify(result);
}
