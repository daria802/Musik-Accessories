import { Search, Heart, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="grid grid-cols-12 items-center gap-4">
          {/* Logo - Left */}
          <div className="col-span-6 md:col-span-3">
            <h1 className="text-[#FFD700] tracking-tight">VIBE Audio</h1>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden md:block md:col-span-6">
            <ul className="flex justify-center gap-8">
              {['Guitars', 'Keys', 'Drums', 'Pro Audio', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions - Right */}
          <div className="col-span-6 md:col-span-3 flex items-center justify-end gap-5">
            <button className="text-white/80 hover:text-[#FFD700] transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="text-white/80 hover:text-[#FFD700] transition-colors duration-300">
              <Heart size={20} />
            </button>
            <button className="text-white/80 hover:text-[#FFD700] transition-colors duration-300 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#FFD700] text-[#0A0A0A] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
