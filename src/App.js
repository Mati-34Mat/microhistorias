import { useState } from "react";
import generarHistoria from "./historia";

function App() {
  const [entrada, setEntrada] = useState("");
  const [historia, setHistoria] = useState("");

  const handleGenerar = () => {
    const nuevaHistoria = generarHistoria(entrada);
    setHistoria(nuevaHistoria);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,255,0.3),_transparent_70%)]"></div>
      </div>

      <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-2xl w-full max-w-md border border-cyan-400 relative z-10">
        <h1 className="text-3xl font-orbitron font-bold mb-6 text-cyan-300 text-center glow-text">
          Generador de Microhistorias
        </h1>
        <input
          type="text"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          placeholder="Ingresa un personaje (opcional)"
          className="w-full p-3 mb-4 bg-gray-900 text-cyan-200 border-2 border-cyan-500 rounded focus:outline-none focus:border-cyan-300 transition-all"
        />
        <button
          onClick={handleGenerar}
          className="w-full bg-cyan-600 text-white p-3 rounded hover:bg-cyan-500 hover:shadow-cyan-500/50 transition-all font-roboto-mono"
        >
          Generar Historia
        </button>
        {historia && (
          <p className="mt-6 text-lg text-gray-200 font-roboto-mono leading-relaxed">
            {historia}
          </p>
        )}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Roboto+Mono:wght@400;500&display=swap');
        
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        
        .font-roboto-mono {
          font-family: 'Roboto Mono', monospace;
        }
        
        .glow-text {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}

export default App;