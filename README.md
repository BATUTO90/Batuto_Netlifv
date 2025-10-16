# BATUTO_IA_SOAMF

Aplicación de orquestación avanzada de agentes IA con integración de modelos OpenAI GPT-5 Pro, Hugging Face y múltiples herramientas multimodales.

## Descripción

Este proyecto permite configurar pipelines secuenciales y paralelos con agentes especializados de conversación, generación de código, creatividad, y generación de imágenes y voz.

## Modelos integrados destacados

- Conversación: microsoft/DialoGPT-medium, Qwen2.5-7B, llama-3.1-8B
- Código: mistralai/Mistral-7B, deepseek-coder-6.7b, CodeGPT-python
- Creatividad avanzada: llama-3.1-8B, Qwen2.5-14B
- Multimodal: Salesforce/blip, OpenAI DALL·E 3
- Modelos ligeros para CPU: TinyLlama, microsoft phi-3-mini

## Despliegue

El proyecto se conecta a Netlify para despliegue continuo ligado a repositorio Git.

*Requiere variables de entorno para las claves API:*

- OPENAI_API_KEY
- HUGGINGFACE_API_KEY

## Uso

1. Configura variables de entorno en Netlify.
2. Realiza push a este repositorio.
3. Netlify construirá y desplegará automáticamente.

---

© 2025 BATUTO_IA_SOAMF - Todos los derechos reservados.
