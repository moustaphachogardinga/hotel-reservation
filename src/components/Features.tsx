// src/components/Features.tsx
import {
  CheckCircle,
  Clock,
  ShieldCheck,
  CreditCard,
  MapPin,
  Headphones,
} from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Hôtels vérifiés",
    description: "Des établissements évalués pour garantir votre confort.",
  },
  {
    icon: Clock,
    title: "Réservation instantanée",
    description: "Confirmation immédiate sans attente.",
  },
  {
    icon: ShieldCheck,
    title: "Paiement sécurisé",
    description: "Protection complète de vos informations.",
  },
  {
    icon: CreditCard,
    title: "Annulation gratuite",
    description: "Modifiez ou annulez sans frais sur de nombreuses offres.",
  },
  {
    icon: MapPin,
    title: "Choix mondial",
    description: "Plus de 10 000 hôtels dans 50 pays.",
  },
  {
    icon: Headphones,
    title: "Assistance 24/7",
    description: "Service client disponible à toute heure.",
  },
]

const stats = [
  { label: "Hôtels", value: "10,000+" },
  { label: "Clients satisfaits", value: "120K" },
  { label: "Destinations", value: "50+" },
  { label: "Réservations", value: "1M+" },
]

const Features = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Pourquoi réserver avec nous ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les avantages de notre plateforme pour simplifier votre expérience de réservation.
          </p>
        </div>

        {/* Grid des fonctionnalités */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <feature.icon className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
