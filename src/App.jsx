import React from "react";
import "./App.css";

const App = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    alert("Reserva enviada com sucesso!");
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Gabas Viagens</h1>
          <nav>
            <ul>
              <li><a href="#destinations">Destinos</a></li>
              <li><a href="#packages">Pacotes</a></li>
              <li><a href="#book">Reserve</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <h2>Descubra o mundo com a gente</h2>
          <p>Pacotes exclusivos para as férias que você merece!</p>
          <a className="btn" href="#book">Reserve agora</a>
        </section>

        <section id="destinations" className="section">
          <h2>Destinos Populares</h2>
          <div className="destinations">
            <div className="destination-card">
              <h3>Paris</h3>
              <p>A cidade do amor espera por você.</p>
            </div>
            <div className="destination-card">
              <h3>Maldivas</h3>
              <p>Praias paradisíacas e águas cristalinas.</p>
            </div>
            <div className="destination-card">
              <h3>Nova York</h3>
              <p>A cidade que nunca dorme cheia de aventuras.</p>
            </div>
          </div>
        </section>

        <section id="packages" className="section">
          <h2>Nossos Pacotes</h2>
          <ul className="package-list">
            <li>Pacote Romântico - 7 dias em Paris</li>
            <li>Pacote Família - 5 dias em Orlando</li>
            <li>Pacote Aventura - 10 dias no Peru</li>
          </ul>
        </section>

        <section id="book" className="section">
          <h2>Faça sua Reserva</h2>
          <form onSubmit={handleBooking}>
            <div className="form-group">
              <label htmlFor="fullname">Nome completo</label>
              <input type="text" id="fullname" placeholder="Seu nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="destination">Destino</label>
              <input type="text" id="destination" placeholder="Destino desejado" required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Data da viagem</label>
              <input type="date" id="date" required />
            </div>
            <button type="submit" className="btn">Reservar</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Viagem dos Sonhos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
