"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function RaphaelPage() {
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
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fond_minecraft.jpg-iO6m8bqZWVonZyiLNjLQO0hHUcNVVa.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl w-full">
          {showMessage && (
            <div className="animate-fade-in-up">
              <div className="minecraft-message-box p-4 md:p-8 mb-6 md:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-4 md:mb-6 font-mono pixelated">
                  Bouges ton Cube
                </h1>
                <div className="text-sm sm:text-base md:text-xl lg:text-2xl text-black space-y-2 md:space-y-4 font-mono font-bold">
                  <p className="animate-typewriter">Salut Raphael !</p>
                  <p className="animate-typewriter" style={{ animationDelay: "1s" }}>
                    J'ai une quête épique pour toi...
                  </p>
                  <p
                    className="animate-typewriter text-red-600 text-base sm:text-lg md:text-2xl lg:text-3xl font-bold"
                    style={{ animationDelay: "2s" }}
                  >
                    Veux-tu être mon garçon d'honneur ?
                  </p>
                  <p className="animate-typewriter text-green-700" style={{ animationDelay: "3s" }}>
                    Tu es prêt à bouger ton cube ?
                  </p>
                </div>
              </div>
            </div>
          )}

          {showButtons && (
            <div
              className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                className="minecraft-menu-button minecraft-menu-button-green font-bold py-4 md:py-6 px-6 md:px-12 text-sm md:text-xl w-full sm:w-auto"
                onClick={() => alert("🎉 Merci Raphael! Tu vas être un garçon d'honneur de légende! 🎉")}
              >
                CUBER
              </Button>
              <Button
                className="minecraft-menu-button minecraft-menu-button-red font-bold py-4 md:py-6 px-6 md:px-12 text-sm md:text-xl w-full sm:w-auto"
                onClick={() => alert("J'appelle Aypierre")}
              >
                NE PAS CUBER
              </Button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .pixelated {
          image-rendering: pixelated;
          font-family: 'Courier New', monospace;
        }
        
        /* Added Minecraft-style message box styling */
        .minecraft-message-box {
          font-family: 'Courier New', monospace;
          image-rendering: pixelated;
          background: linear-gradient(to bottom, #ffffff 0%, #e0e0e0 50%, #c0c0c0 100%);
          border: 4px solid;
          border-top-color: #ffffff;
          border-left-color: #ffffff;
          border-right-color: #808080;
          border-bottom-color: #808080;
          text-shadow: 1px 1px 0px #ffffff;
          box-shadow: 
            inset 2px 2px 0px rgba(255,255,255,0.8),
            inset -2px -2px 0px rgba(0,0,0,0.3),
            0px 4px 8px rgba(0,0,0,0.5);
        }
        
        /* authentic Minecraft menu button styling */
        .minecraft-menu-button {
          font-family: 'Courier New', monospace;
          image-rendering: pixelated;
          background: linear-gradient(to bottom, #ffffff 0%, #e0e0e0 50%, #c0c0c0 100%);
          border: 4px solid;
          border-top-color: #ffffff;
          border-left-color: #ffffff;
          border-right-color: #808080;
          border-bottom-color: #808080;
          color: #000000;
          text-shadow: 1px 1px 0px #ffffff;
          box-shadow: 
            inset 2px 2px 0px rgba(255,255,255,0.8),
            inset -2px -2px 0px rgba(0,0,0,0.3),
            0px 4px 8px rgba(0,0,0,0.5);
          transition: all 0.1s ease;
          position: relative;
        }
        
        .minecraft-menu-button:hover {
          background: linear-gradient(to bottom, #f0f0f0 0%, #d0d0d0 50%, #b0b0b0 100%);
          transform: translateY(1px);
          box-shadow: 
            inset 2px 2px 0px rgba(255,255,255,0.8),
            inset -2px -2px 0px rgba(0,0,0,0.3),
            0px 2px 4px rgba(0,0,0,0.5);
        }
        
        .minecraft-menu-button:active {
          background: linear-gradient(to bottom, #c0c0c0 0%, #a0a0a0 50%, #808080 100%);
          border-top-color: #808080;
          border-left-color: #808080;
          border-right-color: #ffffff;
          border-bottom-color: #ffffff;
          box-shadow: 
            inset -2px -2px 0px rgba(255,255,255,0.8),
            inset 2px 2px 0px rgba(0,0,0,0.3);
          transform: translateY(2px);
        }
        
        .minecraft-menu-button-green:hover {
          background: linear-gradient(to bottom, #90EE90 0%, #7FDD7F 50%, #6FCC6F 100%);
        }
        
        .minecraft-menu-button-red:hover {
          background: linear-gradient(to bottom, #FFB6C1 0%, #FF9FAF 50%, #FF889D 100%);
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-typewriter {
          animation: typewriter 2s steps(40) forwards;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid;
          width: 0;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes typewriter {
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
