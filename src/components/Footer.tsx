// src/components/Footer.tsx
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
        {/* Colonne 1 : Logo + description */}
        <div className="md:col-span-2">
          <div className="flex items-center text-white text-2xl font-bold mb-4">
            <span className="text-blue-500 mr-2">🏨</span>
            Hotel la votre
          </div>
          <p className="text-gray-400 text-sm">
            Réservez vos séjours en toute simplicité. Des milliers d’hôtels dans le monde entier à portée de clic.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Colonne : À propos */}
        <div>
          <h4 className="text-white font-semibold mb-4">À propos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Notre mission</a></li>
            <li><a href="#" className="hover:underline">Équipe</a></li>
            <li><a href="#" className="hover:underline">Presse</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Colonne : Liens rapides */}
        <div>
          <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Réserver</a></li>
            <li><a href="#" className="hover:underline">Destinations</a></li>
            <li><a href="#" className="hover:underline">Offres</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Colonne : Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              contact@hotellavotre.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              +235 60 44 90 40
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              TCHAD, MOUNDOU
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 Hotel la votre. Tous droits réservés. · <a href="#" className="hover:underline">Mentions légales</a>
      </div>
    </footer>
  )
}

export default Footer
