
"use client"
import { useState } from "react"

const translations = {
  es: {
    title: "Recupera tus fondos de forma segura",
    subtitle: "Especialistas en recuperación financiera, disputas cripto y soporte internacional.",
    button: "Hablar por WhatsApp",
    services: "Nuestros servicios",
    trust: "Más de 2.500 casos gestionados",
    card1: "Recuperación de activos digitales",
    card2: "Soporte en fraudes financieros",
    card3: "Asistencia legal internacional"
  },
  en: {
    title: "Recover your funds securely",
    subtitle: "Experts in financial recovery, crypto disputes and international support.",
    button: "Chat on WhatsApp",
    services: "Our services",
    trust: "More than 2,500 handled cases",
    card1: "Digital asset recovery",
    card2: "Financial fraud support",
    card3: "International legal assistance"
  }
}

export default function Home() {
  const [lang, setLang] = useState("es")
  const t = translations[lang]

  const whatsapp = () => {
    const phone = "573001112233"
    const text = encodeURIComponent("Hola, necesito asesoría sobre recuperación de fondos.")
    window.open(`https://wa.me/${phone}?text=${text}`)
  }

  return (
    <main>
      <header className="header">
        <div className="logo">Recovery Shield</div>

        <div className="lang">
          <button onClick={() => setLang("es")}>ES</button>
          <button onClick={() => setLang("en")}>EN</button>
        </div>
      </header>

      <section className="hero">
        <div className="heroText">
          <span className="badge">{t.trust}</span>

          <h1>{t.title}</h1>

          <p>{t.subtitle}</p>

          <button className="whatsapp" onClick={whatsapp}>
            {t.button}
          </button>
        </div>

        <div className="heroImage">
          <img src="/hero.jpg" alt="Recovery" />
        </div>
      </section>

      <section className="services">
        <h2>{t.services}</h2>

        <div className="grid">
          <div className="card">
            <img src="/icon1.png" />
            <h3>{t.card1}</h3>
          </div>

          <div className="card">
            <img src="/icon2.png" />
            <h3>{t.card2}</h3>
          </div>

          <div className="card">
            <img src="/icon3.png" />
            <h3>{t.card3}</h3>
          </div>
        </div>
      </section>
    </main>
  )
}
