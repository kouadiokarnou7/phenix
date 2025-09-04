import { useState, useEffect } from "react";
import logo from "../../public/logo2.png";

function Navbar() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [isOpen, setIsOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Fonction pour appliquer la classe active
  const linkClass = (id: string) =>
    activeSection === id
      ? "text-red-600 font-bold"
      : "text-gray-700 hover:text-red-500";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo + Nom */}
          <a href="#accueil" className="flex items-center gap-2">
            <img src={logo} alt="Phenix Mutuelle" className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-red-600">Phenix Mutuelle</h1>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#accueil" className={linkClass("accueil")}>Accueil</a>
            <a href="#services" className={linkClass("services")}>Services</a>
            <a href="#apropos" className={linkClass("apropos")}>À propos</a>
            <a href="#contact" className={linkClass("contact")}>Contact</a>
          </div>

          {/* Bouton Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-500 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-2 space-y-2">
          <a onClick={() => setIsOpen(false)} href="#accueil" className={linkClass("accueil")}>Accueil</a>
          <a onClick={() => setIsOpen(false)} href="#service" className={linkClass("service")}>Services</a>
          <a onClick={() => setIsOpen(false)} href="#apropos" className={linkClass("apropos")}>À propos</a>
          <a onClick={() => setIsOpen(false)} href="#contact" className={linkClass("contact")}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
