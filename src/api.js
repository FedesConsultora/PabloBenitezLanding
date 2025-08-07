// src/api.js
const API_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

/**
 * Envía la consulta del formulario de contacto.
 * formData: { nombre, email, telefono, asunto, mensaje }
 */
export async function enviarConsultaContacto(formData) {
  try {
    await fetch(`${API_URL}?action=contact`, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    return { success: true };
  } catch (err) {
    console.error('Error enviando contacto:', err);
    return { success: false };
  }
}
