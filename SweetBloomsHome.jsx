import React, { useState, useEffect } from "react";
import { MessageCircle, Menu as MenuIcon, X, Clock, MapPin, Sparkles, Cake, Heart } from "lucide-react";

const WA_NUMBER = "94767691862";
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1604413191066-4dd20bedf486?w=1400&q=80&auto=format&fit=crop",
  about: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=900&q=80&auto=format&fit=crop",
  birthday: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80&auto=format&fit=crop",
  cupcake: "https://images.unsplash.com/photo-1677840147161-49e9c1508b0b?w=800&q=80&auto=format&fit=crop",
  custom: "https://images.unsplash.com/photo-1597520595747-23260411dc4e?w=800&q=80&auto=format&fit=crop",
  gallery1: "https://images.unsplash.com/photo-1569289522127-c0452f372d46?w=700&q=80&auto=format&fit=crop",
  gallery2: "https://images.unsplash.com/photo-1677840147140-252adb9ca347?w=700&q=80&auto=format&fit=crop",
  gallery3: "https://images.unsplash.com/photo-1644865439228-49106cb7b601?w=700&q=80&auto=format&fit=crop",
  gallery4: "https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=700&q=80&auto=format&fit=crop",
};

const cakes = [
  {
    key: "birthday",
    tag: "Celebrate",
    title: "Birthday cakes",
    desc: "Fun, colourful and full of personality — themed birthday cakes designed around the guest of honour.",
    img: IMAGES.birthday,
  },
  {
    key: "cupcake",
    tag: "Bite-sized",
    title: "Cupcakes",
    desc: "Soft, moist cupcakes topped with swirls of buttercream — perfect for parties, favours and gifting boxes.",
    img: IMAGES.cupcake,
  },
  {
    key: "custom",
    tag: "Made for you",
    title: "Custom cakes",
    desc: "Weddings, anniversaries, themed celebrations — tell us your vision and we'll design a cake around it.",
    img: IMAGES.custom,
  },
];

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 003.6 17.3L2 22l4.8-1.6a11 11 0 0013.7-16.9zM12 20a8.4 8.4 0 01-4.3-1.2l-.3-.2-3.2 1 1-3.1-.2-.3A8.4 8.4 0 1120 12a8.4 8.4 0 01-8 8zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.1-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5L8.9 7.3c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 .9-1 2.3s1 2.7 1.1 2.9c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

