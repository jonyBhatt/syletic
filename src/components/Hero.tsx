import { useState } from 'react'
import { MobileMenu } from './MobileMenu'

const properties = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1470&auto=format&fit=crop',
    alt: 'Concrete brutalist villa at dusk',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop',
    alt: 'Modern glass house with pool',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
    alt: 'Luxury interior architectural lighting',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    alt: 'Contemporary estate exterior',
  },
]

export const Hero = () => {
  const [activeImage, setActiveImage] = useState(properties[0])

  return (
    <section className="relative flex flex-col lg:flex-row min-h-screen bg-pure-white overflow-hidden">
      {/* BACKGROUND/LEFT IMAGE SECTION */}
      {/* On md: takes full screen absolute positioning. On lg: returns to half-width relative. */}
      <div className="absolute inset-0 z-0 md:block lg:relative lg:w-1/2 lg:h-screen p-4 lg:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-4xl island-shell">
          {/* Logo Overlay - Hidden on tablet/mobile if redundant with nav, or kept for branding */}
          <div className="absolute top-8 left-0 right-0 z-20 flex items-center gap-2 text-white drop-shadow-md justify-center ">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight">Syletic</span>
          </div>

          <img
            key={activeImage.id}
            src={activeImage.url}
            alt={activeImage.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />

          {/* Darker overlay on tablet for text legibility */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/40 lg:bg-linear-to-t lg:from-black/20 lg:to-transparent pointer-events-none" />
        </div>
      </div>

      {/* RIGHT/OVERLAY CONTENT SECTION */}
      {/* On md: centers content over the image. On lg: settles into the right column. */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col px-6 md:px-12 lg:px-16 py-8 lg:py-12 min-h-screen md:text-onyxjustify-center md:items-center lg:items-start">
        {/* Navigation - Fixed or Relative at top */}
        <nav className="absolute top-8 left-0 right-0 px-8  items-center justify-between lg:relative lg:top-0 lg:px-0 mb-0 lg:mb-24  w-full hidden sm:flex">
          <ul className="flex gap-6 md:gap-8   lg:bg-transparent lg:backdrop-blur-none px-4 py-2 rounded-full">
            {['Home', 'About', 'Buy', 'Sell'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link text-white lg:text-gray-800 font-medium hover:text-white lg:hover:text-stone-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="btn-cta">Sign up</button>
        </nav>

        {/** Mobile Menu */}
        <div className="block sm:hidden mt-4 ml-4">
          <MobileMenu />
        </div>

        {/* Hero Copy Card - Glassmorphism on Tablet */}
        <div className="max-w-3xl md:text-center lg:text-left bg-white/10   lg:bg-transparent lg:backdrop-blur-none p-8 md:p-12  rounded-[2.5rem] lg:p-0 shadow-2xl md:shadow-none lg:shadow-none mt-20 lg:mt-0 flex flex-col items-center lg:items-start">
          <h1 className="display-title text-[clamp(2.25rem,1.8rem+2.5vw,4.5rem)] mb-6 md:mb-8 text-white lg:text-black leading-tight text-center lg:text-left">
            Top-Rated Realtors <br className="hidden md:block" />
            in the San Francisco <br className="hidden md:block" />
            Bay Area
          </h1>
          <button className="btn-primary mb-8 md:mb-16 px-10 py-4 text-base cursor-pointer shadow-xl">
            Get Started
          </button>
        </div>

        {/* Interactive Gallery & Social Proof */}
        <div className="mt-12 lg:mt-auto w-full flex flex-col items-center lg:items-start">
          <div className="flex gap-3 md:gap-4 mb-8">
            {properties.map((prop) => (
              <button
                key={prop.id}
                onClick={() => setActiveImage(prop)}
                className={`relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                  activeImage.id === prop.id
                    ? 'border-white lg:border-onyx scale-110 shadow-2xl'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={prop.url}
                  alt={prop.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <p className=" lg:text-graphite text-center text-[clamp(0.75rem,1.2vw,0.95rem)] leading-relaxed max-w-md lg:text-left text-white/90 lg:text-black">
            San Francisco boasts over 5,000 real estate agents, but Danielle
            Lazier Real Estate stands out by selling homes for 8.5% above market
            average 20 days faster.
          </p>
        </div>
      </div>
    </section>
  )
}
