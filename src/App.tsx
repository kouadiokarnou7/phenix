
 import Navbar from './composants/navbar.tsx';
import './index.css' // Assure-toi d'importer Tailwind ici

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <Navbar />


      {/* Hero (optionnel) */}
      <section id ="#accueil" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50 text-center">
        <h2 className="text-4xl font-bold text-blue-700">Protégez votre avenir avec Phénix-Mutuelle</h2>
        <p className="mt-4 text-lg max-w-2xl">
          Une compagnie d’assurance moderne et fiable en Côte d’Ivoire, 
          spécialisée dans la santé, la vie, l’habitation et l’auto.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">🏥 Santé</h3>
              <p>Assurez la santé de votre famille avec des solutions adaptées.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">❤️ Vie</h3>
              <p>Protégez vos proches et sécurisez leur avenir.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">🏡 Habitation</h3>
              <p>Protégez votre maison et vos biens contre les imprévus.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">🚗 Auto</h3>
              <p>Une couverture complète pour votre véhicule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">À propos</h2>
          <p className="text-lg leading-relaxed">
            Issue d’une prestigieuse école de TIC en Côte d’Ivoire 🇨🇮, 
            Phénix-Mutuelle incarne la modernité, la confiance et la proximité.  
            Nous nous engageons à offrir des solutions innovantes qui 
            s’adaptent aux besoins de chaque client.  
          </p>
        </div>
      </section>

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