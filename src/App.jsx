import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) =>
    date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatTime = (date) =>
    date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  const handleRequest = (e) => {
    e.preventDefault();
    alert("Solicitação de frete enviada com sucesso!");
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Data e hora em destaque */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "12px 20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          textAlign: "right",
          zIndex: 1000,
        }}
      >
        <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: "bold" }}>
          📅 {formatDate(currentTime)}
        </p>
        <p style={{ margin: 0, fontSize: "2rem", color: "#007BFF", fontWeight: "bold" }}>
          🕒 {formatTime(currentTime)}
        </p>
      </div>

      <header>
        <div className="container">
          <h1>Gabas Fretes</h1>
          <nav>
            <ul>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#fleet">Frota</a></li>
              <li><a href="#request">Solicitar Frete</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <h2>Transporte rápido e seguro</h2>
          <p>Levamos sua carga para onde for preciso, com pontualidade e confiança.</p>
          <a className="btn" href="#request">Solicitar agora</a>
        </section>

        <section id="services" className="section">
          <h2>Nossos Serviços</h2>
          <div className="services">
            <div className="service-card">
              <h3>Fretes Urbanos</h3>
              <p>Ideal para mudanças e entregas dentro da cidade.</p>
            </div>
            <div className="service-card">
              <h3>Fretes Intermunicipais</h3>
              <p>Transporte de cargas entre diferentes cidades com segurança.</p>
            </div>
            <div className="service-card">
              <h3>Fretes Empresariais</h3>
              <p>Atendemos empresas com logística eficiente e pontual.</p>
            </div>
          </div>
        </section>

        <section id="fleet" className="section">
          <h2>Nossa Frota</h2>
          <ul className="fleet-list">
            <li>Caminhão 3/4 com baú - Ideal para mudanças</li>
            <li>Van utilitária - Fretes rápidos e compactos</li>
            <li>Caminhonete - Entregas leves e ágeis</li>
          </ul>
        </section>

        <section id="request" className="section">
          <h2>Solicitar Frete</h2>
          <form onSubmit={handleRequest}>
            <div className="form-group">
              <label htmlFor="name">Nome completo</label>
              <input type="text" id="name" placeholder="Seu nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="cargo">Tipo de carga</label>
              <input type="text" id="cargo" placeholder="Ex: móveis, eletrodomésticos..." required />
            </div>
            <div className="form-group">
              <label htmlFor="origin">Origem</label>
              <input type="text" id="origin" placeholder="Local de retirada" required />
            </div>
            <div className="form-group">
              <label htmlFor="destination">Destino</label>
              <input type="text" id="destination" placeholder="Local de entrega" required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Data do frete</label>
              <input type="date" id="date" required />
            </div>
            <button type="submit" className="btn">Enviar Solicitação</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; GABAS DEVELOPER CEO SCODE, FULLSTACK</p>
      </footer>
    </div>
  );
};

export default App;
