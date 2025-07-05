// src/components/Hero.tsx
import { ArrowRight, MapPin } from "lucide-react"

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texte à gauche */}
        <div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-4">
            <br />
            <span className="text-blue-600">BIENVENUE A  L’HOTEL LA VOTRE</span>
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Découvrez l'hospitalité tchadienne dans un cadre moderne et confortable à Moundou
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Réserver maintenant
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              Explorer
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Illustration à droite */}
        <div className="relative w-full h-64 md:h-full">
          <img
            src="src/assets/Capture d’écran du 2025-06-29 17-54-51.png"
            alt="Illustration hôtel"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
         
        </div>
      </div>
    </section>
  )
}

export default Hero
