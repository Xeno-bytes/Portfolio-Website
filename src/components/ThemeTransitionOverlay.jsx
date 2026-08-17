import React, { useState, useEffect } from 'react'

export default function ThemeTransitionOverlay({ 
  isTransitioning, 
  currentTheme, 
  targetTheme, 
  onMiddle, 
  onComplete 
}) {
  const [isSliding, setIsSliding] = useState(false)

  useEffect(() => {
    if (!isTransitioning) {
      setIsSliding(false)
      return
    }

    // Trigger both knob movement and background theme switch simultaneously
    const slideTimer = setTimeout(() => {
      setIsSliding(true)
      onMiddle() 
    }, 50)

    // Complete overlay sequence after the 500ms animation finishes
    const endTimer = setTimeout(() => {
      onComplete()
    }, 700)

    return () => {
      clearTimeout(slideTimer)
      clearTimeout(endTimer)
    }
  }, [isTransitioning])

  if (!isTransitioning) return null

  const activeTheme = isSliding ? targetTheme : currentTheme
  const isRightSide = activeTheme === 'dark'

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-none">
      {/* Track Container */}
      <div className="relative flex items-center w-48 h-24 p-2 rounded-full bg-surface-a10 border border-surface-a30 shadow-2xl overflow-hidden transition-colors duration-500">
        
        {/* Sliding Knob */}
        <div 
          className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-surface-a30 shadow-md transition-transform duration-500 ease-in-out ${
            isRightSide ? 'translate-x-24' : 'translate-x-0'
          }`}
        >
          {/* Animated SVG Icon */}
          <svg className="w-12 h-12 text-text-primary transition-transform duration-500" viewBox="0 0 24 24">
            <defs>
              <mask id="moon-cutout">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <circle 
                  cx={isRightSide ? "15" : "26"} 
                  cy={isRightSide ? "9" : "-2"} 
                  r="7" 
                  fill="black" 
                  className="transition-all duration-500 ease-out"
                />
              </mask>
            </defs>

            {/* Sun Rays */}
            <g 
              className={`transition-all duration-500 origin-center ${
                isRightSide ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'
              }`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>

            {/* Center Circle */}
            <circle 
              cx="12" 
              cy="12" 
              r="6" 
              fill="currentColor" 
              mask="url(#moon-cutout)"
              className="transition-all duration-500"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}