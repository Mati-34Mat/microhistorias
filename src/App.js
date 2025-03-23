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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Generador de Microhistorias</h1>
        <input
          type="text"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          placeholder="Ingresa un personaje (opcional)"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleGenerar}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Generar Historia
        </button>
        {historia && (
          <p className="mt-4 text-lg text-gray-800">{historia}</p>
        )}
      </div>
    </div>
  );
}

export default App;