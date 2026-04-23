import React, { useState } from 'react'
import {
  MapPin,
  Home,
  DollarSign,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Properties, Locations, PropertyTypes } from '#/lib/mock'

export const DreamHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const activeProperty = Properties[currentIndex]

  const nextProperty = () =>
    setCurrentIndex((prev) => (prev + 1) % Properties.length)
  const prevProperty = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + Properties.length) % Properties.length,
    )

  return (
    <section className="w-full  mx-auto py-20 px-16 bg-pure-white">
      <h2 className="display-title text-4xl mb-12 tracking-tight">
        FIND YOUR DREAM HOME
      </h2>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row items-end gap-8 mb-8  pb-8">
        <FilterItem
          label="Location"
          icon={<MapPin size={18} />}
          options={Locations}
          placeholder="Choose your location"
        />
        <FilterItem
          label="Type"
          icon={<Home size={18} />}
          options={PropertyTypes}
          placeholder="Choose your type"
        />
        <div className="flex-1 w-full space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-onyx">
            Price
          </p>
          <Select>
            <SelectTrigger className="w-full border-0 border-b border-ui-border rounded-none px-0 focus:ring-0 text-graphite h-12">
              <div className="flex items-center gap-3">
                <DollarSign size={18} />
                <SelectValue placeholder="$ 10,000 - 12,000" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="low">$ 5,000 - 10,000</SelectItem>
              <SelectItem value="mid">$ 10,000 - 15,000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Display Slider */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start overflow-hidden">
        {/* Active Property Image */}
        <div className="lg:col-span-4 aspect-4/5 rounded-[2.5rem] overflow-hidden island-shell">
          <img
            src={activeProperty.mainImage}
            alt={activeProperty.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Content & Gallery */}
        <div className="lg:col-span-4 flex flex-col h-full py-6">
          <div className="space-y-6 mb-12">
            <h3 className="display-title text-3xl">{activeProperty.title}</h3>
            <p className="text-graphite leading-relaxed text-sm">
              {activeProperty.description}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex gap-4 mb-8">
              {activeProperty.thumbnails.map((img, idx) => (
                <div
                  key={idx}
                  className="w-32 h-24 rounded-2xl overflow-hidden island-shell"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-4">
              <NavButton
                onClick={prevProperty}
                icon={<ChevronLeft size={20} />}
              />
              <NavButton
                onClick={nextProperty}
                icon={<ChevronRight size={20} />}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Peek of Next Property */}
        <div className="hidden lg:block lg:col-span-4 translate-x-12 opacity-40">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden island-shell grayscale">
            <img
              src={Properties[(currentIndex + 1) % Properties.length].mainImage}
              className="w-full h-full object-cover"
              alt="next peek"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* Sub-components for cleaner structure */
const FilterItem = ({ label, icon, options, placeholder }: any) => (
  <div className="flex-1 w-full space-y-4">
    <p className="text-sm font-semibold uppercase tracking-wider text-onyx">
      {label}
    </p>
    <Select>
      <SelectTrigger className="w-full border-0 border-b border-ui-border rounded-none px-0 focus:ring-0 text-graphite h-12">
        <div className="flex items-center gap-3">
          {icon}
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white">
        {options.map((opt: any) => (
          <SelectItem key={opt.id} value={opt.name}>
            {opt.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
)

const NavButton = ({ onClick, icon, className = '' }: any) => (
  <button
    onClick={onClick}
    className={`p-3 rounded-full border border-ui-border transition-all hover:scale-110 active:scale-95 ${className}`}
  >
    {icon}
  </button>
)
