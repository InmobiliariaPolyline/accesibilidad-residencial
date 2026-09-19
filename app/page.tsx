'use client'

import { FormEvent, useState } from 'react'

const phoneNumber = '944436004'
const whatsappNumber = `51${phoneNumber}`
const phoneLink = `tel:+${whatsappNumber}`
const whatsapp = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

const solutions = [
  { eyebrow: '01 / Movimiento seguro', title: 'Salvaescaleras', text: 'Sube y baja tus escaleras con seguridad y comodidad. Diseñados para adaptarse a distintos tramos y estilos de vivienda.', message: 'Hola, quiero hacer una consulta sobre salvaescaleras.', accent: 'bg-sky-100 text-sky-900' },
  { eyebrow: '02 / Autonomía diaria', title: 'Elevadores', text: 'Facilita el acceso entre niveles y recupera la libertad de moverte por tu casa, con una solución pensada para tus necesidades.', message: 'Hola, quiero hacer una consulta sobre elevadores para personas con movilidad reducida.', accent: 'bg-amber-100 text-amber-950' },
  { eyebrow: '03 / Tu casa, conectada', title: 'Ascensores domiciliarios', text: 'Una forma práctica, segura y elegante de conectar las plantas de tu hogar, incluso en espacios reducidos.', message: 'Hola, quiero hacer una consulta sobre ascensores domiciliarios.', accent: 'bg-emerald-100 text-emerald-950' },
]

const benefits = ['Mayor seguridad en el hogar', 'Más autonomía y comodidad', 'Evaluación personalizada', 'Instalación profesional', 'Soluciones para cada vivienda', 'Acompañamiento de principio a fin']
const steps = [['01', 'Cuéntanos qué necesitas', 'Escríbenos por WhatsApp o completa el formulario.'], ['02', 'Evaluamos tu hogar', 'Conocemos tus espacios, rutinas y prioridades.'], ['03', 'Te proponemos una solución', 'Recibes una recomendación clara, sin compromiso.'], ['04', 'Instalamos y acompañamos', 'Coordinamos la instalación y seguimos cerca.']]
const faqs = ['¿Realizan una evaluación del domicilio?', '¿Qué tipo de escaleras pueden adaptarse?', '¿Cuánto demora una instalación?', '¿Ofrecen mantenimiento y servicio técnico?', '¿Qué opciones existen para espacios reducidos?', '¿Cómo solicito una cotización?']

function Arrow() { return <span aria-hidden="true">↗</span> }
function Check() { return <span className="check-icon" aria-hidden="true">✓</span> }

