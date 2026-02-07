import { ArrowRight } from 'lucide-react';

export function OurLegacy() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left - Image */}
        <div className="md:col-span-6">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1695727036766-4d06ac90d7f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBtYWtlciUyMGFydGlzYW58ZW58MXx8fHwxNzY5ODkwNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Master luthier at work"
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="md:col-span-6 space-y-6">
          <h2 className="text-4xl">Our Legacy</h2>
          <p className="text-lg text-white/70 leading-relaxed">
            For over 20 years, VIBE Audio has been the trusted destination for professional 
            musicians and passionate enthusiasts. Our curated selection represents the finest 
            craftsmanship from legendary makers and innovative newcomers alike.
          </p>
          <p className="text-white/60">
            From our humble beginnings in a small workshop to becoming a premier destination 
            for premium instruments, we've maintained our commitment to quality, authenticity, 
            and the art of sound.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#FFD700] hover:gap-4 transition-all duration-300 group"
          >
            Read More
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
