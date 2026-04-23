import React from 'react'

interface GalleryImage {
  id: number
  url: string
  alt: string
  className: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800&auto=format&fit=crop',
    alt: 'Modern minimalist house with wooden accents',
    className: 'aspect-[4/4] w-full',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    alt: 'Luxury poolside architecture',
    className: 'aspect-[3/3] w-full',
  },
  {
    id: 3,
    url: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Staggered modern apartment complex',
    className: 'aspect-[9/16] w-full ', // Staggered offset
  },
]

const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-16 bg-pure-white overflow-hidden">
      <div className="max-w-dvw mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center justify-between">
        {/* Left: Content Column */}
        <div className="lg:col-span-5 space-y-8 rise-in">
          <header className="space-y-4 flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <h2 className="display-title text-[clamp(3rem,4vw,2.7rem)] leading-tight">
              Where Expertise Meets <br />
              Exceptional Service
            </h2>
            <p className="text-graphite text-[clamp(.6rem,1.5vw,.8rem)] leading-relaxed max-w-lg">
              We at Kinetic Real Estate set our sights high for every person who
              walks through our door. From first-time homebuyers and investors
              to Silicon Valley techies and professionals from all fields, all
              clients are greeted by our diverse and knowledgeable team. We have
              100% confidence in your complete satisfaction.
            </p>
            <button className="btn-primary px-8 py-3.5 text-sm uppercase tracking-widest font-bold">
              Meet the Team
            </button>
          </header>
        </div>

        {/* Right: Asymmetric Image Gallery */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* Internal Left Column: Stacked Images */}
          <div className="space-y-4 lg:space-y-6">
            <div className="overflow-hidden rounded-[2.5rem] island-shell">
              <img
                src={galleryImages[0].url}
                alt={galleryImages[0].alt}
                className={`${galleryImages[0].className} object-cover hover:scale-105 transition-transform duration-700`}
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-[2.5rem] island-shell">
              <img
                src={galleryImages[1].url}
                alt={galleryImages[1].alt}
                className={`${galleryImages[1].className} object-cover hover:scale-105 transition-transform duration-700`}
                loading="lazy"
              />
            </div>
          </div>

          {/* Internal Right Column: Single Tall Tall Image */}
          <div className="overflow-hidden rounded-[2.5rem] island-shell mt-8">
            <img
              src={galleryImages[2].url}
              alt={galleryImages[2].alt}
              className={`${galleryImages[2].className} object-cover hover:scale-105 transition-transform duration-700`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection
