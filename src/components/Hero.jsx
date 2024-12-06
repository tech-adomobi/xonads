export function Hero() {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center relative">
        <div className="space-y-12 px-4">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-light">
            Global Advertising Platform
          </h2>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <div className="text-white">
                ADVERTISE <span className="text-[#CCFF00]">SMARTER</span>
              </div>
              <div className="text-white">
                EARN <span className="text-[#7FFFD4]">FASTER</span>
              </div>
            </h1>
          </div>
  
          <div className="flex items-center justify-center space-x-12">
            <a href="#" className="group flex items-center space-x-2 text-white text-xl hover:text-[#CCFF00]">
              <span>Advertise</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#" className="group flex items-center space-x-2 text-white text-xl hover:text-[#7FFFD4]">
              <span>Monetize</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
  
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
            <span className="text-lg mb-2">Scroll</span>
            <span className="text-[#CCFF00] text-2xl animate-bounce">↓</span>
          </div>
        </div>
      </div>
    )
  }
  
  