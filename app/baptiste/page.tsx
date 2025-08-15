"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function BaptistePage() {
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
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fond_rocket_league.jpg-2iZtQW7TgTrjSXsGY3S3Slm5ie2CBg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Rocket League arena background */}
      <div className="absolute inset-0">
        {/* Arena lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2" />
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/30 transform -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 w-16 h-16 md:w-32 md:h-32 border-4 border-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Floating boost particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-orange-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl w-full">
          {showMessage && (
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-r from-orange-600/90 to-blue-600/90 p-4 md:p-8 rounded-xl border-4 border-white/50 mb-6 md:mb-8 backdrop-blur-sm">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 rocket-league-font">
                  🚀 MATCH SPÉCIAL 🚀
                </h1>
                <div className="text-sm sm:text-base md:text-xl lg:text-2xl text-white space-y-2 md:space-y-4 font-bold">
                  <p className="animate-zoom-in">Yo Baptiste !</p>
                  <p className="animate-zoom-in" style={{ animationDelay: "1s" }}>
                    J'ai besoin d'un coéquipier de légende...
                  </p>
                  <p
                    className="animate-zoom-in text-orange-300 text-base sm:text-lg md:text-2xl lg:text-3xl"
                    style={{ animationDelay: "2s" }}
                  >
                    Veux-tu être mon garçon d'honneur ?
                  </p>
                  <p className="animate-zoom-in text-yellow-300" style={{ animationDelay: "3s" }}>
                    On va faire le plus beau des goals ! ⚽💍
                  </p>
                </div>
              </div>
            </div>
          )}

          {showButtons && (
            <div
              className="animate-slide-in-right flex flex-col sm:flex-row gap-4 justify-center items-center"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 md:py-4 px-6 md:px-8 text-sm md:text-xl border-4 border-orange-700 rocket-button transform hover:scale-110 transition-all duration-200 w-full sm:w-auto"
                onClick={() => alert("🎉 GOAL! Merci Baptiste! Tu vas être un garçon d'honneur de champion! 🏆")}
              >
                🏆 WHAT A SAVE!
              </Button>
              <Button
                variant="destructive"
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-3 md:py-4 px-6 md:px-8 text-sm md:text-xl border-4 border-red-700 rocket-button transform hover:scale-110 transition-all duration-200 w-full sm:w-auto"
                onClick={() => alert("😢 Oops! Mais on restera toujours une équipe de choc!")}
              >
                💥 DEMO
              </Button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .rocket-league-font {
          font-family: 'Arial Black', sans-serif;
          text-shadow: 3px 3px 0px rgba(0,0,0,0.5);
        }
        .rocket-button {
          box-shadow: 0 8px 0 rgba(0,0,0,0.3);
          transition: all 0.1s;
        }
        .rocket-button:active {
          transform: translateY(4px) scale(1.05);
          box-shadow: 0 4px 0 rgba(0,0,0,0.3);
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
