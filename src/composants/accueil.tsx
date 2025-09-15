import image from "../../public/logo3.png";

export default function Accueil () {
    return (
         <section id ="accueil" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50 text-center">
        <h2 className="text-4xl font-bold text-blue-700">Protégez votre avenir avec Phénix-Mutuelle</h2>
        <p className="mt-4 text-lg max-w-2xl">
          Une compagnie d’assurance moderne et fiable en Côte d’Ivoire, 
          spécialisée dans la santé, la vie, l’habitation et l’auto.
        </p>
         </section>
    )
}