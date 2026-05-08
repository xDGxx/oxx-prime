import { useState, useEffect } from "react";
import bannerBg from "./assets/banner.png";
import whatsappIcon from "./assets/whatsapp.png";

import wellhubIcon from "./assets/wellhub.png";
import totalpassIcon from "./assets/totalpass.png";

import pixIcon from "./assets/pix.png";
import cartaoIcon from "./assets/cartao.png";
import dinheiroIcon from "./assets/dinheiro.png";
// ⚠️ TROQUE pelo número real do WhatsApp da academia (só números, com DDI+DDD)
const WHATSAPP_URL = `https://wa.me/5511921009989?text=${encodeURIComponent("Olá, gostaria de ter informações sobre a Oxx")}`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const nav = [
    { id: "sobre", label: "Sobre" },
    { id: "planos", label: "Planos" },
    { id: "aulas", label: "Aulas" },
    { id: "horarios", label: "Horários" },
    { id: "contato", label: "Contato" },
  ];

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      for (const s of ["contato", "horarios", "aulas", "planos", "sobre", "hero"]) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(s); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── ESTILOS INLINE GLOBAIS ─── */
  const S = {
    page: { background: "#000", color: "#fff", fontFamily: "'Barlow', sans-serif", overflowX: "hidden" },
    /* nav */
    nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, height: 64, background: "rgba(0,0,0,0.96)", borderBottom: "1px solid rgba(232,28,28,0.3)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px" },
    logo: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 26, letterSpacing: 3, cursor: "pointer" },
    navLinks: { display: "flex", gap: 2 },
    navBtn: (isActive) => ({ background: isActive ? "rgba(232,28,28,0.12)" : "none", border: "none", cursor: "pointer", color: isActive ? "#e81c1c" : "#ccc", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "8px 14px", borderRadius: 4 }),
    navCta: { display: "flex", alignItems: "center", gap: 6, background: "#e81c1c", color: "#fff", textDecoration: "none", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "10px 18px", borderRadius: 4 },
    burger: { display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 4 },
    mobileMenu: { position: "fixed", top: 64, left: 0, right: 0, zIndex: 999, background: "rgba(0,0,0,0.98)", padding: "16px 24px", borderBottom: "1px solid rgba(232,28,28,0.3)", display: "flex", flexDirection: "column" },
    mobileBtn: { background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "pointer", color: "#ccc", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "13px 0", textAlign: "left" },
    /* hero */
    hero: { minHeight: "100vh", paddingTop: 64, background: "linear-gradient(135deg,#000 0%,#0d0000 45%,#1a0000 70%,#0d0000 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" },
    heroGrid: { maxWidth: 1200, margin: "0 auto", padding: "80px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", width: "100%", position: "relative", zIndex: 2 },
    badge: { display: "inline-block", background: "#e81c1c", color: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", padding: "6px 14px", borderRadius: 2, marginBottom: 20 },
    heroTitle: { fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(56px,8vw,96px)", lineHeight: 0.92, letterSpacing: 2, marginBottom: 24 },
    heroSub: { fontSize: 16, color: "#bbb", lineHeight: 1.8, marginBottom: 36, maxWidth: 440 },
    heroBtns: {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
},
    btnRed: { display: "inline-flex", alignItems: "center", gap: 8, background: "#e81c1c", color: "#fff", textDecoration: "none", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "15px 30px", borderRadius: 4, border: "none", cursor: "pointer" },
    btnOutline: { background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "15px 30px", borderRadius: 4, cursor: "pointer" },
    stats: { display: "flex", gap: 36, marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)" },
    statN: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 42, color: "#e81c1c", lineHeight: 1 },
    statL: { fontSize: 11, color: "#666", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 4 },
    /* section commons */
    wrap: { maxWidth: 1200, margin: "0 auto", padding: "96px 28px" },
    label: { fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#e81c1c", marginBottom: 10 },
    title: { fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(38px,5vw,62px)", letterSpacing: 2, lineHeight: 1, marginBottom: 6 },
    divider: { width: 56, height: 3, background: "#e81c1c", margin: "18px 0 40px" },
    card: { background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "28px 24px" },
  };

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-thumb{background:#e81c1c;border-radius:2px;}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
        .float{animation:float 4s ease-in-out infinite;}
        .blink{animation:blink 1.5s infinite;}
        .btn-red:hover{background:#ff2222!important;box-shadow:0 0 28px rgba(232,28,28,.6)!important;transform:translateY(-2px);}
        .btn-outline:hover{border-color:#e81c1c!important;color:#e81c1c!important;}
        .plano-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(232,28,28,.15);}
        .plano-card{transition:all .3s;}
        .mod-card:hover{border-color:#e81c1c!important;background:rgba(232,28,28,.07)!important;transform:translateY(-4px);}
        .mod-card{transition:all .3s;}
        .sobre-c:hover{border-color:rgba(232,28,28,.5)!important;}
        .sobre-c{transition:border-color .3s;}
        .hcal:hover{border-color:rgba(232,28,28,.4)!important;}
        .hcal{transition:border-color .3s;}
        @media(max-width:768px){
          .desktop-only{display:none!important;}
          .burger{display:flex!important;}
          .hero-grid{grid-template-columns:1fr!important;text-align:center;}
          .robot-wrap{order:-1;}
          .hero-btns{justify-content:center!important;}
          .hero-stats{justify-content:center!important;}
          .sobre-grid{grid-template-columns:1fr!important;}
          .footer-grid{grid-template-columns:1fr!important;}
          .planos-grid{grid-template-columns:1fr!important;}
        }
      `}</style>

      {/* ══ NAVBAR ══ */}
      <nav style={S.nav}>
        <div style={S.logo} onClick={() => go("hero")}>
          OXX<span style={{ color: "#e81c1c" }}> PRIME</span>
        </div>
        <div className="desktop-only" style={S.navLinks}>
          {nav.map(n => (
            <button key={n.id} style={S.navBtn(active === n.id)} onClick={() => go(n.id)}>{n.label}</button>
          ))}
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="desktop-only btn-red" style={S.navCta}>
          <>
  <img
    src={whatsappIcon}
    alt="WhatsApp"
    style={{ width: 18, height: 18 }}
  />
  Matricule-se
</>
        </a>
        <button className="burger" style={S.burger} onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ display: "block", width: 24, height: 2, background: "#fff" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#fff" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#fff" }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={S.mobileMenu}>
          {nav.map(n => <button key={n.id} style={S.mobileBtn} onClick={() => go(n.id)}>{n.label}</button>)}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ ...S.mobileBtn, color: "#e81c1c", textDecoration: "none", display: "block" }}>📲 Matricule-se</a>
        </div>
      )}

      {/* ══ HERO ══ */}
<section id="hero" style={S.hero}>
  {/* banner de fundo */}
<div
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(
        to right,
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,0.92) 25%,
        rgba(0,0,0,0.65) 50%,
        rgba(0,0,0,0.35) 75%,
        rgba(0,0,0,0.15) 100%
      ),
      url(${bannerBg})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "brightness(.55) contrast(1.05)",
    pointerEvents: "none",
  }}
/>

  {/* overlay escuro */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
  "linear-gradient(90deg, rgba(0,0,0,.96) 0%, rgba(0,0,0,.82) 35%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.15) 100%)",
    }}
  />

  <div
    className="hero-grid"
    style={{
      ...S.heroGrid,
      gridTemplateColumns: "1fr",
      maxWidth: 900,
      textAlign: "center",
      justifyItems: "center",
    }}
  >
    <div>
      <h1 style={S.heroTitle}>
        DESPERTE SUA
        <br />
        <span style={{ color: "#e81c1c" }}>FORÇA BRUTA</span>
      </h1>

      <p
        style={{
          ...S.heroSub,
          maxWidth: 620,
          margin: "0 auto 36px",
        }}
      >
        A academia mais intensa do Parque Arariba. Musculação, Muay Thai,
        Jump, Funcional, Pilates e muito mais. Sem desculpas, só resultado.
      </p>

      <div className="hero-btns" style={S.heroBtns}>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-red"
          style={S.btnRed}
        >
          <>
  <img
    src={whatsappIcon}
    alt="WhatsApp"
    style={{ width: 18, height: 18 }}
  />
  Assinar agora
</>
        </a>

        <button
          className="btn-outline"
          style={S.btnOutline}
          onClick={() => go("planos")}
        >
          Ver planos →
        </button>
      </div>

      <div
        className="hero-stats"
        style={{
          ...S.stats,
          justifyContent: "center",
        }}
      >
        {[
          ["5+", "Modalidades"],
          ["DOMINGO a DOMINGO", "Consulte os horários"],
          ["R$29", "Diária"],
        ].map(([n, l]) => (
          <div key={l}>
            <div style={S.statN}>{n}</div>
            <div style={S.statL}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ══ SOBRE ══ */}
      <section id="sobre" style={{ background: "#0d0d0d" }}>
        <div style={S.wrap}>
          <div style={S.label}>Quem somos</div>
          <h2 style={S.title}>A ACADEMIA QUE<br/>VEIO PARA DOMINAR</h2>
          <div style={S.divider}/>

          <div className="sobre-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(232,28,28,.1)", border: "1px solid rgba(232,28,28,.3)", borderRadius: 6, padding: "11px 18px", marginBottom: 22 }}>
                <div className="blink" style={{ width: 8, height: 8, borderRadius: "50%", background: "#e81c1c" }}/>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#e81c1c" }}>Inaugurada em 25/04/2025 • Parque Arariba</span>
              </div>
              <p style={{ color: "#bbb", fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
                A <strong style={{ color: "#fff" }}>OXX Prime Academia</strong> nasceu para romper com o ordinário. Mais que uma academia, somos uma experiência de transformação onde cada treino é uma batalha vencida.
              </p>
              <p style={{ color: "#bbb", fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
                Musculação completa, diversas modalidades de aulas coletivas, cadeira de massagem exclusiva, avaliação física — tudo sem restrição de horário.
              </p>
              <p style={{ color: "#bbb", fontSize: 15, lineHeight: 1.85 }}>
                Aceitamos <strong style={{ color: "#e81c1c" }}>Wellhub</strong> e <strong style={{ color: "#e81c1c" }}>Totalpass</strong>. Venha fazer parte da nossa comunidade.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["💪","Musculação Completa","Equipamentos modernos para todos os grupos musculares."],
                ["🥊","Muay Thai","Ter e Qui às 19h com professores especializados."],
                ["🏃","Aulas Coletivas","Jump, Funcional, Pilates, Fit Dance, GAP e mais."],
                ["💆","Cadeira de Massagem","Recuperação muscular disponível para todos os alunos."],
              ].map(([icon,title,text]) => (
                <div key={title} className="sobre-c" style={{ background: "#111", border: "1px solid rgba(232,28,28,.12)", borderRadius: 8, padding: "20px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 5 }}>{title}</div>
                    <div style={{ color: "#888", fontSize: 13, lineHeight: 1.6 }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PLANOS ══ */}
      <section id="planos" style={{ background: "#000" }}>
        <div style={S.wrap}>
          <div style={S.label}>Investimento</div>
          <h2 style={S.title}>ESCOLHA SEU PLANO</h2>
          <div style={S.divider}/>

          <div className="planos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {[
              { name:"RED", type:"Trimestral", old:"R$ 109,90/mês", price:"79,90", period:"por mês", total:"Total R$ 299,70 • Cartão ou à vista", features:["Musculação","Aulas coletivas","Sem restrição de horário","Cadeira de massagem","Brindes exclusivos"], hot:false },
              { name:"OXX", type:"Anual Fidelidade", old:"R$ 99,90/mês", price:"39,90", period:"por mês", total:"À vista R$ 1.138,80 ou em até 12x", features:["Musculação","Aulas coletivas","Sem restrição de horário","Cadeira de massagem","Avaliação física","Pausa de 30 dias"], hot:true },
              { name:"PRIME", type:"Recorrente", old:"R$ 119,90/mês", price:"79,90", period:"por mês • cartão recorrente", total:"Débito automático mensal", features:["Musculação","Aulas coletivas","Sem restrição de horário","Cadeira de massagem"], hot:false },
              { name:"X", type:"Mensal", old:null, price:"139,90", period:"por mês", total:"Pix, débito, crédito ou dinheiro", features:["Musculação","Aulas coletivas","Sem restrição de horário","Cadeira de massagem"], hot:false },
            ].map(p => (
              <div key={p.name} className="plano-card" style={{ background: p.hot ? "linear-gradient(135deg,#1a0000,#111)" : "#111", border: `1px solid ${p.hot ? "#e81c1c" : "rgba(255,255,255,0.07)"}`, borderRadius: 10, padding: "28px 22px", position: "relative", overflow: "hidden" }}>
                {p.hot && <div style={{ position:"absolute", top:16, right:-28, background:"#e81c1c", color:"#fff", fontFamily:"'Barlow Condensed',sans-serif", fontSize:9, fontWeight:700, letterSpacing:2, padding:"4px 40px", transform:"rotate(45deg)" }}>POPULAR</div>}
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:32, color:"#e81c1c", letterSpacing:2 }}>{p.name}</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:600, letterSpacing:2, textTransform:"uppercase", color:"#555", marginBottom:16 }}>{p.type}</div>
                {p.old && <div style={{ fontSize:12, color:"#444", textDecoration:"line-through", marginBottom:3 }}>{p.old}</div>}
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:48, lineHeight:1, marginBottom:4 }}>
                  <span style={{ fontSize:18 }}>R$</span>{p.price}
                </div>
                <div style={{ fontSize:12, color:"#555", marginBottom:6 }}>{p.period}</div>
                <div style={{ fontSize:12, color:"#888", marginBottom:20, paddingBottom:20, borderBottom:"1px solid rgba(255,255,255,.06)" }}>{p.total}</div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:8, marginBottom:22 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display:"flex", gap:8, fontSize:13, color:"#aaa" }}>
                      <span style={{ color:"#e81c1c", fontWeight:700, flexShrink:0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={p.hot ? "btn-red" : ""} style={{ display:"block", textAlign:"center", textDecoration:"none", background: p.hot ? "#e81c1c" : "transparent", border: p.hot ? "none" : "2px solid rgba(232,28,28,.35)", color: p.hot ? "#fff" : "#e81c1c", fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700, letterSpacing:2, textTransform:"uppercase", padding:"12px", borderRadius:6 }}>
                  {p.hot ? "🔥 Quero esse plano" : "Quero esse plano"}
                </a>
              </div>
            ))}
          </div>

          {/* Diária */}
          <div style={{ marginTop:16, padding:"20px 26px", background:"#111", border:"1px solid rgba(255,255,255,.06)", borderRadius:8, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:14 }}>
            <div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:26, letterSpacing:2 }}>DIÁRIA</div>
              <div style={{ color:"#888", fontSize:13 }}>Treine qualquer modalidade do dia</div>
            </div>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:42, color:"#e81c1c" }}>R$ 29,90</div>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-red" style={{ ...S.btnRed, fontSize:13, padding:"12px 26px" }}>Treinar hoje</a>
          </div>

          {/* Wellhub */}
          <div style={{ marginTop:20, padding:"24px 28px", background:"linear-gradient(135deg,rgba(232,28,28,.07),transparent)", border:"1px solid rgba(232,28,28,.2)", borderRadius:10, display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
            <span style={{ fontSize:32 }}>🏆</span>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>Aceitamos Wellhub & Totalpass</div>
              <div style={{ color:"#888", fontSize:13, marginTop:4 }}>Já tem convênio? Venha treinar com seu benefício corporativo.</div>
            </div>
            {[
  { name: "Wellhub", icon: wellhubIcon },
  { name: "Totalpass", icon: totalpassIcon },
].map((t) => (
  <div
    key={t.name}
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "rgba(255,255,255,.04)",
      border: "1px solid rgba(255,255,255,.08)",
      padding: "10px 18px",
      borderRadius: 8,
    }}
  >
    <img
      src={t.icon}
      alt={t.name}
      style={{
        width: 26,
        height: 26,
        objectFit: "contain",
      }}
    />

    <span
      style={{
        color: "#fff",
        fontFamily: "'Barlow Condensed',sans-serif",
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: "uppercase",
      }}
    >
      {t.name}
    </span>
  </div>
))}
          </div>
        </div>
      </section>

      {/* ══ AULAS ══ */}
      <section id="aulas" style={{ background:"#0d0d0d" }}>
        <div style={S.wrap}>
          <div style={S.label}>Modalidades</div>
          <h2 style={S.title}>AULAS QUE<br/>TRANSFORMAM</h2>
          <div style={S.divider}/>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:12, marginBottom:52 }}>
            {[
              ["🥊","Muay Thai","Ter e Qui • 19h"],
              ["🤸","Jump","Seg/Qua/Sex 7h e Ter/Qui 18h"],
              ["⚡","Funcional","Seg/Qua/Sex • 18h"],
              ["🧘","Pilates","Ter e Qui • 20h"],
              ["💃","Fit Dance","Seg/Qua/Sex • 21h"],
              ["🏋️","GAP","Ter e Qui • 21h"],
              ["💪","Musculação","Todos os dias"],
              ["🆕","Em Breve","Novas aulas chegando!"],
            ].map(([icon,name,desc]) => (
              <div key={name} className="mod-card" style={{ background:"#111", border:"1px solid rgba(255,255,255,.06)", borderRadius:8, padding:"22px 14px", textAlign:"center", cursor:"pointer" }}>
                <div style={{ fontSize:32, marginBottom:10 }}>{icon}</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:16, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:5 }}>{name}</div>
                <div style={{ fontSize:11, color:"#555" }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Grade horária */}
          <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:18, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"#e81c1c", marginBottom:14 }}>Grade Semanal — Segunda a Sexta</div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr>
                  {["Horário","Segunda","Terça","Quarta","Quinta","Sexta"].map((h,i) => (
                    <th key={h} style={{ background: i===0 ? "#1a1a1a" : "#e81c1c", color:"#fff", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", padding:"12px 8px", textAlign:"center", whiteSpace:"nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { t:"06:00", cols:[{span:5, text:"⚡ EM BREVE MAIS AULAS", red:true}] },
                  { t:"07:00", cols:[{text:"JUMP"},{text:"—",e:true},{text:"JUMP"},{text:"—",e:true},{text:"JUMP"}] },
                  { t:"08:00", cols:[{text:"MUAY THAI"},{text:"—",e:true},{text:"—",e:true},{text:"—",e:true},{text:"—",e:true}] },
                  { t:"18:00", cols:[{text:"FUNCIONAL"},{text:"JUMP"},{text:"FUNCIONAL"},{text:"JUMP"},{text:"FUNCIONAL"}] },
                  { t:"19:00", cols:[{text:"—",e:true},{text:"MUAY THAI"},{text:"—",e:true},{text:"MUAY THAI"},{text:"—",e:true}] },
                  { t:"20:00", cols:[{text:"—",e:true},{text:"PILATES"},{text:"—",e:true},{text:"PILATES"},{text:"—",e:true}] },
                  { t:"21:00", cols:[{text:"FIT DANCE"},{text:"GAP"},{text:"FIT DANCE"},{text:"GAP"},{text:"FIT DANCE"}] },
                ].map((row,ri) => (
                  <tr key={row.t} style={{ background: ri%2===0 ? "transparent" : "rgba(255,255,255,.02)" }}>
                    <td style={{ border:"1px solid rgba(255,255,255,.05)", padding:"10px 8px", textAlign:"center", color:"#e81c1c", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:15, background:"rgba(255,255,255,.03)", whiteSpace:"nowrap" }}>{row.t}</td>
                    {row.cols.map((c,ci) => (
                      <td key={ci} colSpan={c.span||1} style={{ border:"1px solid rgba(255,255,255,.05)", padding:"10px 8px", textAlign:"center", color: c.red?"#e81c1c" : c.e?"#333":"#fff", fontWeight: c.e?400:600, fontFamily: c.red?"'Barlow Condensed',sans-serif":"inherit" }}>{c.text}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ HORÁRIOS ══ */}
      <section id="horarios" style={{ background:"#000" }}>
        <div style={S.wrap}>
          <div style={S.label}>Funcionamento</div>
          <h2 style={S.title}>HORÁRIOS &<br/>PAGAMENTOS</h2>
          <div style={S.divider}/>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:14, marginBottom:36 }}>
            {[
              ["Segunda a Sexta","06:00 – 22:00","Horário de pico 17h–20h"],
              ["Sábado","08:00 – 14:00","Musculação + aulas especiais"],
              ["Domingo","08:00 – 12:00","Consulte programação"],
              ["Feriados","Horário especial","Confira nosso Instagram"],
            ].map(([dia,time,obs]) => (
              <div key={dia} className="hcal" style={{ background:"#111", border:"1px solid rgba(255,255,255,.07)", borderRadius:8, padding:"22px 20px" }}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:20, color:"#e81c1c", letterSpacing:2, marginBottom:10 }}>{dia}</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:26, fontWeight:700, letterSpacing:1, marginBottom:6 }}>{time}</div>
                <div style={{ fontSize:12, color:"#555" }}>{obs}</div>
              </div>
            ))}
          </div>

          <div style={{ padding:"26px 28px", background:"#111", border:"1px solid rgba(255,255,255,.07)", borderRadius:10 }}>
            <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:17, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:16 }}>💳 Formas de Pagamento</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
              {[
  { name: "Pix", icon: pixIcon },
  { name: "Débito", icon: cartaoIcon },
  { name: "Crédito", icon: cartaoIcon },
  { name: "Dinheiro", icon: dinheiroIcon },
  { name: "Wellhub", icon: wellhubIcon },
  { name: "Totalpass", icon: totalpassIcon },
].map((m) => (
              <div
  key={m.name}
  style={{
    background: "rgba(255,255,255,.04)",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 8,
    padding: "12px 18px",
    display: "flex",
    alignItems: "center",
    gap: 12,
  }}
>
  <img
    src={m.icon}
    alt={m.name}
    style={{
      width: 24,
      height: 24,
      objectFit: "contain",
    }}
  />

  <span
    style={{
      fontFamily: "'Barlow Condensed',sans-serif",
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: "#fff",
    }}
  >
    {m.name}
  </span>
</div>
))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA / CONTATO ══ */}
      <section id="contato" style={{ background:"linear-gradient(135deg,#0d0000,#000,#0d0000)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle,rgba(232,28,28,.12) 0%,transparent 70%)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none" }}/>
        <div style={{ ...S.wrap, textAlign:"center", position:"relative", zIndex:2 }}>
          <div style={{ maxWidth:660, margin:"0 auto" }}>
            <div style={S.label}>Comece agora</div>
            <h2 style={{ ...S.title, fontSize:"clamp(48px,7vw,80px)", letterSpacing:3, lineHeight:.92, marginBottom:18 }}>
              PRONTO PARA<br/><span style={{ color:"#e81c1c" }}>EVOLUIR?</span>
            </h2>
            <p style={{ fontSize:16, color:"#aaa", lineHeight:1.8, marginBottom:40 }}>
              Fale com a gente pelo WhatsApp e garanta sua matrícula agora. Nossos consultores estão prontos para te ajudar a escolher o melhor plano.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-red"
              style={{ display:"inline-flex", alignItems:"center", gap:12, background:"#e81c1c", color:"#fff", textDecoration:"none", fontFamily:"'Barlow Condensed',sans-serif", fontSize:18, fontWeight:700, letterSpacing:"2.5px", textTransform:"uppercase", padding:"20px 48px", borderRadius:6 }}>
              <img
  src={whatsappIcon}
  alt="WhatsApp"
  style={{
    width: 24,
    height: 24,
    objectFit: "contain",
  }}
/> Falar no WhatsApp
            </a>
            <div style={{ display:"flex", justifyContent:"center", gap:48, flexWrap:"wrap", marginTop:40 }}>
              {[["📍","Parque Arariba"],["📸","@oxxprime"],["🏆","Wellhub & Totalpass"]].map(([icon,label]) => (
                <div key={label}>
                  <div style={{ fontSize:26, marginBottom:6 }}>{icon}</div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:600, letterSpacing:"1.5px", textTransform:"uppercase", color:"#444" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ LOCALIZAÇÃO ══ */}
<section
  id="localizacao"
  style={{
    background: "#0a0a0a",
    padding: "100px 28px",
    borderTop: "1px solid rgba(255,255,255,.05)",
  }}
>
  <div
    style={{
      maxWidth: 1400,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 40,
      alignItems: "center",
    }}
    className="map-grid"
  >
    {/* texto */}
    <div>
      <div
        style={{
          color: "#888",
          fontSize: 12,
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 18,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
        }}
      >
        Venha nos visitar
      </div>

      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(54px,7vw,90px)",
          lineHeight: 0.95,
          marginBottom: 24,
          letterSpacing: 2,
        }}
      >
        O SEU NOVO
        <br />
        <span style={{ color: "#fff" }}>
          LIMITE
        </span>
        <br />
        COMEÇA AQUI.
      </h2>

      <p
        style={{
          color: "#777",
          fontSize: 16,
          lineHeight: 1.9,
          maxWidth: 500,
          marginBottom: 36,
        }}
      >
        Estrutura premium, equipamentos modernos e um ambiente feito para quem leva evolução a sério. 
        Venha conhecer a OXX Prime e transforme sua rotina de treino.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          color: "#999",
        }}
      >
        <div>📍 Rua Dr. Abelardo da Cunha Lobo, 29</div>
        <div>🏙️ Parque Arariba • São Paulo/SP</div>
        <div>🕒 Segunda a Sexta • 06h às 22h</div>
      </div>
    </div>

    {/* mapa */}
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,.08)",
        minHeight: 500,
        boxShadow: "0 20px 80px rgba(0,0,0,.5)",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0037930500257!2d-46.75297640000001!3d-23.640035200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53e476cb851b%3A0xb151057e989fa00!2sR.%20Dr.%20Abelardo%20da%20Cunha%20Lobo%2C%2029%20-%20Parque%20Arariba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005778-150!5e0!3m2!1spt-BR!2sbr!4v1778264485884!5m2!1spt-BR!2sbr"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background:"#050505", borderTop:"1px solid rgba(232,28,28,.2)", padding:"48px 28px 30px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:40, marginBottom:36 }}>
            <div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:24, letterSpacing:3, marginBottom:10 }}>OXX<span style={{ color:"#e81c1c" }}> PRIME</span></div>
              <p style={{ color:"#444", fontSize:13, lineHeight:1.7 }}>Academia Premium no Parque Arariba. Inaugurada em 25/04/2025. Treine sem limites.</p>
            </div>
            <div>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"#444", marginBottom:14 }}>Navegação</div>
              {nav.map(n => <button key={n.id} onClick={() => go(n.id)} style={{ display:"block", background:"none", border:"none", cursor:"pointer", color:"#888", fontSize:14, padding:"4px 0", textAlign:"left" }}>{n.label}</button>)}
            </div>
            <div>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"#444", marginBottom:14 }}>Contato</div>
              {["📍 Parque Arariba, SP","📸 @oxxprime","📲 WhatsApp","🏆 Wellhub & Totalpass"].map(c => (
                <p key={c} style={{ color:"#888", fontSize:13, marginBottom:8 }}>{c}</p>
              ))}
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:22, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
            <div style={{ color:"#333", fontSize:12 }}>© 2025 OXX Prime Academia. Todos os direitos reservados.</div>
              
          </div>
        </div>
      </footer>
    </div>
  );
}