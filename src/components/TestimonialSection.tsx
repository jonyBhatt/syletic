import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  text: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: 'ASHLEY L.',
    role: 'Homebuyer',
    avatar: 'https://i.pravatar.cc/150?u=1',
    text: "Kevin's diligence and knowledge transfer made the process of buying my first home in the Bay Area much easier to navigate than I ever expected.",
  },
  {
    id: 2,
    author: 'MARCUS T.',
    role: 'Property Seller',
    avatar: 'https://i.pravatar.cc/150?u=2',
    text: 'The team sold our property 8.5% above market average and 20 days faster than we thought possible.',
  },
  {
    id: 3,
    author: 'SARAH J.',
    role: 'Investor',
    avatar: 'https://i.pravatar.cc/150?u=3',
    text: 'Their expertise in Silicon Valley techies and professionals from all fields is exactly what I needed for my portfolio.',
  },
  {
    id: 4,
    author: 'DAVID K.',
    role: 'First-time Buyer',
    avatar: 'https://i.pravatar.cc/150?u=4',
    text: 'A truly knowledgeable team that greeted me with diverse perspectives and 100% confidence in my satisfaction.',
  },
  {
    id: 5,
    author: 'ELENA R.',
    role: 'Luxury Client',
    avatar: 'https://i.pravatar.cc/150?u=5',
    text: 'Modern industrial design meets exceptional service. They truly understand the San Francisco Bay Area market.',
  },
  {
    id: 6,
    author: 'JAMES W.',
    role: 'Tech Professional',
    avatar: 'https://i.pravatar.cc/150?u=6',
    text: "The most innovative real estate experience I've had. The attention to architectural detail in their listings is superb.",
  },
]

export const TestimonialSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(1) // Start with second item in center

  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )

  // Helper to get relative position
  const getPos = (i: number) => {
    const diff = (i - activeIdx + testimonials.length) % testimonials.length
    if (diff === 0) return 'center'
    if (diff === 1 || diff === -(testimonials.length - 1)) return 'right'
    if (diff === testimonials.length - 1 || diff === -1) return 'left'
    return 'hidden'
  }

  return (
    <section className="py-20 bg-pure-white overflow-hidden flex flex-col items-center">
      {/* Dynamic Heading with Clamp */}
      <h2 className="text-center font-bold text-onyx mb-6 px-6 leading-tight text-[clamp(1.5rem,5vw,2.8rem)] font-serif">
        Hear what our <br /> customers have to say
      </h2>

      <div className="relative w-full  h-96 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {testimonials.map((item, i) => {
            const pos = getPos(i)
            if (pos === 'hidden') return null

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: pos === 'center' ? 0 : pos === 'right' ? '105%' : '-105%',
                  scale: pos === 'center' ? 1 : 0.6,
                  opacity: pos === 'center' ? 1 : 0.5,
                  filter: pos === 'center' ? 'blur(0px)' : 'blur(2px)',
                  zIndex: pos === 'center' ? 20 : 10,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                className="absolute w-[90%] md:w-125 bg-gray-100 rounded-[2.5rem] p-8 md:p-12  border border-gray-500/30 shadow-2xl "
              >
                {/* <Quote className="text-onyx/5 absolute top-8 left-8 w-16 h-16" /> */}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-graphite text-[clamp(0.85rem,2.5vw,1rem)] leading-relaxed italic mb-8 grow">
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto border-t border-ui-border pt-6">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-onyx text-sm uppercase tracking-widest">
                        {item.author}
                      </h4>
                      <p className="text-xs text-zinc">{item.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Modern Industrial Controls */}
      <div className="flex gap-6 mt-4">
        <button
          onClick={prev}
          className="p-4 rounded-full cursor-pointer border border-[#a1a1a1] hover:bg-onyx  transition-all group active:scale-90"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={next}
          className="p-4 rounded-full bg-onyx cursor-pointer hover:bg-coal transition-all group active:scale-90 border border-ui-border"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
