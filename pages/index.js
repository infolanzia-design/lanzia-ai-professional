import {useState,useEffect} from 'react'
const TEXTS = {
  es: {
    heroTitle: "Potencia tu negocio con inteligencia artificial — Lanzia te ayuda a automatizar y crecer.",
    heroSubtitle: "Crea páginas web, tiendas online o apps sin programar. Escribe lo que necesitas y LanzIA lo construye por ti en minutos.",
    cta: "Probar ahora",
    howTitle: "Cómo funciona",
    how: ["Describe tu idea","La IA genera estructura, textos e imágenes","Personaliza si quieres","Publica y expande"],
    benefitsTitle: "Beneficios",
    benefits: ["Sin código","Rápido","En tu idioma","Diseños profesionales","Escalable"],
    contactTitle: "Contacto / Lista de espera",
    contactSubtitle: "Déjanos tu correo y te avisamos cuando lancemos",
    name:"Nombre", email:"Email", message:"Mensaje", send:"Enviar", footer:"© 2025 Lanzia AI — Todos los derechos reservados"
  },
  en: {
    heroTitle: "Empower your business with AI — Lanzia helps you automate and grow.",
    heroSubtitle: "Create websites, stores or apps without coding. Type what you need and LanzIA builds it for you in minutes.",
    cta: "Try now",
    howTitle: "How it works",
    how: ["Describe your idea","AI generates structure, copy and images","Customize if you want","Publish and expand"],
    benefitsTitle: "Benefits", benefits:["No-code","Fast","In your language","Professional designs","Scalable"],
    contactTitle:"Contact / Waitlist", contactSubtitle:"Leave your email and we'll notify you at launch",
    name:"Name", email:"Email", message:"Message", send:"Send", footer:"© 2025 Lanzia AI — All rights reserved"
  }
}
export default function Home(){
  const [lang,setLang] = useState('es')
  useEffect(()=>{
    try{ const nav=(navigator.language||'es').toLowerCase(); if(nav.startsWith('en')) setLang('en'); else setLang('es') }catch(e){setLang('es')}
  },[])
  const t = TEXTS[lang]
  const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ACTION || ''
  return (
    <main className="container">
      <nav className="nav">
        <div className="logo"><img src="/logo.svg" alt="logo"/><strong>Lanzia AI</strong></div>
        <div className="lang"><button className="switch" onClick={()=>setLang(lang=='es'?'en':'es')}>{lang.toUpperCase()}</button></div>
      </nav>
      <header className="hero">
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSubtitle}</p>
        <div className="cta-row"><a href="#contact"><button className="btn">{t.cta}</button></a></div>
      </header>
      <section className="section"><h2>{t.howTitle}</h2><div className="grid">{t.how.map((h,i)=>(<div className="card" key={i}><h3>{i+1}.</h3><p>{h}</p></div>))}</div></section>
      <section className="section"><h2>{t.benefitsTitle}</h2><div className="grid">{t.benefits.map((b,i)=>(<div className="card" key={i}><p>{b}</p></div>))}</div></section>
      <section id="contact" className="section"><h2>{t.contactTitle}</h2><p>{t.contactSubtitle}</p>
        <form className="contact-form" method="POST" action={FORMSPREE} onSubmit={(e)=>{ if(!FORMSPREE){e.preventDefault(); alert(lang=='es'?'Configura Formspree en README':'Configure Formspree in README')} }}>
          <input name="name" placeholder={t.name} required style={{padding:12,borderRadius:10,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'inherit'}}/>
          <input name="email" type="email" placeholder={t.email} required style={{padding:12,borderRadius:10,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'inherit'}}/>
          <textarea name="message" placeholder={t.message} rows={4} required style={{padding:12,borderRadius:10,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'inherit'}}/>
          <button className="btn" type="submit">{t.send}</button>
        </form>
      </section>
      <footer className="footer"><span>{t.footer}</span><span>Contact: <a href="mailto:infolanzia@gmail.com">infolanzia@gmail.com</a></span></footer>
    </main>
  )
}
