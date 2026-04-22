import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu, TextAlignEnd, TextAlignStart } from 'lucide-react'
export const MobileMenu = () => {
  const links = ['Home', 'About', 'Buy', 'Sell']
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <TextAlignStart size={20} color="#f8f8f8" />
      </SheetTrigger>
      <SheetContent className="bg-white/90">
        <SheetHeader></SheetHeader>
        <div className="px-4">
          <ul className="flex flex-col gap-6 text-left w-full">
            {links.map((item) => (
              <li key={item} className="w-full">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative block text-gray-700 text-lg font-medium group w-full"
                >
                  {/* background hover layer */}
                  <span className="absolute inset-0 bg-gray-600/15 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

                  {/* text */}
                  <span className="relative z-10 p-2">{item}</span>

                  {/* bottom border animation */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <SheetFooter>
          <button className="btn-cta w-full mt-6">Sign up</button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