export default function Page() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true) }

  return (
    <main>
      <div className="topline"><span>Soluciones de movilidad para vivir tu hogar con más libertad</span><a href={phoneLink}>944 436 004</a></div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Altura, inicio"><span className="brand-mark">A</span><span>altura<span className="brand-dot">.</span></span></a>
        <nav aria-label="Navegación principal"><a href="#soluciones">Soluciones</a><a href="#proceso">Cómo funciona</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></nav>
        <a className="header-whatsapp" href={whatsapp('Hola, quiero solicitar una asesoría.') } target="_blank" rel="noreferrer"><span>WhatsApp</span><Arrow /></a>
      </header>

      <section id="inicio" className="hero section-shell">
        <div className="hero-copy"><p className="kicker">MOVILIDAD · SEGURIDAD · AUTONOMÍA</p><h1>Tu hogar.<br /><em>Más accesible.</em></h1><p className="hero-lead">Soluciones de movilidad para que cada rincón de tu casa se sienta más seguro, cómodo y tuyo.</p><div className="hero-actions"><a className="button button-primary" href="#contacto">Solicitar una asesoría <Arrow /></a><a className="text-link" href={whatsapp('Hola, quiero consultar por una solución de movilidad para mi hogar.')} target="_blank" rel="noreferrer">Consultar por WhatsApp <Arrow /></a></div><div className="hero-proof"><div className="avatars"><span>MR</span><span>LC</span><span>GA</span></div><p><strong>Atención cercana</strong><br /><span>Te acompañamos en cada paso</span></p></div></div>
        <div className="hero-visual"><img src="/accessibility-home.png" alt="Mujer mayor utilizando un salvaescaleras en su hogar" /><div className="image-note"><span className="note-line"></span><p>Diseñado para tu vida<br /><strong>Instalado para tu hogar</strong></p></div><div className="image-badge"><span>100%</span><small>adaptado a ti</small></div></div>
      </section>

      <section id="soluciones" className="solutions section-shell"><div className="section-intro"><p className="kicker">NUESTRAS SOLUCIONES</p><h2>La forma de moverte<br /><em>también puede cambiar.</em></h2><p>Escuchamos lo que necesitas y encontramos la solución que mejor se integra a tu hogar y a tu forma de vivir.</p></div><div className="solution-grid">{solutions.map((solution) => <article className="solution-card" key={solution.title}><div className={`solution-number ${solution.accent}`}>{solution.eyebrow}</div><h3>{solution.title}</h3><p>{solution.text}</p><a href={whatsapp(solution.message)} target="_blank" rel="noreferrer">Consultar por WhatsApp <Arrow /></a></article>)}</div></section>

      <section id="nosotros" className="benefits"><div className="section-shell benefits-inner"><div><p className="kicker">POR QUÉ ALTURA</p><h2>Más que instalar.<br /><em>Es acompañar.</em></h2><p className="benefits-copy">Cada casa es diferente. Por eso, nuestro trabajo empieza mucho antes de la instalación: empieza escuchándote.</p><a className="text-link light-link" href="#contacto">Conoce nuestro enfoque <Arrow /></a></div><ul>{benefits.map((benefit) => <li key={benefit}><Check />{benefit}</li>)}</ul></div></section>

      <section id="proceso" className="process section-shell"><div className="section-intro"><p className="kicker">CÓMO FUNCIONA</p><h2>Simple desde<br /><em>el primer contacto.</em></h2></div><div className="steps">{steps.map(([number, title, text]) => <div className="step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section id="contacto" className="contact-section section-shell"><div className="contact-intro"><p className="kicker">HABLEMOS</p><h2>Da el primer paso<br /><em>hacia más libertad.</em></h2><p>Cuéntanos qué necesitas. Un asesor se pondrá en contacto contigo para orientarte sin compromiso.</p><div className="contact-details"><a href={phoneLink}><span>Teléfono</span>944 436 004</a><a href="mailto:hola@altura.com.ar"><span>Email</span>hola@altura.com.ar</a></div></div><div className="form-wrap">{submitted ? <div className="success-message"><div className="success-icon">✓</div><h3>Gracias por escribirnos</h3><p>Recibimos tu solicitud. Un asesor de Altura se pondrá en contacto contigo muy pronto.</p><button className="button button-secondary" onClick={() => setSubmitted(false)}>Enviar otra consulta</button></div> : <form onSubmit={submit}><div className="form-row"><label>Nombre completo<input required name="name" placeholder="Tu nombre" /></label><label>Teléfono<input required name="phone" type="tel" placeholder="944 436 004" /></label></div><div className="form-row"><label>Correo electrónico<input required name="email" type="email" placeholder="tu@email.com" /></label><label>Solución de interés<select name="solution" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Salvaescaleras</option><option>Elevador para movilidad reducida</option><option>Ascensor domiciliario</option></select></label></div><label>¿Cuándo prefieres que te contactemos?<input name="time" placeholder="Ej. Por la mañana, de lunes a viernes" /></label><label>Cuéntanos un poco más<textarea name="comments" rows={3} placeholder="¿Qué necesitas resolver en tu hogar?"></textarea></label><label className="consent"><input required type="checkbox" />Acepto el <a href="#privacidad">aviso de privacidad</a>.</label><button className="button button-primary form-button" type="submit">Solicitar mi cita <Arrow /></button></form>}</div></section>

      <section className="trust section-shell"><div className="trust-label"><p className="kicker">PARA TU TRANQUILIDAD</p><p>Una decisión importante<br />merece respaldo.</p></div><div className="trust-item"><strong>+10</strong><span>Años de experiencia</span></div><div className="trust-item"><strong>5 años</strong><span>Garantía en instalación</span></div><div className="trust-item"><strong>24/7</strong><span>Servicio técnico</span></div><div className="trust-item"><strong>AR · UY</strong><span>Zonas de atención</span></div></section>

      <section className="faq section-shell"><div className="section-intro"><p className="kicker">PREGUNTAS FRECUENTES</p><h2>Lo que quieres saber,<br /><em>antes de decidir.</em></h2></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={faq}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq}</span><b>+</b></button>{openFaq === index && <p>{index === 0 ? 'Sí. Realizamos una evaluación personalizada para conocer tu vivienda y recomendarte la opción más adecuada.' : 'Conversemos sobre tu caso y te daremos una respuesta clara, sin compromiso.'}</p>}</div>)}</div></section>

      <footer><div className="footer-main section-shell"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">A</span><span>altura<span className="brand-dot">.</span></span></a><p>Soluciones para vivir<br />tu hogar con libertad.</p><div className="footer-links"><a href="#soluciones">Soluciones</a><a href="#proceso">Cómo funciona</a><a href="#contacto">Contacto</a></div><div className="footer-contact"><a href="mailto:hola@altura.com.ar">hola@altura.com.ar</a><a href={phoneLink}>944 436 004</a></div></div><div className="footer-bottom section-shell"><span>© 2024 Altura. Todos los derechos reservados.</span><a id="privacidad" href="#privacidad">Aviso de privacidad</a><span>Buenos Aires · Montevideo</span></div></footer>
      <a className="floating-whatsapp" href={whatsapp('Hola, quiero solicitar una asesoría.')} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><span>WhatsApp</span><Arrow /></a>
    </main>
  )
}
