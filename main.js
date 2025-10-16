async function callHuggingFaceModel(model, prompt) {
  const HUGGINGFACE_API_KEY = 'hf_api_key';
  const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input: prompt }),
  });

  if (!response.ok) throw new Error(`Error HuggingFace: ${response.statusText}`);

  const result = await response.json();

  // Compatibilidad con diferentes formatos de respuesta
  if (Array.isArray(result)) {
    if (result[0]?.generated_text) return result[0].generated_text;
    if (typeof result[0] === 'string') return result[0];
  }
  if (result.generated_text) return result.generated_text;

  // Si no se reconoce el formato, devuelve todo el JSON como texto
  return JSON.stringify(result);
}

}

async function callOpenAI(prompt) {
  const OPENAI_API_KEY = 'openai_api_key';
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-5-pro',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });
  if (!response.ok) throw new Error('Error OpenAI');
  const data = await response.json();
  return data.choices[0]?.message?.content ?? 'No response from OpenAI';
}

async function sendPrompt() {
  const prompt = document.getElementById('inputPrompt').value.trim();
  if (!prompt) return;
  const outputElement = document.getElementById('responseOutput');
  outputElement.textContent = 'Procesando...';

  try {
    // Ejemplo: usar primero HuggingFace, si falla usar OpenAI
    let response = await callHuggingFaceModel('microsoft/DialoGPT-medium', prompt);
    if (!response) response = await callOpenAI(prompt);
    outputElement.textContent = response;
  } catch (err) {
    outputElement.textContent = `Error: ${err.message}`;
  }
}
