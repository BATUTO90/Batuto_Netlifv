import fetch from 'node-fetch';

export async function handler(event) {
  const { prompt } = JSON.parse(event.body);
  const API_KEY = process.env.HUGGINGFACE_API_KEY;

  const res = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  if (!res.ok) {
    return { statusCode: res.status, body: 'Error al llamar a Hugging Face' };
  }

  const data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
