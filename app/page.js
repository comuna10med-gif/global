
"use client"
import { useState } from "react"

const content = {
  en: {
    title: "Recover Your Funds With Confidence",
    subtitle: "Professional recovery solutions for online scams, crypto disputes, and financial fraud.",
    cta: "Contact on WhatsApp",
    services: "Our Services",
    s1: "Crypto Recovery",
    s2: "Investment Fraud Support",
    s3: "International Assistance"
  },
  es: {
    title: "Recupera Tus Fondos Con Confianza",
    subtitle: "Soluciones profesionales para fraudes online, disputas cripto y estafas financieras.",
    cta: "Contactar por WhatsApp",
    services: "Nuestros Servicios",
    s1: "Recuperación Cripto",
    s2: "Soporte por Fraude Financiero",
    s3: "Asistencia Internacional"
  }
}

export default function Home() {
  const [lang, setLang] = useState("es")
  const t = content[lang]

  const openWhatsApp = () => {
    const phone = "573000000000"
    const message = encodeURIComponent("Hola, necesito información sobre recuperación de fondos.")
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <main>
      <section style={{
        minHeight:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:"40px",
        background:"linear-gradient(135deg,#0f172a,#1e293b)"
      }}>
        <div style={{maxWidth:"1100px", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"40px"}}>
          <div>
            <div style={{marginBottom:"20px"}}>
              <button onClick={() => setLang("es")} style={btn}>ES</button>
              <button onClick={() => setLang("en")} style={btn}>EN</button>
            </div>

            <h1 style={{fontSize:"58px",lineHeight:"1.1",marginBottom:"20px"}}>
              {t.title}
            </h1>

            <p style={{fontSize:"20px",color:"#cbd5e1",marginBottom:"30px"}}>
              {t.subtitle}
            </p>

            <button onClick={openWhatsApp} style={{
              background:"#22c55e",
              border:"none",
              padding:"16px 28px",
              borderRadius:"14px",
              color:"#fff",
              fontSize:"18px",
              cursor:"pointer"
            }}>
              {t.cta}
            </button>

            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(3,1fr)",
              gap:"16px",
              marginTop:"50px"
            }}>
              {[t.s1, t.s2, t.s3].map((item, index) => (
                <div key={index} style={{
                  background:"#1e293b",
                  padding:"20px",
                  borderRadius:"18px",
                  border:"1px solid #334155"
                }}>
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background:"#111827",
            borderRadius:"24px",
            padding:"20px",
            border:"1px solid #334155"
          }}>
            <img
              src="/hero.svg"
              alt="Recovery"
              style={{width:"100%", borderRadius:"20px"}}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

const btn = {
  marginRight:"10px",
  padding:"10px 16px",
  borderRadius:"10px",
  border:"1px solid #334155",
  background:"#1e293b",
  color:"#fff",
  cursor:"pointer"
}
