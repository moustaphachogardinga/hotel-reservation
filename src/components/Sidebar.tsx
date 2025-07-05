// src/components/Sidebar.tsx
import {
  LayoutDashboard,
  Calendar,
  Hotel,
  CreditCard,
  Cog,
  LogOut,
  Info,
} from "lucide-react"
import { useState } from "react"

const navItems = [
  { icon: LayoutDashboard, label: "Tableau de bord" },
  { icon: Calendar, label: "Réservations" },
  { icon: Hotel, label: "L'hôtels" },
  { icon: CreditCard, label: "Paiements" },
  { icon: Cog, label: "Paramètres" },
  { icon: LogOut, label: "Déconnexion" },
]

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      {/* Haut : Utilisateur + Menu */}
      <div>
        {/* Widget utilisateur */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src="src/assets/profil.png"
              alt="User avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">MOUSTAPHA CHOGAR DINGA </p>
              <p className="text-sm text-gray-500"></p>
            </div>
          </div>
        </div>

        {/* Menu de navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeIndex === index
              return (
                <li key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Bas : Widget info ou CTA */}
      <div className="bg-blue-50 p-4 m-4 rounded-md text-sm text-blue-700 flex items-start gap-2">
        <Info className="w-5 h-5 mt-1" />
        <div>
          <p className="font-medium">Besoin d’aide ?</p>
          <p>Notre équipe est disponible 24/7.</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
