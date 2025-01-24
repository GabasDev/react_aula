import { useState } from "react";
import "./App.css";

function App() {
  const [buttonText, setButtonText] = useState("Clique no botão 🎵");
  const [clicked, setClicked] = useState(false);

  const playSound = () => {
    const audio = new Audio("/sounds/chaves.mp3");
    audio.play();

    // Animação e mudança de estado
    setClicked(true);
    setButtonText("Pi pi pi pi... 🎶");

    // Reseta o estado após 3 segundos
    setTimeout(() => {
      setButtonText("Clique no Vídeo 🎥");
      setClicked(false);
    }, 3000);
  };

  return (
    <div className="h-screen bg-gradient-to-b from-green-200 to-green-400 flex flex-col items-center justify-center">
      {/* Card principal */}
      <div className="bg-white rounded-xl shadow-xl p-8 w-96 flex flex-col items-center">
        {/* Imagem do Chaves */}
        <img
          src="/images/chaves.png"
          alt="Chaves"
          className="w-32 h-32 rounded-full shadow-md mb-6"
        />

        {/* Título */}
        <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
          Lá vem o Chaves! 🎩
        </h1>

        {/* Botão interativo */}
        <button
          onClick={playSound}
          className={`${
            clicked ? "bg-red-500 animate-bounce" : "bg-yellow-500"
          } text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition transform ${
            clicked ? "scale-110" : "hover:scale-105"
          }`}
        >
          {buttonText}
        </button>

        {/* Mensagem após clicar */}
        {clicked && (
          <p className="mt-4 text-green-700 font-medium text-center">
            🎤 *"Que coisa, não?!"* - Chaves
          </p>
        )}
      </div>

      {/* Vídeo do YouTube */}
      <div className="mt-8">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fInO9yC0xHY?si=xtmb7QIBAJXexCaG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default App;
