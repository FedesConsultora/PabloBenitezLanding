// src/components/ContactForm.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { enviarConsultaContacto } from '../api';

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [data, setData]       = useState(initialState);
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);

  /* ---------- VALIDACIONES ---------- */
  const validate = (fieldValues = data) => {
    const err = {};

    // Nombre
    if (!fieldValues.name.trim()) {
      err.name = 'Ingrese su nombre.';
    }

    // Email
    if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(fieldValues.email)) {
      err.email = 'Email inválido.';
    }

    // Teléfono (opcional, si se ingresa debe ser válido)
    if (fieldValues.phone && !/^\d{8,15}$/.test(fieldValues.phone)) {
      err.phone = 'Ingrese solo números (8-15 dígitos).';
    }

    // Asunto
    if (!fieldValues.subject.trim()) {
      err.subject = 'Ingrese el asunto.';
    }

    // Mensaje
    if (!fieldValues.message.trim()) {
      err.message = 'Ingrese su mensaje.';
    }

    return err;
  };

  /* ---------- Cambio de inputs ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Evita letras en teléfono
    if (name === 'phone' && /[^\d]/.test(value)) return;

    setData({ ...data, [name]: value });

    // Validación en tiempo real
    const newErrors = validate({ ...data, [name]: value });
    setErrors(newErrors);
  };

  /* ---------- Al salir de un input ---------- */
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  /* ---------- Envío del formulario ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);

    if (Object.keys(err).length) return; // No enviar si hay errores

    setLoading(true);
    try {
      // Mapeo de datos al formato esperado por Google Sheet
      const payload = {
        nombre  : data.name,
        email   : data.email,
        telefono: data.phone,
        asunto  : data.subject,
        mensaje : data.message,
      };

      await enviarConsultaContacto(payload);
      setSent(true);
      setData(initialState);
      setTouched({});
    } catch (err) {
      alert('Hubo un error. Intentá nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    Object.keys(validate()).length === 0 &&
    Object.values(data).every((v) => v.trim());

  return (
    <motion.section
      className="contact-section"
      id="contacto"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="contact-title">CONTACTAME</h2>

      {sent && <p className="contact-success">¡Mensaje enviado con éxito!</p>}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Nombre */}
        <div>
          <label htmlFor="name">Nombre y apellido</label>
          <input
            id="name"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.name}
          />
          {touched.name && errors.name && (
            <span className="error-msg">{errors.name}</span>
          )}
        </div>

        {/* Email + Tel */}
        <div className="double">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.email}
            />
            {touched.email && errors.email && (
              <span className="error-msg">{errors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.phone}
            />
            {touched.phone && errors.phone && (
              <span className="error-msg">{errors.phone}</span>
            )}
          </div>
        </div>

        {/* Asunto */}
        <div>
          <label htmlFor="subject">Asunto</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={data.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.subject}
          />
          {touched.subject && errors.subject && (
            <span className="error-msg">{errors.subject}</span>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={data.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.message}
          />
          {touched.message && errors.message && (
            <span className="error-msg">{errors.message}</span>
          )}
        </div>

        <button type="submit" disabled={loading || !isFormValid}>
          {loading ? 'Enviando…' : 'Enviar'}
        </button>
      </form>
    </motion.section>
  );
}
