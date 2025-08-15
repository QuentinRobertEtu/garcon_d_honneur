"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function GregoirePage() {
  const [showMessage, setShowMessage] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 1000)
    const timer2 = setTimeout(() => setShowButtons(true), 3000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fond_roblox.jpg-2JTLZegd9Q5evluiS5gA15ZznW56s0.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Roblox-style background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white/20" />
            ))}
          </div>
        </div>

        {/* Floating Roblox blocks */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div
              className={`w-6 h-6 md:w-12 md:h-12 ${
                ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"][
                  Math.floor(Math.random() * 5)
                ]
              } border-4 border-white/50 rounded-lg shadow-lg`}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl w-full">
          {showMessage && (
            <div className="animate-bounce-in">
              <div className="bg-white/95 p-4 md:p-8 rounded-2xl border-8 border-blue-500 mb-6 md:mb-8 shadow-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-4 md:mb-6 roblox-font">
                  GRANNY
                </h1>
                <div className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-800 space-y-2 md:space-y-4 font-bold">
                  <p className="animate-pop-in">Salut Grégoire !</p>
                  <p className="animate-pop-in" style={{ animationDelay: "1s" }}>
                    J'ai une mission contre des Robux
                  </p>
                  <p
                    className="animate-pop-in text-blue-600 text-base sm:text-lg md:text-2xl lg:text-3xl"
                    style={{ animationDelay: "2s" }}
                  >
                    Veux-tu être mon garçon d'honneur ?
                  </p>
                  <p className="animate-pop-in text-green-600" style={{ animationDelay: "3s" }}>
                    Sinon Granny va te poursuivre
                  </p>
                </div>
              </div>
            </div>
          )}

          {showButtons && (
            <div
              className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 md:py-4 px-6 md:px-8 text-sm md:text-xl border-4 border-green-700 roblox-button w-full sm:w-auto"
                onClick={() => alert("1 million de ROBUX")}
              >
                ✅ ACCEPTER
              </Button>
              <Button
                variant="destructive"
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-3 md:py-4 px-6 md:px-8 text-sm md:text-xl border-4 border-red-700 roblox-button w-full sm:w-auto"
                onClick={() => alert("Tu seras le prisonnier, je serais le policier")}
              >
                ❌ REFUSER
              </Button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .roblox-font {
          font-family: 'Arial', sans-serif;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .roblox-button {
          border-radius: 12px;
          box-shadow: 0 6px 0 rgba(0,0,0,0.2);
          transition: all 0.1s;
        }
        .roblox-button:active {
          transform: translateY(3px);
          box-shadow: 0 3px 0 rgba(0,0,0,0.2);
        }
        .animate-bounce-in {
          animation: bounceIn 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-pop-in {
          animation: popIn 0.6s ease-out forwards;
          opacity: 0;
          transform: scale(0);
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(-100px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes popIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  )
}
