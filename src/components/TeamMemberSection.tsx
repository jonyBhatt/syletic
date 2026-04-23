import React from 'react'

interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  imageUrl: string
}

const team: TeamMember[] = [
  {
    id: 1,
    name: 'KEVIN CRUZ',
    role: 'FOUNDER, REALTOR',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    description:
      'With over 15 years of experience managing diverse property portfolios, Kevin leads Dwellis with a focus on innovation.',
  },
  {
    id: 2,
    name: 'TIEN LE',
    role: 'CO-FOUNDER',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    description:
      'Tien brings a deep understanding of market analytics and strategic investment to the Dwellis leadership team.',
  },
  {
    id: 3,
    name: 'GUILLERM ARRADAZA',
    role: 'CO-FOUNDER, REALTOR',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    description:
      "Guillerm's expertise lies in high-end residential sales and personalized client advisory services.",
  },
  {
    id: 4,
    name: 'JUAN RUAN',
    role: 'PRESIDENT, REALTORS',
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    description:
      'Juan oversees daily operations ensuring that every client interaction meets our gold standard of excellence.',
  },
  {
    id: 5,
    name: 'ED BARRETO, MBA',
    role: 'FOUNDER, REALTOR',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    description:
      'Ed combines his business background with a passion for real estate to deliver data-driven results for sellers.',
  },
  {
    id: 6,
    name: 'Clara Jennings',
    role: 'Property Technology Lead',
    imageUrl:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    description:
      'Clara leads our digital transformation, integrating cutting-edge tech to streamline the buying process.',
  },
]

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-12 font-bold tracking-tight text-[clamp(1.5rem,4vw,2.5rem)] text-foreground">
          Meet the People Behind Dwellis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="relative group aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-6 rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 text-white">
                <p className="text-[clamp(0.7rem,2vw,0.8rem)] font-bold mb-1 opacity-80">
                  {member.role}
                </p>
                <h3 className="text-[clamp(1rem,3vw,1.2rem)] font-bold mb-3">
                  {member.name}
                </h3>
                <p className="text-xs leading-relaxed opacity-90 line-clamp-3">
                  {member.description}
                </p>
                <div className="flex gap-3 mt-4 pt-4 border-t border-white/20">
                  <span className="text-[10px] font-bold opacity-60">
                    LinkedIn
                  </span>
                  <span className="text-[10px] font-bold opacity-60">X</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
