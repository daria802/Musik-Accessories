export function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="md:col-span-6 space-y-6">
          <h1 className="text-5xl md:text-7xl leading-tight">
            Master Your Sound
          </h1>
          <p className="text-lg text-white/70 max-w-md">
            Discover premium instruments crafted for musicians who demand excellence. 
            From studio classics to stage legends, find your perfect sound.
          </p>
          <button className="bg-[#FFD700] text-[#0A0A0A] px-8 py-4 rounded-md hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Explore Collection</span>
          </button>
        </div>

        {/* Right Side - Hero Image */}
        <div className="md:col-span-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1767899315209-09ba2f7113d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMHBpYW5vJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTg5MDU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Premium Grand Piano"
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
