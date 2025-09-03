import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' // Assure-toi d'importer Tailwind ici

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-8 p-4">
      
      {/* Logos */}
      <div className="flex gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>

      {/* Titre */}
      <h1 className="text-4xl font-bold text-blue-600">Vite + React + Tailwind</h1>

      {/* Compteur */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Count is {count}
        </button>
        <p className="text-gray-600">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer texte */}
      <p className="text-gray-700">
        Click on the Vite and React logos to learn more
      </p>

      {/* Test Tailwind */}
      <div className="flex items-center justify-center w-full">
        <p className="text-xl font-bold bg-blue-400 text-white p-4 rounded">
          Tailwind fonctionne !
        </p>
      </div>

    </div>
  )
}

export default App
