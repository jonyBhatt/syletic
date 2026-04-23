import React from 'react'

// The new Unsplash image provided by the user
const backgroundImageUrl =
  'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?q=80&w=1632&auto=format&fit=crop'

export const Footer = () => {
  return (
    <footer className="relative w-full h-175 lg:h-200 overflow-hidden bg-[#1A1C19]">
      {/* 1. Base Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Deep, atmospheric overlay matching the moody scene */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* 2. The "3D" Text Sitting on the Roof */}
      {/* Container is z-20 to sit *over* background overlay */}
      <div className="absolute top-[23%] sm:top-[20%] sm:rotate-1 md:top-[16%] lg:top-[12%] md:-rotate-1  inset-x-0 z-20 flex justify-center items-start pointer-events-none px-6">
        {/* Using perspective and rotateX to create the "laying down" 3D effect.
          Text shadow creates depth/casting on the roof surface.
          Text size is fluid based on viewport width (vw) for responsivity.
        */}
        <h1
          className="font-bold text-white tracking-tighter leading-none select-none text-center"
          style={{
            fontSize: 'clamp(3rem, 15vw, 160px)',
            transform: 'perspective(600px)  translateY(0%)',
            textShadow:
              '0 2px 0 #cccccc, 0 4px 0 #bbbbbb, 0 6px 0 #aaaaaa, 0 8px 0 #999999, 0 12px 15px rgba(0,0,0,0.5)',
            letterSpacing: '-0.06em',
          }}
        >
          SYLETIC
        </h1>
      </div>

      {/* 3. Floating Content Card (remains z-30) */}
      <div className="absolute bottom-10 left-[5%] right-[5%] lg:left-[7%] lg:right-[7%] z-30">
        {/* Re-using your defined .island-shell for the card style */}
        <div className=" bg-white rounded-[2.5rem] p-10 md:p-12 shadow-shadow-xl">
          {/* Top Row: Main Nav and Socials */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 gap-6 md:gap-0">
            {/* Left side: Navigation links using font-sans from your CSS */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3 font-sans text-sm">
              {[
                'About',
                'Buy',
                'Sell',
                'Blog',
                'Contact',
                'Areas We Serve',
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-foreground font-normal hover:text-muted-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right side: Social links (Manrope font from CSS) */}
            <div className="flex items-center gap-x-8 font-sans text-sm">
              {['Instagram', 'Linkedin', 'Facebook'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-foreground font-normal hover:text-muted-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Divider Line (uses your OKLCH border variable) */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Bottom Row: Copyright and Legal */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground font-sans gap-4 sm:gap-0">
            {/* Left side: Copyright */}
            <span>Copyright HOFIN © 2024</span>

            {/* Right side: Legal links (uses muted text color) */}
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms & Conditions'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
                  className="hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
