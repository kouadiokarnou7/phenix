
 import Navbar from './composants/navbar.tsx';
  import Accueil from './composants/accueil.tsx';
 import Services from './composants/services.tsx';
 import Apropos from './composants/apropos.tsx';
import './index.css' // Assure-toi d'importer Tailwind ici

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <Navbar />


      {/* Hero (optionnel) */}
     
      <Accueil />
      {/* Services */}
      <Services />

      {/* À propos */}
    
      <Apropos />
      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
          <form className="flex flex-col gap-4 max-w-md mx-auto">
            <input type="text" placeholder="Votre nom" className="p-3 border rounded" />
            <input type="email" placeholder="Votre email" className="p-3 border rounded" />
            <textarea placeholder="Votre message" className="p-3 border rounded"></textarea>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Envoyer
            </button>
          </form>
          <p className="mt-4 text-gray-600">📞 +225 07 00 00 00 00 | ✉️ contact@phenix-mutuelle.ci</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        © {new Date().getFullYear()} Phénix-Mutuelle - Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;