export default function SweetBloomsHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cream = "#FFF8F1";
  const creamDeep = "#FBEFE2";
  const blush = "#F7CBDD";
  const blushSoft = "#FBE1EB";
  const rose = "#E88AA6";
  const roseDeep = "#C6577A";
  const choc = "#4A3733";
  const chocSoft = "#7A625C";

  const fraunces = "'Fraunces', serif";
  const quicksand = "'Quicksand', sans-serif";
  const caveat = "'Caveat', cursive";

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Visit" },
  ];

  const btnPrimary = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: roseDeep,
    color: "#fff",
    padding: "12px 22px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: "0.95rem",
    fontFamily: quicksand,
    boxShadow: "0 10px 26px rgba(198,87,122,0.25)",
    border: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
  };

  const btnOutline = {
    ...btnPrimary,
    background: "transparent",
    color: roseDeep,
    border: `2px solid ${roseDeep}`,
    boxShadow: "none",
  };

  return (
    <div style={{ fontFamily: quicksand, background: cream, color: choc, lineHeight: 1.6 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500;1,9..144,600&family=Quicksand:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .sb-navlink { position:relative; padding:4px 0; color:${choc}; text-decoration:none; font-weight:600; font-size:0.95rem; }
        .sb-navlink:after { content:""; position:absolute; left:0; bottom:-2px; width:0%; height:2px; background:${roseDeep}; transition:width .25s ease; }
        .sb-navlink:hover:after { width:100%; }
        .sb-card { transition: transform .25s ease, box-shadow .25s ease; }
        .sb-card:hover { transform: translateY(-6px); box-shadow: 0 16px 34px rgba(74,55,51,0.16); }
        .sb-btn:hover { transform: translateY(-2px); }
        @keyframes sbFloat { 0%,100%{ transform:translateY(0) rotate(0deg);} 50%{ transform:translateY(-12px) rotate(15deg);} }
        @media (max-width: 900px){
          .sb-hero-grid{ grid-template-columns:1fr !important; }
          .sb-menu-grid{ grid-template-columns:1fr 1fr !important; }
          .sb-gallery-grid{ grid-template-columns:1fr 1fr !important; }
          .sb-about-grid{ grid-template-columns:1fr !important; }
          .sb-nav-links{ display:none !important; }
          .sb-nav-links.open{ display:flex !important; }
          .sb-mobile-toggle{ display:flex !important; }
        }
        @media (max-width: 560px){
          .sb-menu-grid{ grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(255,248,241,0.94)" : "rgba(255,248,241,0.75)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(198,87,122,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: blush,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Cake size={18} color={roseDeep} />
            </span>
            <span style={{ fontFamily: fraunces, fontStyle: "italic", fontWeight: 600, fontSize: "1.4rem", color: choc }}>
              Sweet Blooms <span style={{ fontFamily: caveat, color: roseDeep, fontStyle: "normal" }}>by Abi</span>
            </span>
          </a>

          <nav className="sb-nav-links" style={{ display: "flex", gap: 30 }}>
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="sb-navlink">
                {n.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a
              href={waLink("Hi Sweet Blooms by Abi, I'd love to order a cake!")}
              target="_blank"
              rel="noopener noreferrer"
              className="sb-btn"
              style={btnPrimary}
            >
              <WhatsAppIcon />
              <span className="sb-order-label">Order on WhatsApp</span>
            </a>
            <button
              className="sb-mobile-toggle"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                color: choc,
              }}
            >
              {menuOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>

          {menuOpen && (
            <div
              className="sb-nav-links open"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: cream,
                flexDirection: "column",
                padding: "18px 24px",
                gap: 16,
                borderBottom: "1px solid rgba(198,87,122,0.12)",
              }}
            >
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="sb-navlink" onClick={() => setMenuOpen(false)}>
                  {n.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section
          className="sb-hero-grid"
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "56px 24px 20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 44,
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ fontFamily: caveat, color: roseDeep, fontSize: "1.35rem", fontWeight: 700 }}>
              ✿ home-baked with love in Sri Lanka
            </span>
            <h1
              style={{
                fontFamily: fraunces,
                fontStyle: "italic",
                fontSize: "clamp(2.2rem, 4.6vw, 3.4rem)",
                lineHeight: 1.1,
                margin: "10px 0 18px",
                color: choc,
              }}
            >
              Cakes that bloom into{" "}
              <span
                style={{
                  fontStyle: "normal",
                  color: roseDeep,
                  textDecoration: "underline",
                  textDecorationColor: blush,
                  textDecorationThickness: 8,
                }}
              >
                your
              </span>{" "}
              sweetest moments
            </h1>
            <p style={{ color: chocSoft, fontSize: "1.06rem", maxWidth: 460, marginBottom: 26 }}>
              Sweet Blooms by Abi offers custom cakes for all occasions, from birthdays to weddings. Every cake is
              crafted with care using high-quality ingredients — beautifully designed and made to taste just as good
              as it looks.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 30 }}>
              <a
                href={waLink("Hi Sweet Blooms by Abi, I'd love to order a cake!")}
                target="_blank"
                rel="noopener noreferrer"
                className="sb-btn"
                style={btnPrimary}
              >
                <WhatsAppIcon />
                Order via WhatsApp
              </a>
              <a href="#menu" className="sb-btn" style={btnOutline}>
                See the menu
              </a>
            </div>
            <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
              <div>
                <strong style={{ display: "block", fontFamily: fraunces, fontSize: "1.1rem", color: choc }}>
                  Custom
                </strong>
                <span style={{ fontSize: "0.9rem", color: chocSoft }}>Made to order</span>
              </div>
              <div>
                <strong style={{ display: "block", fontFamily: fraunces, fontSize: "1.1rem", color: choc }}>
                  9AM – 9PM
                </strong>
                <span style={{ fontSize: "0.9rem", color: chocSoft }}>Open every day</span>
              </div>
              <div>
                <strong style={{ display: "block", fontFamily: fraunces, fontSize: "1.1rem", color: choc }}>
                  Sri Lanka
                </strong>
                <span style={{ fontSize: "0.9rem", color: chocSoft }}>Local delivery</span>
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -18,
                background: blushSoft,
                borderRadius: 28,
                transform: "rotate(-3deg)",
                zIndex: 0,
              }}
            />
            <img
              src={IMAGES.hero}
              alt="Pink and white floral celebration cake"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: 420,
                objectFit: "cover",
                borderRadius: 24,
                boxShadow: "0 20px 46px rgba(198,87,122,0.28)",
              }}
            />
            <div
              style={{
                position: "absolute",
                zIndex: 2,
                bottom: -18,
                left: -18,
                background: "#fff",
                borderRadius: 18,
                padding: "12px 18px",
                boxShadow: "0 12px 28px rgba(74,55,51,0.16)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Heart size={18} color={roseDeep} fill={blush} />
              <span style={{ fontFamily: caveat, fontSize: "1.15rem", color: roseDeep, fontWeight: 700 }}>
                made fresh, just for you
              </span>
            </div>
          </div>
        </section>

        {/* icing drip divider */}
        <div style={{ lineHeight: 0, marginTop: 26 }}>
          <svg viewBox="0 0 1200 50" preserveAspectRatio="none" style={{ width: "100%", height: 42, display: "block" }}>
            <path
              d="M0 0h1200v14c-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0-18 20-36 20-54 0v-14z"
              fill={creamDeep}
            />
          </svg>
        </div>

        {/* ABOUT */}
        <section id="about" style={{ background: creamDeep, padding: "60px 0" }}>
          <div
            className="sb-about-grid"
            style={{
              maxWidth: 1160,
              margin: "0 auto",
              padding: "0 24px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 44,
              alignItems: "center",
            }}
          >
            <img
              src={IMAGES.about}
              alt="Fondant cake on a display stand"
              style={{
                width: "100%",
                height: 360,
                objectFit: "cover",
                borderRadius: 22,
                boxShadow: "0 16px 34px rgba(74,55,51,0.14)",
              }}
            />
            <div>
              <span style={{ fontFamily: caveat, color: roseDeep, fontSize: "1.2rem", fontWeight: 700 }}>
                our story
              </span>
              <h2 style={{ fontFamily: fraunces, fontStyle: "italic", fontSize: "2rem", margin: "8px 0 16px", color: choc }}>
                Every cake, made with heart
              </h2>
              <p style={{ color: chocSoft, marginBottom: 14 }}>
                Sweet Blooms by Abi offers custom cakes for all occasions, from birthdays to weddings. We specialise
                in creating delicious, beautifully designed cakes that make every celebration special.
              </p>
              <p style={{ color: chocSoft }}>
                Each cake is crafted with care using high-quality ingredients, ensuring both taste and aesthetics.
                Whether you're looking for a classic design or something unique, we work with you to bring your
                vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section id="menu" style={{ maxWidth: 1160, margin: "0 auto", padding: "70px 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 44px" }}>
            <span style={{ fontFamily: caveat, color: roseDeep, fontSize: "1.2rem", fontWeight: 700 }}>
              what we bake
            </span>
            <h2 style={{ fontFamily: fraunces, fontStyle: "italic", fontSize: "2.1rem", margin: "8px 0 12px", color: choc }}>
              Our menu
            </h2>
            <p style={{ color: chocSoft }}>
              Message us on WhatsApp with your occasion, size and flavour — we'll quote you a price and get baking.
            </p>
          </div>

          <div className="sb-menu-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 26 }}>
            {cakes.map((c) => (
              <div
                key={c.key}
                className="sb-card"
                style={{
                  background: "#fff",
                  borderRadius: 22,
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(74,55,51,0.09)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", height: 190 }}>
                  <img src={c.img} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      background: "#fff",
                      color: roseDeep,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "5px 12px",
                      borderRadius: 20,
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.tag}
                  </span>
                </div>
                <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <h3 style={{ fontFamily: fraunces, fontStyle: "italic", fontSize: "1.25rem", color: choc }}>
                    {c.title}
                  </h3>
                  <p style={{ color: chocSoft, fontSize: "0.93rem", flex: 1 }}>{c.desc}</p>
                  <span style={{ fontFamily: caveat, color: roseDeep, fontSize: "1.1rem", fontWeight: 700 }}>
                    Message us for pricing
                  </span>
                  <a
                    href={waLink(`Hi, I'd like to order ${c.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sb-btn"
                    style={{ ...btnPrimary, justifyContent: "center", width: "100%" }}
                  >
                    <WhatsAppIcon size={16} />
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" style={{ background: creamDeep, padding: "70px 0" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 36px" }}>
              <span style={{ fontFamily: caveat, color: roseDeep, fontSize: "1.2rem", fontWeight: 700 }}>
                sneak peek
              </span>
              <h2 style={{ fontFamily: fraunces, fontStyle: "italic", fontSize: "2.1rem", margin: "8px 0 12px", color: choc }}>
                From our kitchen
              </h2>
              <p style={{ color: chocSoft }}>A few of the styles we love baking — your own cake photos can go here.</p>
            </div>
            <div className="sb-gallery-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 18 }}>
              {[IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Sweet Blooms by Abi cake"
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: 18,
                    boxShadow: "0 6px 18px rgba(74,55,51,0.1)",
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ maxWidth: 1160, margin: "0 auto", padding: "70px 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 40px" }}>
            <span style={{ fontFamily: caveat, color: roseDeep, fontSize: "1.2rem", fontWeight: 700 }}>
              get in touch
            </span>
            <h2 style={{ fontFamily: fraunces, fontStyle: "italic", fontSize: "2.1rem", margin: "8px 0", color: choc }}>
              Visit and hours
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }} className="sb-about-grid">
            <div
              style={{
                background: "#fff",
                borderRadius: 22,
                padding: 32,
                boxShadow: "0 6px 20px rgba(74,55,51,0.09)",
              }}
            >
              <h3 style={{ fontFamily: fraunces, fontStyle: "italic", fontSize: "1.3rem", marginBottom: 16, color: choc }}>
                Find us
              </h3>
              {[
                { icon: <Clock size={18} color={roseDeep} />, title: "Opening hours", sub: "9.00 AM – 9.00 PM, every day" },
                { icon: <WhatsAppIcon size={16} />, title: "WhatsApp", sub: "+94 76 769 1862" },
                { icon: <MapPin size={18} color={roseDeep} />, title: "Based in", sub: "Sri Lanka — local delivery available" },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 0",
                    borderBottom: i < 2 ? `1px solid ${creamDeep}` : "none",
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: blushSoft,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: roseDeep,
                    }}
                  >
                    {row.icon}
                  </span>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.95rem", color: choc }}>{row.title}</strong>
                    <span style={{ fontSize: "0.86rem", color: chocSoft }}>{row.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: `linear-gradient(160deg, ${rose}, ${roseDeep})`,
                borderRadius: 22,
                padding: 32,
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <h3 style={{ fontFamily: fraunces, fontStyle: "italic", fontSize: "1.3rem" }}>Ready to order?</h3>
              <p style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.92)" }}>
                Send us your occasion, size and flavour on WhatsApp and we'll get back to you with a price and
                timeline.
              </p>
              <a
                href={waLink("Hi Sweet Blooms by Abi, I'd love to order a cake!")}
                target="_blank"
                rel="noopener noreferrer"
                className="sb-btn"
                style={{ ...btnPrimary, background: "#fff", color: roseDeep, boxShadow: "none", width: "fit-content" }}
              >
                <WhatsAppIcon />
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ background: choc, color: cream, padding: "40px 0 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 18,
              paddingBottom: 22,
              borderBottom: "1px solid rgba(255,248,241,0.15)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: blush,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Cake size={18} color={choc} />
              </span>
              <span style={{ fontFamily: fraunces, fontStyle: "italic", fontSize: "1.3rem" }}>Sweet Blooms by Abi</span>
            </div>
            <span style={{ fontFamily: caveat, fontSize: "1.15rem", color: blush }}>
              Cakes that bloom into your sweetest moments ✿
            </span>
          </div>
          <div
            style={{
              paddingTop: 18,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 10,
              fontSize: "0.82rem",
              color: "rgba(255,248,241,0.6)",
            }}
          >
            <span>© 2026 Sweet Blooms by Abi. All rights reserved.</span>
            <span>Made with love in Sri Lanka</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={waLink("Hi Sweet Blooms by Abi, I'd love to order a cake!")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        style={{
          position: "fixed",
          bottom: 22,
          right: 22,
          background: "#25D366",
          width: 56,
          height: 56,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 24px rgba(37,211,102,0.4)",
          zIndex: 60,
        }}
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
