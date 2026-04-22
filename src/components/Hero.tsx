import { useState } from 'react'

const properties = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Concrete brutalist villa at dusk',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    <section className="flex flex-col lg:flex-row min-h-screen bg-pure-white overflow-hidden  mx-auto">
      {/* LEFT: Featured Image Display */}
      <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-screen p-4 lg:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-4xl island-shell">
          {/* Logo Overlay */}
          <div className="absolute top-8 left-0 right-0 z-20 flex items-center gap-2 text-white drop-shadow-md justify-center">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight">Danielle</span>
          </div>

          {/* Main Image with Transition */}
          <img
            key={activeImage.id}
            src={activeImage.url}
            alt={activeImage.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />

          {/* Subtle Industrial Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* RIGHT: Content & Gallery */}
      <div className="w-full  flex flex-col px-8 lg:px-16 py-8 lg:py-12">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16 lg:mb-24">
          <ul className="flex gap-8">
            {['Home', 'About', 'Buy', 'Sell'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link group relative py-1"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-onyx transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <button className="px-6 py-2 border border-ui-border rounded-full text-sm font-medium hover:bg-onyx hover:text-white transition-all duration-300">
            Sign up
          </button>
        </nav>

        {/* Hero Copy */}
        <div className="max-w-3xl mb-12">
          <h1 className="display-title text-5xl lg:text-7xl mb-8">
            Top-Rated Realtors <br />
            in the San Francisco <br />
            Bay Area
          </h1>
          <button className="btn-primary mb-16 px-10 py-4 text-base">
            Get Started
          </button>
        </div>

        {/* Interactive Gallery Thumbnails */}
        <div className="mt-auto">
          <div className="flex gap-4 mb-8">
            {properties.map((prop) => (
              <button
                key={prop.id}
                onClick={() => setActiveImage(prop)}
                className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeImage.id === prop.id
                    ? 'border-onyx scale-105 shadow-lg'
                    : 'border-transparent opacity-70 hover:opacity-100'
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

          <p className="text-graphite text-sm leading-relaxed max-w-lg">
            San Francisco boasts over 5,000 real estate agents, but Danielle
            Lazier Real Estate stands out by selling homes for 8.5% above market
            average 20 days faster, saving you both time and money.
          </p>
        </div>
      </div>
    </section>
  )
}
