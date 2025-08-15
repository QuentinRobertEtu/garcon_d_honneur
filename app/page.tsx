import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse">🎮 Demandes Spéciales 🎮</h1>
        <p className="text-xl text-gray-200 mb-12">Choisis ton aventure pour découvrir ta mission...</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          <Link href="/raphael" className="group">
            <div className="bg-green-600 hover:bg-green-500 transition-all duration-300 p-8 rounded-lg transform group-hover:scale-105 shadow-lg">
              <div className="text-4xl mb-4">⛏️</div>
              <h2 className="text-2xl font-bold text-white">Raphael</h2>
              <p className="text-green-100">Style Minecraft</p>
            </div>
          </Link>
          <Link href="/baptiste" className="group">
            <div className="bg-orange-600 hover:bg-orange-500 transition-all duration-300 p-8 rounded-lg transform group-hover:scale-105 shadow-lg">
              <div className="text-4xl mb-4">🚗</div>
              <h2 className="text-2xl font-bold text-white">Baptiste</h2>
              <p className="text-orange-100">Style Rocket League</p>
            </div>
          </Link>
          <Link href="/gregoire" className="group">
            <div className="bg-blue-600 hover:bg-blue-500 transition-all duration-300 p-8 rounded-lg transform group-hover:scale-105 shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-white">Grégoire</h2>
              <p className="text-blue-100">Style Roblox</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
