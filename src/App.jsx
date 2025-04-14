import React from "react";
import "./App.css";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Escola Futuro</h1>
          <nav aria-label="Navegação principal">
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#courses">Cursos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <h2>Bem-vindo à Escola Futuro</h2>
          <p>Prepare-se para transformar seu futuro com nossos cursos de qualidade.</p>
          <a className="btn" href="#contact">Inscreva-se agora</a>
        </section>

        <section id="about" className="section">
          <h2>Sobre nós</h2>
          <p>
            A Escola Futuro é referência em educação de qualidade, com cursos voltados para o desenvolvimento pessoal e profissional.
            Nosso objetivo é proporcionar conhecimento acessível e impactar positivamente a vida de nossos alunos.
          </p>
        </section>

        <section id="courses" className="section">
          <h2>Nossos Cursos</h2>
          <div className="courses">
            <div className="course-card">
              <h3>Curso de Tecnologia</h3>
              <p>Aprenda as habilidades mais demandadas do mercado de tecnologia.</p>
            </div>
            <div className="course-card">
              <h3>Curso de Idiomas</h3>
              <p>Domine um novo idioma com nossos professores especializados.</p>
            </div>
            <div className="course-card">
              <h3>Curso de Negócios</h3>
              <p>Desenvolva competências para empreender ou alavancar sua carreira.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contato</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Seu nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="Seu e-mail" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" rows="4" placeholder="Sua mensagem" required></textarea>
            </div>
            <button type="submit" className="btn">Enviar</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Escola Futuro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
